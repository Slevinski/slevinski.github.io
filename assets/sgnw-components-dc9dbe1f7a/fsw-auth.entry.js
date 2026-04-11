import { r as registerInstance, c as createEvent, h, H as Host } from './index-DPMxB3IU.js';

const fswAuthCss = () => `:host{display:block;font:inherit}.panel{border:1px solid #ddd;border-radius:10px;background:#fff;padding:10px}.status-row{display:flex;align-items:center;gap:8px;margin-bottom:8px}.dot{width:10px;height:10px;border-radius:999px;background:#9ca3af}.dot.online{background:#16a34a}.dot.idle{background:#6b7280}.row{display:grid;grid-template-columns:1fr;gap:8px;margin-bottom:8px}@media (min-width: 720px){.row{grid-template-columns:1fr 1fr}}label{display:grid;gap:4px;font-size:13px}input,textarea{width:100%;box-sizing:border-box;padding:8px;border:1px solid #cbd5e1;border-radius:8px;font:inherit}.actions{display:flex;flex-wrap:wrap;gap:8px;margin:8px 0}button{border:1px solid #cbd5e1;border-radius:8px;background:#f8fafc;padding:6px 10px;cursor:pointer}button:disabled{opacity:0.6;cursor:default}.meta{margin:8px 0;font-size:12px;color:#475569}.error{margin:8px 0;color:#b91c1c;font-size:13px}pre{margin:8px 0 0 0;background:#f8fafc;border-radius:8px;border:1px solid #e2e8f0;padding:8px;max-height:220px;overflow:auto;font-size:12px}`;

function normalizeBaseUrl(baseUrl) {
    return String(baseUrl || '').trim().replace(/\/+$/, '');
}
function withTimeout(timeoutMs) {
    if (!Number.isFinite(timeoutMs) || timeoutMs <= 0)
        return null;
    if (typeof AbortController === 'undefined')
        return null;
    const controller = new AbortController();
    setTimeout(() => controller.abort(), timeoutMs);
    return controller;
}
function readStorage(storageKey) {
    try {
        const token = sessionStorage.getItem(storageKey);
        return token && token.trim() ? token.trim() : null;
    }
    catch {
        return null;
    }
}
function writeStorage(storageKey, token) {
    try {
        if (token && token.trim()) {
            sessionStorage.setItem(storageKey, token.trim());
        }
        else {
            sessionStorage.removeItem(storageKey);
        }
    }
    catch {
        // Ignore storage failures in embedded/private contexts.
    }
}
function extractToken(payload) {
    return String(payload?.accessToken ||
        payload?.access_token ||
        payload?.token ||
        payload?.jwt ||
        payload?.session?.accessToken ||
        payload?.session?.access_token ||
        '').trim();
}
const FswAuth = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.sgnwAuthStatus = createEvent(this, "sgnw-auth-status");
        this.sgnwAuthError = createEvent(this, "sgnw-auth-error");
        this.sgnwAuthToken = createEvent(this, "sgnw-auth-token");
        /** Base URL for platform API auth endpoints. */
        this.baseUrl = 'http://localhost:8080';
        /** Storage key in `sessionStorage` for persisting Bearer token. */
        this.storageKey = 'sgnw_token';
        /** Persist token in `sessionStorage` and auto-restore on load. */
        this.persist = true;
        /** Abort network requests after this many ms (0 disables). */
        this.timeoutMs = 2500;
        this.checking = false;
        this.authenticated = false;
        this.token = null;
        this.username = '';
        this.password = '';
        this.tokenInput = '';
        this.statusText = 'Idle';
        this.errorText = null;
        this.meText = '{}';
        this.onLoginClick = async (event) => {
            event.preventDefault();
            try {
                await this.login(this.username, this.password);
                this.password = '';
            }
            catch {
                // Errors already emitted and shown in state.
            }
        };
        this.onSetTokenClick = async (event) => {
            event.preventDefault();
            try {
                await this.setToken(this.tokenInput);
            }
            catch (err) {
                const message = String(err?.message || err || 'Token error');
                this.errorText = message;
                this.statusText = 'Token rejected';
                this.sgnwAuthError.emit({
                    baseUrl: normalizeBaseUrl(this.baseUrl),
                    message,
                    source: 'paste',
                });
            }
        };
        this.onCheckClick = async (event) => {
            event.preventDefault();
            await this.checkAuth();
        };
        this.onLogoutClick = async (event) => {
            event.preventDefault();
            await this.clearToken();
        };
    }
    connectedCallback() {
        if (!this.persist)
            return;
        const restored = readStorage(this.storageKey);
        if (!restored)
            return;
        this.token = restored;
        this.authenticated = true;
        this.statusText = 'Token restored';
        this.sgnwAuthToken.emit({
            baseUrl: normalizeBaseUrl(this.baseUrl),
            token: restored,
            source: 'storage',
        });
        this.sgnwAuthStatus.emit({
            baseUrl: normalizeBaseUrl(this.baseUrl),
            authenticated: true,
            tokenPresent: true,
            source: 'storage',
        });
    }
    /** Set/replace active bearer token (for pasted JWTs). */
    async setToken(token) {
        const next = String(token || '').trim();
        if (!next) {
            throw new Error('Token is required.');
        }
        this.token = next;
        this.authenticated = true;
        this.errorText = null;
        this.statusText = 'Token set';
        this.tokenInput = next;
        if (this.persist)
            writeStorage(this.storageKey, next);
        this.sgnwAuthToken.emit({
            baseUrl: normalizeBaseUrl(this.baseUrl),
            token: next,
            source: 'paste',
        });
        this.sgnwAuthStatus.emit({
            baseUrl: normalizeBaseUrl(this.baseUrl),
            authenticated: true,
            tokenPresent: true,
            source: 'paste',
        });
    }
    /** Clear active token and storage. */
    async clearToken() {
        this.token = null;
        this.authenticated = false;
        this.errorText = null;
        this.statusText = 'Logged out';
        this.tokenInput = '';
        if (this.persist)
            writeStorage(this.storageKey, null);
        this.sgnwAuthStatus.emit({
            baseUrl: normalizeBaseUrl(this.baseUrl),
            authenticated: false,
            tokenPresent: false,
            source: 'logout',
        });
    }
    /** Return current bearer token or null. */
    async getToken() {
        return this.token;
    }
    /** Login with username/password against `POST /auth/login`; stores token on success. */
    async login(username, password) {
        const baseUrl = normalizeBaseUrl(this.baseUrl);
        const url = `${baseUrl}/auth/login`;
        const body = {
            username: String(username || '').trim(),
            password: String(password || ''),
        };
        if (!body.username || !body.password) {
            throw new Error('Username and password are required.');
        }
        this.checking = true;
        this.errorText = null;
        this.statusText = 'Logging in...';
        try {
            const controller = withTimeout(this.timeoutMs);
            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    accept: 'application/json, text/plain;q=0.9, */*;q=0.8',
                    'content-type': 'application/json',
                },
                body: JSON.stringify(body),
                signal: controller?.signal,
            });
            const raw = await res.text();
            let parsed = raw;
            try {
                parsed = JSON.parse(raw);
            }
            catch {
                // Keep raw text fallback.
            }
            if (!res.ok) {
                const message = `Login failed (HTTP ${res.status})`;
                this.errorText = message;
                this.statusText = message;
                this.sgnwAuthError.emit({ baseUrl, message, status: res.status, source: 'login' });
                throw new Error(message);
            }
            const nextToken = extractToken(parsed);
            if (!nextToken) {
                const message = 'Login response did not include a token.';
                this.errorText = message;
                this.statusText = message;
                this.sgnwAuthError.emit({ baseUrl, message, source: 'login' });
                throw new Error(message);
            }
            this.token = nextToken;
            this.authenticated = true;
            this.tokenInput = nextToken;
            this.statusText = 'Login succeeded';
            this.errorText = null;
            if (this.persist)
                writeStorage(this.storageKey, nextToken);
            this.sgnwAuthToken.emit({ baseUrl, token: nextToken, source: 'login' });
            this.sgnwAuthStatus.emit({
                baseUrl,
                authenticated: true,
                tokenPresent: true,
                status: res.status,
                source: 'login',
            });
            return nextToken;
        }
        catch (err) {
            const message = err?.name === 'AbortError' ? 'Login timeout' : String(err?.message || err || 'Login failed');
            this.errorText = message;
            this.statusText = 'Login failed';
            this.sgnwAuthError.emit({ baseUrl, message, source: 'login' });
            throw new Error(message);
        }
        finally {
            this.checking = false;
        }
    }
    /** Check current token against `GET /auth/me`. */
    async checkAuth() {
        const baseUrl = normalizeBaseUrl(this.baseUrl);
        const token = this.token;
        if (!token) {
            const message = 'No token set.';
            this.errorText = message;
            this.statusText = message;
            this.sgnwAuthError.emit({ baseUrl, message, source: 'check' });
            return false;
        }
        this.checking = true;
        this.errorText = null;
        this.statusText = 'Checking /auth/me...';
        const controller = withTimeout(this.timeoutMs);
        try {
            const res = await this.authFetch('/auth/me', {
                method: 'GET',
                headers: { accept: 'application/json' },
                signal: controller?.signal,
            });
            const raw = await res.text();
            let parsed = raw;
            try {
                parsed = JSON.parse(raw);
            }
            catch {
                // Keep raw text.
            }
            this.meText = typeof parsed === 'string' ? parsed : JSON.stringify(parsed, null, 2);
            if (!res.ok) {
                const message = `Auth check failed (HTTP ${res.status})`;
                this.authenticated = false;
                this.errorText = message;
                this.statusText = message;
                this.sgnwAuthStatus.emit({
                    baseUrl,
                    authenticated: false,
                    tokenPresent: true,
                    status: res.status,
                    source: 'check',
                });
                this.sgnwAuthError.emit({ baseUrl, message, status: res.status, source: 'check' });
                return false;
            }
            this.authenticated = true;
            this.errorText = null;
            this.statusText = 'Authenticated';
            this.sgnwAuthStatus.emit({
                baseUrl,
                authenticated: true,
                tokenPresent: true,
                status: res.status,
                source: 'check',
                user: parsed?.user || parsed,
            });
            return true;
        }
        catch (err) {
            const message = err?.name === 'AbortError' ? 'Auth check timeout' : String(err?.message || err || 'Auth check failed');
            this.authenticated = false;
            this.errorText = message;
            this.statusText = 'Auth check failed';
            this.sgnwAuthError.emit({ baseUrl, message, source: 'check' });
            return false;
        }
        finally {
            this.checking = false;
        }
    }
    /** Perform a fetch with `Authorization: Bearer <token>` attached. */
    async authFetch(pathOrUrl, init) {
        const token = this.token;
        if (!token)
            throw new Error('No token set.');
        const baseUrl = normalizeBaseUrl(this.baseUrl);
        const nextPath = String(pathOrUrl || '').trim();
        const url = /^https?:\/\//i.test(nextPath)
            ? nextPath
            : `${baseUrl}${nextPath.startsWith('/') ? '' : '/'}${nextPath}`;
        const headers = new Headers(init?.headers || {});
        headers.set('authorization', `Bearer ${token}`);
        if (!headers.has('accept'))
            headers.set('accept', 'application/json');
        return fetch(url, { ...(init || {}), headers });
    }
    render() {
        const tokenPreview = this.token ? `${this.token.slice(0, 12)}...` : '(none)';
        return (h(Host, { key: '86c57b5d2c292de1fdb05075492b7f62e8b6da5c' }, h("div", { key: 'e422dbec7583cab003a5b39a110511a64e3e0980', class: "panel" }, h("div", { key: 'dd9ffe8f44b66d633b45f4d9aff1828c0d95b98e', class: "status-row" }, h("span", { key: '8dc7922829a2c4d0ffb3282859f2e993cd2bb2da', class: `dot ${this.authenticated ? 'online' : 'idle'}`, "aria-hidden": "true" }), h("strong", { key: '1de7ff8a31e0070663251aac54f87483bddc8a9a' }, this.authenticated ? 'Authenticated' : 'Anonymous'), h("span", { key: '158231f34a9c849cb7f62f40f90cccd5bcdee9b5', class: "meta" }, this.statusText)), h("div", { key: 'c08e6abb58a88ede49a69f5ed63331b147767783', class: "row" }, h("label", { key: 'eb3820e420b110a773a180b3a4f7e3afcb141492' }, "Username", h("input", { key: '24e56d3305cf494269229d72d2f50044b1351b5f', type: "text", value: this.username, onInput: (event) => (this.username = event.target.value) })), h("label", { key: '73f2ff8a50ffebf440c2b5944010608da6659fcd' }, "Password", h("input", { key: '5920305ddab799400950d6374960f509d5756ec1', type: "password", value: this.password, onInput: (event) => (this.password = event.target.value) }))), h("div", { key: 'da348aa24b430204c1dbf5619cb0b11c4ee2080c', class: "actions" }, h("button", { key: '5844cb3503df00a5e8ef50787bf4863657b8ebbc', type: "button", onClick: this.onLoginClick, disabled: this.checking }, "Login"), h("button", { key: '146f6f8b73f4ffe1433631f41343ef95d4e67be0', type: "button", onClick: this.onCheckClick, disabled: this.checking }, "Check /auth/me"), h("button", { key: 'fb9d1f2b4a172d6e10f1ba9124b536c821aa6d7d', type: "button", onClick: this.onLogoutClick, disabled: this.checking }, "Clear Token")), h("label", { key: 'c09b2aa6b0930d8aa88cca15bc051e68b34fcd3d' }, "JWT / Bearer Token", h("textarea", { key: '51e8ae320c18280a7ca6bf050322efbff3203cfd', rows: 3, value: this.tokenInput, onInput: (event) => (this.tokenInput = event.target.value) })), h("div", { key: '0a8bd1505c9407f47811e33ab2a7efc078ec8fdd', class: "actions" }, h("button", { key: 'ad5f6c1f6e0ef584924574ed663e8a7038b51505', type: "button", onClick: this.onSetTokenClick, disabled: this.checking }, "Use Token")), h("p", { key: 'd51af6fd09a3ce3071fab786ab0971c0be4ae074', class: "meta" }, "Token preview: ", tokenPreview), this.errorText ? h("p", { class: "error" }, this.errorText) : null, h("pre", { key: '162f183c68bcb3faaed36bc4b9957eb1cecb7568' }, this.meText))));
    }
};
FswAuth.style = fswAuthCss();

export { FswAuth as fsw_auth };
