const DEFAULTS = {
    baseUrl: 'https://sutton-signwriting-font-db.wmcloud.org',
};
let currentDefaults = { ...DEFAULTS };
function getSgnwComponentsDefaults() {
    return currentDefaults;
}
/**
 * Set global defaults for *newly-created* component instances.
 * Existing mounted components intentionally do not auto-update.
 */
function setSgnwComponentsDefaults(next) {
    currentDefaults = { ...currentDefaults, ...next };
    return currentDefaults;
}

export { getSgnwComponentsDefaults, setSgnwComponentsDefaults };
