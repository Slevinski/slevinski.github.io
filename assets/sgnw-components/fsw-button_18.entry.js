import { r as registerInstance, h, H as Host, c as createEvent, g as getElement } from './index-DPMxB3IU.js';
import { getSgnwComponentsDefaults } from './index.js';
import { cssAppend, cssLoaded } from '@sutton-signwriting/font-ttf/font/font.mjs';
import { signSvg as fswSignSvg, symbolSvg as fswSymbolSvg } from '@sutton-signwriting/font-ttf/fsw/fsw.mjs';
import { signSvg as swuSignSvg, symbolSvg as swuSymbolSvg } from '@sutton-signwriting/font-ttf/swu/swu.mjs';

const fswButtonCss = () => `:host{display:inline-block;width:100%;height:100%}button{width:100%;height:100%;display:inline-flex;align-items:center;justify-content:center;border:1px solid #d0d0d0;border-radius:10px;background:#f7f7f7;padding:0;cursor:pointer;user-select:none;touch-action:manipulation}button:active{background:#e9e9e9}.icon{width:70%;height:70%;display:inline-flex}.icon :global(svg){width:100%;height:100%;fill:currentColor}`;

const FswButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /** Inline SVG markup string. */
        this.svg = '';
    }
    render() {
        return (h(Host, { key: '9df4f613ad4c92188b8939594131b5579996b7f7' }, h("button", { key: '27ac9b535d19bed20a268072bec8551e389bda4b', type: "button", "aria-label": this.ariaLabel }, h("span", { key: '9c4ca4b434b77f6206efc655ec815892c602209d', class: "icon", innerHTML: this.svg }))));
    }
};
FswButton.style = fswButtonCss();

const iswa2010FSW = {
    S10000: [
        'S10000',
        'S10110',
        'S10210',
        'S10310',
        'S10410',
        'S10510',
        'S10610',
        'S10710',
        'S10810',
        'S10910',
        'S10a10',
        'S10b10',
        'S10c10',
        'S10d10',
    ],
    S10e00: [
        'S10e00',
        'S10f10',
        'S11010',
        'S11110',
        'S11210',
        'S11310',
        'S11410',
        'S11510',
        'S11610',
        'S11710',
        'S11810',
        'S11910',
        'S11a10',
        'S11b10',
        'S11c10',
        'S11d10',
    ],
    S11e00: [
        'S11e00',
        'S11f10',
        'S12010',
        'S12110',
        'S12210',
        'S12310',
        'S12410',
        'S12510',
        'S12610',
        'S12710',
        'S12810',
        'S12910',
        'S12a10',
        'S12b10',
        'S12c10',
        'S12d10',
        'S12e10',
        'S12f10',
        'S13010',
        'S13110',
        'S13210',
        'S13310',
        'S13410',
        'S13510',
        'S13610',
        'S13710',
        'S13810',
        'S13910',
        'S13a10',
        'S13b10',
        'S13c10',
        'S13d10',
        'S13e10',
        'S13f10',
        'S14010',
        'S14110',
        'S14210',
        'S14310',
    ],
    S14400: ['S14400', 'S14510', 'S14610', 'S14710', 'S14810', 'S14910', 'S14a10', 'S14b10'],
    S14c00: [
        'S14c00',
        'S14d10',
        'S14e10',
        'S14f10',
        'S15010',
        'S15110',
        'S15210',
        'S15310',
        'S15410',
        'S15510',
        'S15610',
        'S15710',
        'S15810',
        'S15910',
        'S15a10',
        'S15b10',
        'S15c10',
        'S15d10',
        'S15e10',
        'S15f10',
        'S16010',
        'S16110',
        'S16210',
        'S16310',
        'S16410',
        'S16510',
        'S16610',
        'S16710',
        'S16810',
        'S16910',
        'S16a10',
        'S16b10',
        'S16c10',
        'S16d10',
        'S16e10',
        'S16f10',
        'S17010',
        'S17110',
        'S17210',
        'S17310',
        'S17410',
        'S17510',
        'S17610',
        'S17710',
        'S17810',
        'S17910',
        'S17a10',
        'S17b10',
        'S17c10',
        'S17d10',
        'S17e10',
        'S17f10',
        'S18010',
        'S18110',
        'S18210',
        'S18310',
        'S18410',
        'S18510',
    ],
    S18600: [
        'S18600',
        'S18710',
        'S18810',
        'S18910',
        'S18a10',
        'S18b10',
        'S18c10',
        'S18d10',
        'S18e10',
        'S18f10',
        'S19010',
        'S19110',
        'S19210',
        'S19310',
        'S19410',
        'S19510',
        'S19610',
        'S19710',
        'S19810',
        'S19910',
        'S19a10',
        'S19b10',
        'S19c10',
        'S19d10',
        'S19e10',
        'S19f10',
        'S1a010',
        'S1a110',
        'S1a210',
        'S1a310',
    ],
    S1a400: [
        'S1a400',
        'S1a510',
        'S1a610',
        'S1a710',
        'S1a810',
        'S1a910',
        'S1aa10',
        'S1ab10',
        'S1ac10',
        'S1ad10',
        'S1ae10',
        'S1af10',
        'S1b010',
        'S1b110',
        'S1b210',
        'S1b310',
        'S1b410',
        'S1b510',
        'S1b610',
        'S1b710',
        'S1b810',
        'S1b910',
    ],
    S1ba00: [
        'S1ba00',
        'S1bb10',
        'S1bc10',
        'S1bd10',
        'S1be10',
        'S1bf10',
        'S1c010',
        'S1c110',
        'S1c210',
        'S1c310',
        'S1c410',
        'S1c510',
        'S1c610',
        'S1c710',
        'S1c810',
        'S1c910',
        'S1ca10',
        'S1cb10',
        'S1cc10',
    ],
    S1cd00: [
        'S1cd00',
        'S1ce10',
        'S1cf10',
        'S1d010',
        'S1d110',
        'S1d210',
        'S1d310',
        'S1d410',
        'S1d510',
        'S1d610',
        'S1d710',
        'S1d810',
        'S1d910',
        'S1da10',
        'S1db10',
        'S1dc10',
        'S1dd10',
        'S1de10',
        'S1df10',
        'S1e010',
        'S1e110',
        'S1e200',
        'S1e310',
        'S1e410',
        'S1e510',
        'S1e610',
        'S1e710',
        'S1e810',
        'S1e910',
        'S1ea10',
        'S1eb10',
        'S1ec10',
        'S1ed10',
        'S1ee10',
        'S1ef10',
        'S1f010',
        'S1f110',
        'S1f210',
        'S1f310',
        'S1f410',
    ],
    S1f500: [
        'S1f500',
        'S1f610',
        'S1f710',
        'S1f810',
        'S1f910',
        'S1fa10',
        'S1fb10',
        'S1fc10',
        'S1fd10',
        'S1fe10',
        'S1ff10',
        'S20010',
        'S20110',
        'S20210',
        'S20310',
        'S20410',
    ],
    S20500: [
        'S20500',
        'S20600',
        'S20700',
        'S20800',
        'S20900',
        'S20a00',
        'S20b00',
        'S20c00',
        'S20d00',
        'S20e00',
        'S20f00',
        'S21000',
        'S21100',
        'S21200',
        'S21300',
        'S21400',
        'S21500',
    ],
    S21600: [
        'S21600',
        'S21700',
        'S21800',
        'S21900',
        'S21a00',
        'S21b00',
        'S21c00',
        'S21d00',
        'S21e00',
        'S21f00',
        'S22000',
        'S22100',
        'S22200',
        'S22300',
        'S22400',
        'S22500',
        'S22600',
        'S22700',
        'S22800',
        'S22900',
    ],
    S22a00: [
        'S22a00',
        'S22b00',
        'S22c00',
        'S22d00',
        'S22e00',
        'S22f00',
        'S23000',
        'S23100',
        'S23200',
        'S23300',
        'S23400',
        'S23500',
        'S23600',
        'S23700',
        'S23800',
        'S23900',
        'S23a00',
        'S23b00',
        'S23c00',
        'S23d00',
        'S23e00',
        'S23f00',
        'S24000',
        'S24100',
        'S24200',
        'S24300',
        'S24400',
        'S24500',
        'S24600',
        'S24700',
        'S24800',
        'S24900',
        'S24a00',
        'S24b00',
        'S24c00',
        'S24d00',
        'S24e00',
        'S24f00',
        'S25000',
        'S25100',
        'S25200',
        'S25300',
        'S25400',
    ],
    S25500: [
        'S25500',
        'S25600',
        'S25700',
        'S25800',
        'S25900',
        'S25a00',
        'S25b00',
        'S25c00',
        'S25d00',
        'S25e00',
        'S25f00',
        'S26000',
        'S26100',
        'S26200',
        'S26300',
        'S26400',
    ],
    S26500: [
        'S26500',
        'S26600',
        'S26700',
        'S26800',
        'S26900',
        'S26a00',
        'S26b00',
        'S26c00',
        'S26d00',
        'S26e00',
        'S26f00',
        'S27000',
        'S27100',
        'S27200',
        'S27300',
        'S27400',
        'S27500',
        'S27600',
        'S27700',
        'S27800',
        'S27900',
        'S27a00',
        'S27b00',
        'S27c00',
        'S27d00',
        'S27e00',
        'S27f00',
        'S28000',
        'S28100',
        'S28200',
        'S28300',
        'S28400',
        'S28500',
        'S28600',
        'S28700',
    ],
    S28800: [
        'S28800',
        'S28900',
        'S28a00',
        'S28b00',
        'S28c00',
        'S28d00',
        'S28e00',
        'S28f00',
        'S29000',
        'S29100',
        'S29200',
        'S29300',
        'S29400',
        'S29500',
        'S29600',
        'S29700',
        'S29800',
        'S29900',
        'S29a00',
        'S29b00',
        'S29c00',
        'S29d00',
        'S29e00',
        'S29f00',
        'S2a000',
        'S2a100',
        'S2a200',
        'S2a300',
        'S2a400',
        'S2a500',
    ],
    S2a600: [
        'S2a600',
        'S2a700',
        'S2a800',
        'S2a900',
        'S2aa00',
        'S2ab00',
        'S2ac00',
        'S2ad00',
        'S2ae00',
        'S2af00',
        'S2b000',
        'S2b100',
        'S2b200',
        'S2b300',
        'S2b400',
        'S2b500',
        'S2b600',
    ],
    S2b700: [
        'S2b700',
        'S2b800',
        'S2b900',
        'S2ba00',
        'S2bb00',
        'S2bc00',
        'S2bd00',
        'S2be00',
        'S2bf00',
        'S2c000',
        'S2c100',
        'S2c200',
        'S2c300',
        'S2c400',
        'S2c500',
        'S2c600',
        'S2c700',
        'S2c800',
        'S2c900',
        'S2ca00',
        'S2cb00',
        'S2cc00',
        'S2cd00',
        'S2ce00',
        'S2cf00',
        'S2d000',
        'S2d100',
        'S2d200',
        'S2d300',
        'S2d400',
    ],
    S2d500: [
        'S2d500',
        'S2d600',
        'S2d700',
        'S2d800',
        'S2d900',
        'S2da00',
        'S2db00',
        'S2dc00',
        'S2dd00',
        'S2de00',
        'S2df00',
        'S2e000',
        'S2e100',
        'S2e200',
    ],
    S2e300: [
        'S2e300',
        'S2e400',
        'S2e500',
        'S2e600',
        'S2e700',
        'S2e800',
        'S2e900',
        'S2ea00',
        'S2eb00',
        'S2ec00',
        'S2ed00',
        'S2ee00',
        'S2ef00',
        'S2f000',
        'S2f100',
        'S2f200',
        'S2f300',
        'S2f400',
        'S2f500',
        'S2f600',
    ],
    S2f700: ['S2f700', 'S2f800', 'S2f900', 'S2fa00', 'S2fb00', 'S2fc00', 'S2fd00', 'S2fe00'],
    S2ff00: [
        'S2ff00',
        'S30000',
        'S30100',
        'S30200',
        'S30300',
        'S30400',
        'S30500',
        'S30600',
        'S30700',
        'S30800',
        'S30900',
    ],
    S30a00: [
        'S30a00',
        'S30b00',
        'S30c00',
        'S30d00',
        'S30e00',
        'S30f00',
        'S31000',
        'S31100',
        'S31200',
        'S31300',
        'S31400',
        'S31500',
        'S31600',
        'S31700',
        'S31800',
        'S31900',
        'S31a00',
        'S31b00',
        'S31c00',
        'S31d00',
        'S31e00',
        'S31f00',
        'S32000',
        'S32100',
        'S32200',
        'S32300',
        'S32400',
        'S32500',
        'S32600',
        'S32700',
        'S32800',
        'S32900',
    ],
    S32a00: [
        'S32a00',
        'S32b00',
        'S32c00',
        'S32d00',
        'S32e00',
        'S32f00',
        'S33000',
        'S33100',
        'S33200',
        'S33300',
        'S33400',
        'S33500',
        'S33600',
        'S33700',
        'S33800',
        'S33900',
        'S33a00',
    ],
    S33b00: [
        'S33b00',
        'S33c00',
        'S33d00',
        'S33e00',
        'S33f00',
        'S34000',
        'S34100',
        'S34200',
        'S34300',
        'S34400',
        'S34500',
        'S34600',
        'S34700',
        'S34800',
        'S34900',
        'S34a00',
        'S34b00',
        'S34c00',
        'S34d00',
        'S34e00',
        'S34f00',
        'S35000',
        'S35100',
        'S35200',
        'S35300',
        'S35400',
        'S35500',
        'S35600',
        'S35700',
        'S35800',
    ],
    S35900: [
        'S35900',
        'S35a00',
        'S35b00',
        'S35c00',
        'S35d00',
        'S35e00',
        'S35f00',
        'S36000',
        'S36100',
        'S36200',
        'S36300',
        'S36400',
        'S36500',
        'S36600',
        'S36700',
        'S36800',
        'S36900',
        'S36a00',
        'S36b00',
        'S36c00',
    ],
    S36d00: ['S36d00', 'S36e00', 'S36f00', 'S37000', 'S37100', 'S37200', 'S37300', 'S37400', 'S37500'],
    S37600: ['S37600', 'S37700', 'S37800', 'S37900', 'S37a00', 'S37b00', 'S37c00', 'S37d00', 'S37e00'],
    S37f00: ['S37f00', 'S38000', 'S38100', 'S38200', 'S38300', 'S38400', 'S38500', 'S38600'],
    S38700: ['S38700', 'S38800', 'S38900', 'S38a00', 'S38b00'],
};
const iswa2010SWU = {
    '񀀁': ['񀀁', '񀁱', '񀃑', '񀄱', '񀆑', '񀇱', '񀉑', '񀊱', '񀌑', '񀍱', '񀏑', '񀐱', '񀒑', '񀓱'],
    '񀕁': [
        '񀕁',
        '񀖱',
        '񀘑',
        '񀙱',
        '񀛑',
        '񀜱',
        '񀞑',
        '񀟱',
        '񀡑',
        '񀢱',
        '񀤑',
        '񀥱',
        '񀧑',
        '񀨱',
        '񀪑',
        '񀫱',
    ],
    '񀭁': [
        '񀭁',
        '񀮱',
        '񀰑',
        '񀱱',
        '񀳑',
        '񀴱',
        '񀶑',
        '񀷱',
        '񀹑',
        '񀺱',
        '񀼑',
        '񀽱',
        '񀿑',
        '񁀱',
        '񁂑',
        '񁃱',
        '񁅑',
        '񁆱',
        '񁈑',
        '񁉱',
        '񁋑',
        '񁌱',
        '񁎑',
        '񁏱',
        '񁑑',
        '񁒱',
        '񁔑',
        '񁕱',
        '񁗑',
        '񁘱',
        '񁚑',
        '񁛱',
        '񁝑',
        '񁞱',
        '񁠑',
        '񁡱',
        '񁣑',
        '񁤱',
    ],
    '񁦁': ['񁦁', '񁧱', '񁩑', '񁪱', '񁬑', '񁭱', '񁯑', '񁰱'],
    '񁲁': [
        '񁲁',
        '񁳱',
        '񁵑',
        '񁶱',
        '񁸑',
        '񁹱',
        '񁻑',
        '񁼱',
        '񁾑',
        '񁿱',
        '񂁑',
        '񂂱',
        '񂄑',
        '񂅱',
        '񂇑',
        '񂈱',
        '񂊑',
        '񂋱',
        '񂍑',
        '񂎱',
        '񂐑',
        '񂑱',
        '񂓑',
        '񂔱',
        '񂖑',
        '񂗱',
        '񂙑',
        '񂚱',
        '񂜑',
        '񂝱',
        '񂟑',
        '񂠱',
        '񂢑',
        '񂣱',
        '񂥑',
        '񂦱',
        '񂨑',
        '񂩱',
        '񂫑',
        '񂬱',
        '񂮑',
        '񂯱',
        '񂱑',
        '񂲱',
        '񂴑',
        '񂵱',
        '񂷑',
        '񂸱',
        '񂺑',
        '񂻱',
        '񂽑',
        '񂾱',
        '񃀑',
        '񃁱',
        '񃃑',
        '񃄱',
        '񃆑',
        '񃇱',
    ],
    '񃉁': [
        '񃉁',
        '񃊱',
        '񃌑',
        '񃍱',
        '񃏑',
        '񃐱',
        '񃒑',
        '񃓱',
        '񃕑',
        '񃖱',
        '񃘑',
        '񃙱',
        '񃛑',
        '񃜱',
        '񃞑',
        '񃟱',
        '񃡑',
        '񃢱',
        '񃤑',
        '񃥱',
        '񃧑',
        '񃨱',
        '񃪑',
        '񃫱',
        '񃭑',
        '񃮱',
        '񃰑',
        '񃱱',
        '񃳑',
        '񃴱',
    ],
    '񃶁': [
        '񃶁',
        '񃷱',
        '񃹑',
        '񃺱',
        '񃼑',
        '񃽱',
        '񃿑',
        '񄀱',
        '񄂑',
        '񄃱',
        '񄅑',
        '񄆱',
        '񄈑',
        '񄉱',
        '񄋑',
        '񄌱',
        '񄎑',
        '񄏱',
        '񄑑',
        '񄒱',
        '񄔑',
        '񄕱',
    ],
    '񄗁': [
        '񄗁',
        '񄘱',
        '񄚑',
        '񄛱',
        '񄝑',
        '񄞱',
        '񄠑',
        '񄡱',
        '񄣑',
        '񄤱',
        '񄦑',
        '񄧱',
        '񄩑',
        '񄪱',
        '񄬑',
        '񄭱',
        '񄯑',
        '񄰱',
        '񄲑',
    ],
    '񄳡': [
        '񄳡',
        '񄵑',
        '񄶱',
        '񄸑',
        '񄹱',
        '񄻑',
        '񄼱',
        '񄾑',
        '񄿱',
        '񅁑',
        '񅂱',
        '񅄑',
        '񅅱',
        '񅇑',
        '񅈱',
        '񅊑',
        '񅋱',
        '񅍑',
        '񅎱',
        '񅐑',
        '񅑱',
        '񅓁',
        '񅔱',
        '񅖑',
        '񅗱',
        '񅙑',
        '񅚱',
        '񅜑',
        '񅝱',
        '񅟑',
        '񅠱',
        '񅢑',
        '񅣱',
        '񅥑',
        '񅦱',
        '񅨑',
        '񅩱',
        '񅫑',
        '񅬱',
        '񅮑',
    ],
    '񅯡': [
        '񅯡',
        '񅱑',
        '񅲱',
        '񅴑',
        '񅵱',
        '񅷑',
        '񅸱',
        '񅺑',
        '񅻱',
        '񅽑',
        '񅾱',
        '񆀑',
        '񆁱',
        '񆃑',
        '񆄱',
        '񆆑',
    ],
    '񆇡': [
        '񆇡',
        '񆉁',
        '񆊡',
        '񆌁',
        '񆍡',
        '񆏁',
        '񆐡',
        '񆒁',
        '񆓡',
        '񆕁',
        '񆖡',
        '񆘁',
        '񆙡',
        '񆛁',
        '񆜡',
        '񆞁',
        '񆟡',
    ],
    '񆡁': [
        '񆡁',
        '񆢡',
        '񆤁',
        '񆥡',
        '񆧁',
        '񆨡',
        '񆪁',
        '񆫡',
        '񆭁',
        '񆮡',
        '񆰁',
        '񆱡',
        '񆳁',
        '񆴡',
        '񆶁',
        '񆷡',
        '񆹁',
        '񆺡',
        '񆼁',
        '񆽡',
    ],
    '񆿁': [
        '񆿁',
        '񇀡',
        '񇂁',
        '񇃡',
        '񇅁',
        '񇆡',
        '񇈁',
        '񇉡',
        '񇋁',
        '񇌡',
        '񇎁',
        '񇏡',
        '񇑁',
        '񇒡',
        '񇔁',
        '񇕡',
        '񇗁',
        '񇘡',
        '񇚁',
        '񇛡',
        '񇝁',
        '񇞡',
        '񇠁',
        '񇡡',
        '񇣁',
        '񇤡',
        '񇦁',
        '񇧡',
        '񇩁',
        '񇪡',
        '񇬁',
        '񇭡',
        '񇯁',
        '񇰡',
        '񇲁',
        '񇳡',
        '񇵁',
        '񇶡',
        '񇸁',
        '񇹡',
        '񇻁',
        '񇼡',
        '񇾁',
    ],
    '񇿡': [
        '񇿡',
        '񈁁',
        '񈂡',
        '񈄁',
        '񈅡',
        '񈇁',
        '񈈡',
        '񈊁',
        '񈋡',
        '񈍁',
        '񈎡',
        '񈐁',
        '񈑡',
        '񈓁',
        '񈔡',
        '񈖁',
    ],
    '񈗡': [
        '񈗡',
        '񈙁',
        '񈚡',
        '񈜁',
        '񈝡',
        '񈟁',
        '񈠡',
        '񈢁',
        '񈣡',
        '񈥁',
        '񈦡',
        '񈨁',
        '񈩡',
        '񈫁',
        '񈬡',
        '񈮁',
        '񈯡',
        '񈱁',
        '񈲡',
        '񈴁',
        '񈵡',
        '񈷁',
        '񈸡',
        '񈺁',
        '񈻡',
        '񈽁',
        '񈾡',
        '񉀁',
        '񉁡',
        '񉃁',
        '񉄡',
        '񉆁',
        '񉇡',
        '񉉁',
        '񉊡',
    ],
    '񉌁': [
        '񉌁',
        '񉍡',
        '񉏁',
        '񉐡',
        '񉒁',
        '񉓡',
        '񉕁',
        '񉖡',
        '񉘁',
        '񉙡',
        '񉛁',
        '񉜡',
        '񉞁',
        '񉟡',
        '񉡁',
        '񉢡',
        '񉤁',
        '񉥡',
        '񉧁',
        '񉨡',
        '񉪁',
        '񉫡',
        '񉭁',
        '񉮡',
        '񉰁',
        '񉱡',
        '񉳁',
        '񉴡',
        '񉶁',
        '񉷡',
    ],
    '񉹁': [
        '񉹁',
        '񉺡',
        '񉼁',
        '񉽡',
        '񉿁',
        '񊀡',
        '񊂁',
        '񊃡',
        '񊅁',
        '񊆡',
        '񊈁',
        '񊉡',
        '񊋁',
        '񊌡',
        '񊎁',
        '񊏡',
        '񊑁',
    ],
    '񊒡': [
        '񊒡',
        '񊔁',
        '񊕡',
        '񊗁',
        '񊘡',
        '񊚁',
        '񊛡',
        '񊝁',
        '񊞡',
        '񊠁',
        '񊡡',
        '񊣁',
        '񊤡',
        '񊦁',
        '񊧡',
        '񊩁',
        '񊪡',
        '񊬁',
        '񊭡',
        '񊯁',
        '񊰡',
        '񊲁',
        '񊳡',
        '񊵁',
        '񊶡',
        '񊸁',
        '񊹡',
        '񊻁',
        '񊼡',
        '񊾁',
    ],
    '񊿡': [
        '񊿡',
        '񋁁',
        '񋂡',
        '񋄁',
        '񋅡',
        '񋇁',
        '񋈡',
        '񋊁',
        '񋋡',
        '񋍁',
        '񋎡',
        '񋐁',
        '񋑡',
        '񋓁',
    ],
    '񋔡': [
        '񋔡',
        '񋖁',
        '񋗡',
        '񋙁',
        '񋚡',
        '񋜁',
        '񋝡',
        '񋟁',
        '񋠡',
        '񋢁',
        '񋣡',
        '񋥁',
        '񋦡',
        '񋨁',
        '񋩡',
        '񋫁',
        '񋬡',
        '񋮁',
        '񋯡',
        '񋱁',
    ],
    '񋲡': ['񋲡', '񋴁', '񋵡', '񋷁', '񋸡', '񋺁', '񋻡', '񋽁'],
    '񋾡': ['񋾡', '񌀁', '񌁡', '񌃁', '񌄡', '񌆁', '񌇡', '񌉁', '񌊡', '񌌁', '񌍡'],
    '񌏁': [
        '񌏁',
        '񌐡',
        '񌒁',
        '񌓡',
        '񌕁',
        '񌖡',
        '񌘁',
        '񌙡',
        '񌛁',
        '񌜡',
        '񌞁',
        '񌟡',
        '񌡁',
        '񌢡',
        '񌤁',
        '񌥡',
        '񌧁',
        '񌨡',
        '񌪁',
        '񌫡',
        '񌭁',
        '񌮡',
        '񌰁',
        '񌱡',
        '񌳁',
        '񌴡',
        '񌶁',
        '񌷡',
        '񌹁',
        '񌺡',
        '񌼁',
        '񌽡',
    ],
    '񌿁': [
        '񌿁',
        '񍀡',
        '񍂁',
        '񍃡',
        '񍅁',
        '񍆡',
        '񍈁',
        '񍉡',
        '񍋁',
        '񍌡',
        '񍎁',
        '񍏡',
        '񍑁',
        '񍒡',
        '񍔁',
        '񍕡',
        '񍗁',
    ],
    '񍘡': [
        '񍘡',
        '񍚁',
        '񍛡',
        '񍝁',
        '񍞡',
        '񍠁',
        '񍡡',
        '񍣁',
        '񍤡',
        '񍦁',
        '񍧡',
        '񍩁',
        '񍪡',
        '񍬁',
        '񍭡',
        '񍯁',
        '񍰡',
        '񍲁',
        '񍳡',
        '񍵁',
        '񍶡',
        '񍸁',
        '񍹡',
        '񍻁',
        '񍼡',
        '񍾁',
        '񍿡',
        '񎁁',
        '񎂡',
        '񎄁',
    ],
    '񎅡': [
        '񎅡',
        '񎇁',
        '񎈡',
        '񎊁',
        '񎋡',
        '񎍁',
        '񎎡',
        '񎐁',
        '񎑡',
        '񎓁',
        '២០២',
        '񎖁',
        '񎗡',
        '񎙁',
        '񎚡',
        '񎜁',
        '񎝡',
        '񎟁',
        '񎠡',
        '񹢁',
    ],
    '񎣡': ['񎣡', '񎥁', '񎦡', '񎨁', '񎩡', '񎫁', '񎬡', '񎮁', '񎯡'],
    '񎱁': ['񎱁', '񎲡', '񎴁', '񎵡', '񹷁', '񹸡', '񹺁', '񹻡', '񹽁'],
    '񹾡': ['񹾡', '񏀁', '񏁡', '񏃁', '񏄡', '񏆁', '񏇡', '񏉁'],
    '񏊡': ['񏊡', '񏌁', '񏍡', '񏏁', '񏐡'],
};

function padArray(arr, len) {
    const targetLen = len < arr.length ? len * 2 : len;
    return arr.concat(Array(targetLen - arr.length).fill(null));
}
function padArrayInner(arr, segment, len) {
    let padded = [];
    const chunks = Math.ceil(arr.length / segment);
    for (let index = 0; index < chunks; index += 1) {
        const slice = arr.slice(index * segment, (index + 1) * segment);
        padded = padArray(padded.concat(slice), len * (index + 1));
    }
    return padded;
}

function paletteDims(size) {
    switch (size) {
        case 'large': {
            const major = 16;
            const minor = 6;
            return { major, minor, total: major * minor };
        }
        case 'medium': {
            const major = 10;
            const minor = 6;
            return { major, minor, total: major * minor };
        }
        case 'small':
        default: {
            const major = 10;
            const minor = 3;
            return { major, minor, total: major * minor };
        }
    }
}

const HomeIcon = "<svg viewBox='0 0 1792 1792' xmlns='http://www.w3.org/2000/svg'><path d='M1472 992v480q0 26-19 45t-45 19h-384v-384h-256v384h-384q-26 0-45-19t-19-45v-480q0-1 .5-3t.5-3l575-474 575 474q1 2 1 6zm223-69l-62 74q-8 9-21 11h-3q-13 0-21-7l-692-577-692 577q-12 8-24 7-13-2-21-11l-62-74q-8-10-7-23.5t11-21.5l719-599q32-26 76-26t76 26l244 204v-195q0-14 9-23t23-9h192q14 0 23 9t9 23v408l219 182q10 8 11 21.5t-7 23.5z'></path></svg>";
const ChevronUpIcon = "<svg viewBox='0 0 1792 1792' xmlns='http://www.w3.org/2000/svg'><path d='M1683 1331l-166 165q-19 19-45 19t-45-19l-531-531-531 531q-19 19-45 19t-45-19l-166-165q-19-19-19-45.5t19-45.5l742-741q19-19 45-19t45 19l742 741q19 19 19 45.5t-19 45.5z'/></svg>";
const ArrowUpIcon = "<svg viewBox='0 0 1792 1792' xmlns='http://www.w3.org/2000/svg'><path d='M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z'/></svg>";
const ArrowDownIcon = "<svg viewBox='0 0 1792 1792' xmlns='http://www.w3.org/2000/svg'><path d='M1675 832q0 53-37 90l-651 652q-39 37-91 37-53 0-90-37l-651-652q-38-36-38-90 0-53 38-91l74-75q39-37 91-37 53 0 90 37l294 294v-704q0-52 38-90t90-38h128q52 0 90 38t38 90v704l294-294q37-37 90-37 52 0 91 37l75 75q37 39 37 91z'/></svg>";
const ArrowLeftIcon = "<svg viewBox='0 0 1792 1792' xmlns='http://www.w3.org/2000/svg'><path d='M1664 896v128q0 53-32.5 90.5t-84.5 37.5h-704l293 294q38 36 38 90t-38 90l-75 76q-37 37-90 37-52 0-91-37l-651-652q-37-37-37-90 0-52 37-91l651-650q38-38 91-38 52 0 90 38l75 74q38 38 38 91t-38 91l-293 293h704q52 0 84.5 37.5t32.5 90.5z'/></svg>";
const ArrowRightIcon = "<svg viewBox='0 0 1792 1792' xmlns='http://www.w3.org/2000/svg'><path d='M1600 960q0 54-37 91l-651 651q-39 37-91 37-51 0-90-37l-75-75q-38-38-38-91t38-91l293-293h-704q-52 0-84.5-37.5t-32.5-90.5v-128q0-53 32.5-90.5t84.5-37.5h704l-293-294q-38-36-38-90t38-90l75-75q38-38 90-38 53 0 91 38l651 651q37 35 37 90z'/></svg>";

const fswPaletteCss = () => `:host{width:100%;height:100%;display:flex}nav{height:100%;width:100%;flex:0 0 10%;display:flex;align-items:center}nav fsw-button,nav div{flex:25%;height:100%;width:100%;margin:1%}main{flex:0 0 90%;width:100%;height:100%;display:grid;gap:4px}:host(.horizontal){flex-direction:row}:host(.horizontal) nav{flex-direction:column}:host(.horizontal.small) main,:host(.horizontal.medium) main{grid-template-columns:repeat(10, 1fr)}:host(.horizontal.large) main{grid-template-columns:repeat(16, 1fr)}:host(.vertical){flex-direction:column}:host(.vertical) nav{flex-direction:row}:host(.vertical) main{grid-auto-flow:column}:host(.vertical.small) main,:host(.vertical.medium) main{grid-template-rows:repeat(10, 1fr)}:host(.vertical.large) main{grid-template-rows:repeat(16, 1fr)}`;

const FswPalette = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.sgnwSelect = createEvent(this, "sgnw-select");
        /** Orientation of palette. */
        this.orientation = 'vertical';
        /** Size of palette. */
        this.size = 'small';
        /** Symbol group dataset (defaults to built-in ISWA subset used by the legacy palette). */
        this.alphabet = iswa2010FSW;
        /** Top level symbol selection. */
        this.group = null;
        /** Mid level symbol selection. */
        this.base = null;
        /** Page flag for small palette (fills 0-2 vs 3-5) and group paging when needed. */
        this.more = false;
        /** Page flag for small/medium palette (rotations 0-7 vs 8-15). */
        this.lower = false;
        this.palette = [];
        this.hasMore = false;
        this.hasLower = false;
        this.goHome = () => {
            this.group = null;
            this.base = null;
        };
        this.goUp = () => {
            if (this.base) {
                this.base = null;
                return;
            }
            this.group = null;
        };
    }
    onAlphabetChange() {
        this.normalizeAlphabet();
        this.setPalette();
    }
    onGroupChange(next) {
        if (next == null && this.base != null)
            this.base = null;
        this.more = false;
        this.lower = false;
        this.setPalette();
    }
    onBaseChange() {
        this.more = false;
        this.lower = false;
        this.setPalette();
    }
    onMoreChange() {
        this.setPalette();
    }
    onLowerChange() {
        this.setPalette();
    }
    normalizeAlphabet() {
        if (typeof this.alphabet === 'string') {
            try {
                this.alphabet = JSON.parse(this.alphabet);
            }
            catch {
                this.alphabet = {};
            }
        }
    }
    getDims() {
        return paletteDims(this.size);
    }
    getPaletteAll() {
        const { total } = this.getDims();
        const alphabet = this.alphabet;
        let keys = Object.keys(alphabet);
        if (this.size === 'large')
            keys = padArrayInner(keys, 10, 16).filter(Boolean);
        const padded = padArray(keys, total);
        this.hasMore = false;
        this.hasLower = false;
        return padded;
    }
    getPaletteGroup() {
        const { total } = this.getDims();
        const alphabet = this.alphabet;
        const group = this.group || '';
        let keys = (alphabet[group] || []).slice();
        if (this.size === 'large')
            keys = padArrayInner(keys, 10, 16).filter(Boolean);
        const padded = padArray(keys, total);
        if (padded.length > total) {
            this.hasMore = true;
            return this.more ? padded.slice(total, total * 2) : padded.slice(0, total);
        }
        this.hasMore = false;
        return padded;
    }
    getPaletteBase() {
        const { major, minor, total } = this.getDims();
        const base = (this.base || '').slice(0, 4); // "S205"
        if (!base)
            return padArray([], total);
        let fillsFrom = 0;
        let fillsTo = 6;
        let rotationsFrom = 0;
        let rotationsTo = 16;
        this.hasLower = this.size !== 'large';
        this.hasMore = this.size === 'small';
        if (this.size !== 'large') {
            if (!this.lower)
                rotationsTo = 8;
            else
                rotationsFrom = 8;
        }
        if (this.size === 'small') {
            if (!this.more)
                fillsTo = 3;
            else
                fillsFrom = 3;
        }
        const keys = [];
        for (let fill = fillsFrom; fill < fillsTo; fill += 1) {
            for (let rot = rotationsFrom; rot < rotationsTo; rot += 1) {
                keys.push(`${base}${fill}${rot.toString(16)}`.toUpperCase());
            }
        }
        if (this.size === 'large') {
            return padArray(keys, total);
        }
        // In legacy, small/medium are padded to keep a stable grid.
        const padded = padArrayInner(keys, major, major).slice(0, major * minor);
        return padded;
    }
    setPalette() {
        let next;
        if (!this.group)
            next = this.getPaletteAll();
        else if (this.group && this.base)
            next = this.getPaletteBase();
        else
            next = this.getPaletteGroup();
        this.palette = [...next];
    }
    componentWillLoad() {
        this.normalizeAlphabet();
        this.setPalette();
    }
    onPaletteSymbolClick(event) {
        const detail = event.detail;
        if (!detail || detail.encoding !== 'fsw')
            return;
        const symbol = detail.symbol;
        if (!this.group) {
            this.group = symbol;
            return;
        }
        if (this.group && !this.base) {
            this.base = symbol;
            return;
        }
        this.sgnwSelect.emit({ encoding: 'fsw', symbol });
    }
    render() {
        const { major } = this.getDims();
        const rows = this.orientation === 'vertical' ? major : undefined;
        const cols = this.orientation === 'horizontal' ? major : undefined;
        const gridStyle = {
            gridTemplateRows: rows ? `repeat(${rows}, 1fr)` : undefined,
            gridTemplateColumns: cols ? `repeat(${cols}, 1fr)` : undefined,
        };
        return (h(Host, { key: 'fa91c79a9e58e281dbee1c02a079230cfbeff134', class: `${this.orientation} ${this.size}` }, h("nav", { key: '9e4682bdbafea97c8501c861b027ee146e193f7a' }, h("fsw-button", { key: 'aa2cdbf249c44109b7bd01b5453bbc9aac7f8100', svg: HomeIcon, "aria-label": "Home", onClick: this.goHome }), this.group ? (h("fsw-button", { svg: ChevronUpIcon, "aria-label": "Up", onClick: this.goUp })) : (h("div", null)), this.hasMore ? (h("fsw-button", { svg: this.more ? ArrowLeftIcon : ArrowRightIcon, "aria-label": "More", onClick: () => (this.more = !this.more) })) : this.size === 'small' ? (h("div", null)) : null, this.hasLower ? (h("fsw-button", { svg: this.lower ? ArrowUpIcon : ArrowDownIcon, "aria-label": "Lower", onClick: () => (this.lower = !this.lower) })) : this.size !== 'large' ? (h("div", null)) : null), h("main", { key: '8c10c9c49499f39f97db01bd425301312bf634be', style: gridStyle }, this.palette.map(symbol => (h("fsw-palette-symbol", { symbol: symbol || undefined, styling: this.styling, baseUrl: this.baseUrl }))))));
    }
    static get watchers() { return {
        "alphabet": [{
                "onAlphabetChange": 0
            }],
        "group": [{
                "onGroupChange": 0
            }],
        "base": [{
                "onBaseChange": 0
            }],
        "more": [{
                "onMoreChange": 0
            }],
        "lower": [{
                "onLowerChange": 0
            }]
    }; }
};
FswPalette.style = fswPaletteCss();

function closestComposed(start, selector) {
    let current = start;
    while (current) {
        if (current instanceof HTMLElement && current.matches(selector))
            return current;
        const parent = current.parentElement;
        if (parent) {
            current = parent;
            continue;
        }
        const root = current.getRootNode();
        if (root && 'host' in root && root.host instanceof HTMLElement) {
            current = root.host;
            continue;
        }
        break;
    }
    return null;
}
function findDropTargetAtPoint(options) {
    const { clientX, clientY, exclude, selector } = options;
    const previousPointerEvents = exclude.style.pointerEvents;
    exclude.style.pointerEvents = 'none';
    try {
        const els = document.elementsFromPoint(clientX, clientY);
        for (const el of els) {
            const target = closestComposed(el, selector);
            if (target)
                return target;
        }
        return null;
    }
    finally {
        exclude.style.pointerEvents = previousPointerEvents;
    }
}

const fswPaletteSymbolCss = () => `:host{display:block;position:relative;border:1px solid #d0d0d0;border-radius:8px;background:#fff;user-select:none;touch-action:none}:host([data-empty='true']){border-color:transparent;background:transparent}.wrap{width:100%;height:100%;display:grid;place-items:center}:host(.is-dragging){opacity:0.95;box-shadow:0 10px 30px rgba(0, 0, 0, 0.25);z-index:10}button{all:unset;width:100%;height:100%;display:grid;place-items:center;cursor:grab}button:active{cursor:grabbing}button:focus-visible{outline:2px solid #4b7be5;outline-offset:2px;border-radius:8px}fsw-symbol{--sgnw-height:42px}`;

const FswPaletteSymbol = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.sgnwPaletteSymbolClick = createEvent(this, "sgnw-palette-symbol-click");
        /** CSS selector for drop targets. */
        this.dropTarget = 'fsw-signbox, fsw-sequence';
        this.pointerId = null;
        this.startX = 0;
        this.startY = 0;
        this.dragging = false;
        this.lastDx = 0;
        this.lastDy = 0;
        this.onPointerDown = (event) => {
            if (!this.canInteract())
                return;
            if (event.button !== 0)
                return;
            this.pointerId = event.pointerId;
            this.dragging = false;
            this.startX = event.clientX;
            this.startY = event.clientY;
            this.el.setPointerCapture(event.pointerId);
            event.preventDefault();
        };
        this.onPointerMove = (event) => {
            if (this.pointerId == null || event.pointerId !== this.pointerId)
                return;
            const dx = event.clientX - this.startX;
            const dy = event.clientY - this.startY;
            if (!this.dragging && Math.hypot(dx, dy) >= 6) {
                this.dragging = true;
                this.beginDrag();
            }
            if (this.dragging) {
                this.updateDrag(dx, dy);
                event.preventDefault();
            }
        };
        this.onPointerUp = (event) => {
            if (this.pointerId == null || event.pointerId !== this.pointerId)
                return;
            try {
                if (!this.dragging) {
                    this.emitClick();
                    return;
                }
                const target = findDropTargetAtPoint({
                    clientX: event.clientX,
                    clientY: event.clientY,
                    exclude: this.el,
                    selector: this.dropTarget,
                });
                if (target) {
                    this.dispatchDrop(target, {
                        encoding: 'fsw',
                        symbol: this.symbol.trim(),
                        source: 'palette',
                        clientX: event.clientX,
                        clientY: event.clientY,
                        pageX: event.pageX,
                        pageY: event.pageY,
                    });
                }
            }
            finally {
                this.pointerId = null;
                this.dragging = false;
                this.restoreAfterDrag();
            }
        };
        this.onKeyDown = (event) => {
            if (!this.canInteract())
                return;
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                this.emitClick();
            }
        };
    }
    canInteract() {
        return !!(this.symbol && this.symbol.trim());
    }
    emitClick() {
        if (!this.canInteract())
            return;
        this.sgnwPaletteSymbolClick.emit({ encoding: 'fsw', symbol: this.symbol.trim() });
    }
    beginDrag() {
        this.el.classList.add('is-dragging');
        this.el.style.willChange = 'transform';
    }
    updateDrag(dx, dy) {
        this.lastDx = dx;
        this.lastDy = dy;
        this.el.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
    }
    restoreAfterDrag() {
        this.el.classList.remove('is-dragging');
        this.el.style.transform = '';
        this.el.style.willChange = '';
        this.lastDx = 0;
        this.lastDy = 0;
    }
    dispatchDrop(target, detail) {
        target.dispatchEvent(new CustomEvent('sgnw-drop', {
            detail,
            bubbles: true,
            composed: true,
        }));
    }
    render() {
        const symbol = this.symbol?.trim() || '';
        const empty = !symbol;
        return (h(Host, { key: '3790c395819c7cbaee1213f4b4533b78dbfaa1ac', "data-empty": empty ? 'true' : 'false' }, h("div", { key: '72abaf2b32a6dd80c6d193e1c5923a7517a3982d', class: "wrap" }, h("button", { key: 'b4c4946bcaab978de46144e37914825ff9b92fb4', type: "button", disabled: empty, "aria-disabled": empty ? 'true' : 'false', onPointerDown: this.onPointerDown, onPointerMove: this.onPointerMove, onPointerUp: this.onPointerUp, onKeyDown: this.onKeyDown }, empty ? null : (h("fsw-symbol", { symbol: symbol, styling: this.styling, baseUrl: this.baseUrl }))))));
    }
    get el() { return getElement(this); }
};
FswPaletteSymbol.style = fswPaletteSymbolCss();

const fswPlatformCss = () => `:host{display:inline-block;font:inherit}.badge{display:inline-flex;align-items:center;gap:8px;padding:6px 10px;border:1px solid #ddd;border-radius:999px;background:#fff;font-size:13px}.dot{width:10px;height:10px;border-radius:50%;background:#999}.dot.online{background:#16a34a}.dot.checking{background:#f59e0b}.dot.error{background:#dc2626}.meta{opacity:0.75;font-size:12px}`;

function normalizeBaseUrl$1(baseUrl) {
    const trimmed = String(baseUrl || '').trim();
    return trimmed.replace(/\/+$/, '');
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
const FswPlatform = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.sgnwPlatformStatus = createEvent(this, "sgnw-platform-status");
        this.sgnwPlatformError = createEvent(this, "sgnw-platform-error");
        /** Base URL for the platform API (expects `GET /health`). */
        this.baseUrl = 'http://localhost:8080';
        /** Automatically check health on connect. */
        this.auto = true;
        /** Abort fetch after this many ms (0 disables). */
        this.timeoutMs = 2500;
        this.checking = false;
        this.lastOk = null;
        this.lastStatus = null;
        this.lastLatencyMs = null;
        this.lastAuthMode = null;
        this.lastError = null;
    }
    connectedCallback() {
        if (this.auto) {
            void this.checkNow();
        }
    }
    /** Run a single `GET /health` check immediately. */
    async checkNow() {
        const baseUrl = normalizeBaseUrl$1(this.baseUrl);
        const url = `${baseUrl}/health`;
        this.checking = true;
        this.lastError = null;
        const startedAt = performance?.now?.() ?? Date.now();
        try {
            const controller = withTimeout(this.timeoutMs);
            const res = await fetch(url, {
                method: 'GET',
                headers: { accept: 'application/json' },
                signal: controller?.signal,
            });
            const endedAt = performance?.now?.() ?? Date.now();
            const latencyMs = Math.max(0, Math.round(endedAt - startedAt));
            this.lastStatus = res.status;
            this.lastLatencyMs = latencyMs;
            let authMode;
            let ok = res.ok;
            try {
                const data = await res.json();
                authMode = data?.auth_mode;
                ok = ok && data?.status === 'ok';
            }
            catch {
                // Non-JSON is allowed, but means we can't validate further.
            }
            this.lastAuthMode = authMode ?? null;
            this.lastOk = ok;
            this.checking = false;
            this.sgnwPlatformStatus.emit({
                baseUrl,
                ok,
                status: res.status,
                latencyMs,
                authMode,
            });
            if (!ok) {
                const message = res.ok ? 'Unexpected /health response' : `HTTP ${res.status}`;
                this.lastError = message;
                this.sgnwPlatformError.emit({ baseUrl, message, status: res.status });
            }
        }
        catch (err) {
            const endedAt = performance?.now?.() ?? Date.now();
            const latencyMs = Math.max(0, Math.round(endedAt - startedAt));
            const message = err?.name === 'AbortError' ? 'Timeout' : String(err?.message || err || 'Unknown error');
            this.lastOk = false;
            this.lastLatencyMs = latencyMs;
            this.lastError = message;
            this.checking = false;
            this.sgnwPlatformStatus.emit({ baseUrl, ok: false, latencyMs });
            this.sgnwPlatformError.emit({ baseUrl, message });
        }
    }
    statusLabel() {
        if (this.checking)
            return 'Checking…';
        if (this.lastOk === true)
            return 'Online';
        if (this.lastOk === false)
            return 'Offline';
        return 'Idle';
    }
    dotClass() {
        if (this.checking)
            return 'dot checking';
        if (this.lastOk === true)
            return 'dot online';
        if (this.lastOk === false)
            return 'dot error';
        return 'dot';
    }
    render() {
        const baseUrl = normalizeBaseUrl$1(this.baseUrl);
        const metaParts = [];
        if (this.lastStatus != null)
            metaParts.push(`HTTP ${this.lastStatus}`);
        if (this.lastLatencyMs != null)
            metaParts.push(`${this.lastLatencyMs}ms`);
        if (this.lastAuthMode)
            metaParts.push(`auth=${this.lastAuthMode}`);
        return (h(Host, { key: '3d793dc231604090b9b105573c173a3e2a59678e' }, h("div", { key: 'be743a1575ce30b0d437d091bf6fea5e4dd6a783', class: "badge", title: baseUrl }, h("span", { key: '0d929ca12a786257267a9d68737183881c33eaf2', class: this.dotClass(), "aria-hidden": "true" }), h("span", { key: 'ad786a19c4a8d72b65096a9be926b5b55c8f6c57' }, this.statusLabel()), metaParts.length ? h("span", { class: "meta" }, "(", metaParts.join(', '), ")") : null)));
    }
};
FswPlatform.style = fswPlatformCss();

const fswSearchCss = () => `.search{display:flex;gap:8px}input{flex:1;padding:6px 8px;border:1px solid #c7c7c7;border-radius:6px;font-size:14px}button{padding:6px 10px;border:1px solid #2a2a2a;background:#2a2a2a;color:#fff;border-radius:6px;cursor:pointer}`;

const FswSearch = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.sgnwSearch = createEvent(this, "sgnw-search");
        this.value = '';
        this.onInput = (event) => {
            const target = event.target;
            this.value = target.value;
        };
        this.onSubmit = (event) => {
            event.preventDefault();
            this.sgnwSearch.emit({ encoding: 'fsw', query: this.value });
        };
    }
    render() {
        return (h(Host, { key: 'a3a9df05851be284c1f28496a04dc5ae865ecc5c' }, h("form", { key: '210bcea3736b87856819e429bc34c78297e95705', class: "search", onSubmit: this.onSubmit }, h("input", { key: '9b78e811384a236d1de20661ec09aa7321e843a8', type: "text", placeholder: "FSW query", value: this.value, onInput: this.onInput }), h("button", { key: 'eea41df74cde7fc8d1e1a6bbac389b1d685ebb63', type: "submit" }, "Search"))));
    }
};
FswSearch.style = fswSearchCss();

function clampInt(value, min, max) {
    const n = Number.isFinite(value) ? Math.trunc(value) : 0;
    return Math.max(min, Math.min(max, n));
}
function pad3(value) {
    return clampInt(value, 0, 999).toString().padStart(3, '0');
}
function splitStyle(sign) {
    const trimmed = (sign || '').trim();
    if (!trimmed)
        return { core: '' };
    const dash = trimmed.indexOf('-');
    if (dash < 0)
        return { core: trimmed };
    return { core: trimmed.slice(0, dash), style: trimmed.slice(dash) };
}
function parseFswSign(sign) {
    const { core, style } = splitStyle(sign || '');
    const defaultParsed = {
        sequence: [],
        box: 'M',
        max: [500, 500],
        spatials: [],
        style,
    };
    if (!core)
        return defaultParsed;
    const boxMatch = core.match(/[BLMR]\d{3}x\d{3}/);
    if (!boxMatch || boxMatch.index == null) {
        return { ...defaultParsed, style };
    }
    const prefix = core.slice(0, boxMatch.index);
    const boxText = boxMatch[0];
    const rest = core.slice(boxMatch.index + boxText.length);
    const box = boxText[0];
    const maxX = Number.parseInt(boxText.slice(1, 4), 10);
    const maxY = Number.parseInt(boxText.slice(5, 8), 10);
    const sequence = prefix.startsWith('A')
        ? (prefix.match(/S[0-9a-f]{5}/gi) ?? []).map(value => value.toUpperCase())
        : [];
    const spatials = [];
    const spatialRe = /(S[0-9a-f]{5})(\d{3})x(\d{3})/gi;
    for (const match of rest.matchAll(spatialRe)) {
        const symbol = (match[1] || '').toUpperCase();
        const x = Number.parseInt(match[2], 10);
        const y = Number.parseInt(match[3], 10);
        if (!symbol)
            continue;
        spatials.push({ symbol, coord: [x, y] });
    }
    return {
        sequence,
        box,
        max: [clampInt(maxX, 0, 999), clampInt(maxY, 0, 999)],
        spatials,
        style,
    };
}
function composeFswSign(parsed) {
    const sequencePart = parsed.sequence.length ? `A${parsed.sequence.join('')}` : '';
    const boxPart = `${parsed.box || 'M'}${pad3(parsed.max?.[0] ?? 500)}x${pad3(parsed.max?.[1] ?? 500)}`;
    const spatialPart = (parsed.spatials || [])
        .map(spatial => `${spatial.symbol}${pad3(spatial.coord[0])}x${pad3(spatial.coord[1])}`)
        .join('');
    const stylePart = parsed.style ? parsed.style.trim() : '';
    return `${sequencePart}${boxPart}${spatialPart}${stylePart}`;
}

const fswSequenceCss = () => `:host{width:100%;height:100%;display:block;position:relative}:host(.horizontal) fsw-sequence-symbol{float:left;width:2.4rem;height:100%}:host(.vertical) fsw-sequence-symbol{display:block;width:100%;height:2.4rem}`;

const FswSequence = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.sgnwSignChange = createEvent(this, "sgnw-sign-change");
        /** Orientation of sequence. */
        this.orientation = 'vertical';
        /** FSW sign string. */
        this.sign = 'M500x500';
        this.sequence = [];
    }
    onSignChange() {
        this.parse();
    }
    parse() {
        const parsed = parseFswSign(this.sign);
        this.sequence = parsed.sequence || [];
    }
    componentWillLoad() {
        this.parse();
    }
    itemSizePx() {
        return 38;
    }
    getInsertIndex(detail) {
        const rect = this.el.getBoundingClientRect();
        const pos = this.orientation === 'horizontal'
            ? detail.clientX - rect.left
            : detail.clientY - rect.top;
        const size = this.itemSizePx();
        const idx = Math.floor(pos / size);
        return Math.max(0, Math.min(this.sequence.length, idx));
    }
    onDrop(event) {
        const detail = event.detail;
        if (!detail || detail.encoding !== 'fsw')
            return;
        event.stopPropagation();
        const symbol = (detail.symbol || '').trim().toUpperCase();
        if (!symbol)
            return;
        const insertIndex = this.getInsertIndex(detail);
        const next = this.sequence.slice();
        if (detail.source === 'sequence' && typeof detail.fromIndex === 'number') {
            const from = detail.fromIndex;
            if (from >= 0 && from < next.length) {
                const [moved] = next.splice(from, 1);
                const correctedIndex = from < insertIndex ? insertIndex - 1 : insertIndex;
                next.splice(correctedIndex, 0, moved);
            }
        }
        else {
            next.splice(insertIndex, 0, symbol);
        }
        const parsed = parseFswSign(this.sign);
        parsed.sequence = next;
        const composed = composeFswSign(parsed);
        this.sign = composed;
        this.sequence = next;
        this.sgnwSignChange.emit({ encoding: 'fsw', sign: composed });
    }
    render() {
        return (h(Host, { key: '3586b36dfa3a677d7b34812256a1cd669975d78e', class: this.orientation }, this.sequence.map((sym, index) => (h("fsw-sequence-symbol", { symbol: sym, index: index, styling: this.styling, baseUrl: this.baseUrl }))), h("fsw-sequence-symbol", { key: 'd0b824718b86be3318a082c5b1ece0f155ed2cac' })));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "sign": [{
                "onSignChange": 0
            }]
    }; }
};
FswSequence.style = fswSequenceCss();

const fswSequenceSymbolCss = () => `:host{display:block;position:relative;border:1px solid #d0d0d0;border-radius:8px;background:#fff;user-select:none;touch-action:none}:host([data-empty='true']){border-color:transparent;background:transparent}:host(.is-dragging){opacity:0.95;box-shadow:0 10px 30px rgba(0, 0, 0, 0.25);z-index:10}button{all:unset;width:100%;height:100%;display:grid;place-items:center;cursor:grab}button:active{cursor:grabbing}button:focus-visible{outline:2px solid #4b7be5;outline-offset:2px;border-radius:8px}fsw-symbol{--sgnw-height:32px}`;

const FswSequenceSymbol = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.sgnwSelect = createEvent(this, "sgnw-select");
        /** CSS selector for drop targets. */
        this.dropTarget = 'fsw-signbox, fsw-sequence';
        this.pointerId = null;
        this.startX = 0;
        this.startY = 0;
        this.dragging = false;
        this.lastDx = 0;
        this.lastDy = 0;
        this.onPointerDown = (event) => {
            if (!this.canInteract())
                return;
            if (event.button !== 0)
                return;
            this.pointerId = event.pointerId;
            this.dragging = false;
            this.startX = event.clientX;
            this.startY = event.clientY;
            this.el.setPointerCapture(event.pointerId);
            event.preventDefault();
        };
        this.onPointerMove = (event) => {
            if (this.pointerId == null || event.pointerId !== this.pointerId)
                return;
            const dx = event.clientX - this.startX;
            const dy = event.clientY - this.startY;
            if (!this.dragging && Math.hypot(dx, dy) >= 6) {
                this.dragging = true;
                this.beginDrag();
            }
            if (this.dragging) {
                this.updateDrag(dx, dy);
                event.preventDefault();
            }
        };
        this.onPointerUp = (event) => {
            if (this.pointerId == null || event.pointerId !== this.pointerId)
                return;
            try {
                if (!this.dragging) {
                    this.emitClick();
                    return;
                }
                const target = findDropTargetAtPoint({
                    clientX: event.clientX,
                    clientY: event.clientY,
                    exclude: this.el,
                    selector: this.dropTarget,
                });
                if (target) {
                    this.dispatchDrop(target, {
                        encoding: 'fsw',
                        symbol: this.symbol.trim(),
                        source: 'sequence',
                        fromIndex: typeof this.index === 'number' ? this.index : undefined,
                        clientX: event.clientX,
                        clientY: event.clientY,
                        pageX: event.pageX,
                        pageY: event.pageY,
                    });
                }
            }
            finally {
                this.pointerId = null;
                this.dragging = false;
                this.restoreAfterDrag();
            }
        };
    }
    canInteract() {
        return !!(this.symbol && this.symbol.trim());
    }
    emitClick() {
        if (!this.canInteract())
            return;
        this.sgnwSelect.emit({ encoding: 'fsw', symbol: this.symbol.trim() });
    }
    beginDrag() {
        this.el.classList.add('is-dragging');
        this.el.style.willChange = 'transform';
    }
    updateDrag(dx, dy) {
        this.lastDx = dx;
        this.lastDy = dy;
        this.el.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
    }
    restoreAfterDrag() {
        this.el.classList.remove('is-dragging');
        this.el.style.transform = '';
        this.el.style.willChange = '';
        this.lastDx = 0;
        this.lastDy = 0;
    }
    dispatchDrop(target, detail) {
        target.dispatchEvent(new CustomEvent('sgnw-drop', {
            detail,
            bubbles: true,
            composed: true,
        }));
    }
    render() {
        const symbol = this.symbol?.trim() || '';
        const empty = !symbol;
        return (h(Host, { key: 'c045f8302064a0a29a2f2ecfa2d928360e530735', "data-empty": empty ? 'true' : 'false' }, h("button", { key: 'ec3337456668a961d63c9131b09a3424066d87e2', type: "button", disabled: empty, "aria-disabled": empty ? 'true' : 'false', onPointerDown: this.onPointerDown, onPointerMove: this.onPointerMove, onPointerUp: this.onPointerUp }, empty ? null : (h("fsw-symbol", { symbol: symbol, styling: this.styling, baseUrl: this.baseUrl })))));
    }
    get el() { return getElement(this); }
};
FswSequenceSymbol.style = fswSequenceSymbolCss();

const DEFAULT_BASE_URL = 'https://sutton-signwriting-font-db.wmcloud.org';
function normalizeBaseUrl(baseUrl) {
    const raw = (baseUrl || DEFAULT_BASE_URL).trim();
    return raw.replace(/\/+$/, '');
}
function normalizeStyling(styling) {
    if (!styling)
        return undefined;
    const trimmed = styling.trim();
    if (!trimmed)
        return undefined;
    return trimmed.startsWith('-') ? trimmed.slice(1) : trimmed;
}
function fontDbSvgUrl({ baseUrl, encoding, kind, value, styling, }) {
    const stylePart = normalizeStyling(styling);
    const combined = stylePart ? `${value}-${stylePart}` : value;
    return `${normalizeBaseUrl(baseUrl)}/${encoding}/${kind}/svg/${encodeURIComponent(combined)}`;
}
let sgnwFontReady;
function ensureSgnwFonts() {
    if (!sgnwFontReady) {
        cssAppend();
        sgnwFontReady = new Promise((resolve) => cssLoaded(() => resolve()));
    }
    return sgnwFontReady;
}
function normalizeRenderStyling(styling) {
    if (!styling)
        return '';
    const trimmed = styling.trim();
    if (!trimmed)
        return '';
    return trimmed.startsWith('-') ? trimmed : `-${trimmed}`;
}

const fswSignCss = () => `:host{display:inline-block;line-height:0}.svg{display:inline-block;height:var(--sgnw-height, 6em);width:auto;vertical-align:middle}.svg svg{display:block;height:100%;width:auto;max-width:100%;overflow:visible}`;

const FswSign = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.defaultBaseUrl = getSgnwComponentsDefaults().baseUrl;
    }
    async componentWillLoad() {
        this.defaultBaseUrl = getSgnwComponentsDefaults().baseUrl;
        await ensureSgnwFonts();
    }
    getValue() {
        const propValue = this.sign?.trim();
        if (propValue)
            return propValue;
        return this.el.textContent?.trim() || '';
    }
    render() {
        const value = this.getValue();
        if (!value) {
            return (h(Host, null, h("slot", null)));
        }
        const svg = fswSignSvg(`${value}${normalizeRenderStyling(this.styling)}`);
        return (h(Host, { role: "img", "aria-label": `FSW sign ${value}` }, h("span", { class: "svg", innerHTML: svg })));
    }
    get el() { return getElement(this); }
};
FswSign.style = fswSignCss();

const fswSignboxCss = () => `:host{width:100%;height:100%;display:block;position:relative;border:1px solid #d0d0d0;border-radius:12px;background:#fff;overflow:hidden;touch-action:none}.axis-h{position:absolute;top:50%;left:0;width:100%;height:1px;border-top:1px dashed #888;pointer-events:none}.axis-v{position:absolute;left:50%;top:0;width:1px;height:100%;border-left:1px dashed #888;pointer-events:none}`;

const FswSignbox = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.sgnwSignChange = createEvent(this, "sgnw-sign-change");
        /** FSW sign string for the signbox. */
        this.sign = 'M500x500';
        this.parsed = parseFswSign(this.sign);
        this.observer = null;
        this.size = { w: 0, h: 0 };
        this.updateSize = () => {
            const rect = this.el.getBoundingClientRect();
            this.size = { w: Math.round(rect.width), h: Math.round(rect.height) };
        };
    }
    onSignChange() {
        this.parsed = parseFswSign(this.sign);
    }
    componentDidLoad() {
        this.updateSize();
        this.observer = new ResizeObserver(() => this.updateSize());
        this.observer.observe(this.el);
    }
    disconnectedCallback() {
        this.observer?.disconnect();
        this.observer = null;
    }
    coordFromClient(clientX, clientY) {
        const rect = this.el.getBoundingClientRect();
        const xPx = clientX - rect.left;
        const yPx = clientY - rect.top;
        const coordX = Math.round(xPx - (rect.width / 2 - 500));
        const coordY = Math.round(yPx - (rect.height / 2 - 500));
        return [coordX, coordY];
    }
    toLeftPx(coordX) {
        return this.size.w / 2 - 500 + coordX;
    }
    toTopPx(coordY) {
        return this.size.h / 2 - 500 + coordY;
    }
    onDrop(event) {
        const detail = event.detail;
        if (!detail || detail.encoding !== 'fsw')
            return;
        event.stopPropagation();
        const symbol = (detail.symbol || '').trim().toUpperCase();
        if (!symbol)
            return;
        const coord = this.coordFromClient(detail.clientX, detail.clientY);
        const parsed = parseFswSign(this.sign);
        const spatials = parsed.spatials.slice();
        if (detail.source === 'signbox' && typeof detail.fromIndex === 'number') {
            const idx = detail.fromIndex;
            if (idx >= 0 && idx < spatials.length) {
                spatials[idx] = { ...spatials[idx], symbol, coord };
            }
        }
        else {
            spatials.push({ symbol, coord });
        }
        parsed.spatials = spatials;
        const composed = composeFswSign(parsed);
        this.sign = composed;
        this.parsed = parsed;
        this.sgnwSignChange.emit({ encoding: 'fsw', sign: composed });
    }
    render() {
        const spatials = this.parsed.spatials || [];
        return (h(Host, { key: 'c9a55d4d36438dbd4b7d950295340b4e56fed47b' }, h("div", { key: 'fe16825263aab6354d1460ba58a4ee4ca8b4aee0', class: "axis-h" }), h("div", { key: 'fb5ceba3044ea22214d79c0558485794726552bb', class: "axis-v" }), spatials.map((spatial, index) => (h("fsw-spatial", { symbol: spatial.symbol, index: index, styling: this.styling, baseUrl: this.baseUrl, style: {
                left: `${this.toLeftPx(spatial.coord[0])}px`,
                top: `${this.toTopPx(spatial.coord[1])}px`,
            } })))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "sign": [{
                "onSignChange": 0
            }]
    }; }
};
FswSignbox.style = fswSignboxCss();

const fswSignmakerCss = () => `:host{width:100%;height:100%;display:grid;gap:8px}:host(.top){grid-template-areas:"sequence"     "signbox";grid-template-rows:1fr 10fr;grid-template-columns:1fr}:host(.bottom){grid-template-areas:"signbox"     "sequence";grid-template-rows:10fr 1fr;grid-template-columns:1fr}:host(.left){grid-template-areas:"sequence signbox";grid-template-rows:1fr;grid-template-columns:1fr 10fr}:host(.right){grid-template-areas:"signbox sequence";grid-template-rows:1fr;grid-template-columns:10fr 1fr}:host(.none){grid-template-areas:"signbox";grid-template-rows:1fr;grid-template-columns:1fr}fsw-signbox{grid-area:signbox}fsw-sequence{grid-area:sequence;background:#eef6ff;border-radius:10px;padding:4px}:host(.none) fsw-sequence{display:none}`;

const FswSignmaker = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /** Position of sequence. */
        this.sequence = 'right';
        /** FSW string for sign. */
        this.sign = 'M500x500';
    }
    onChildSignChange(event) {
        const detail = event.detail;
        if (!detail || detail.encoding !== 'fsw')
            return;
        this.sign = detail.sign;
    }
    sequenceOrientation() {
        return this.sequence === 'top' || this.sequence === 'bottom' ? 'horizontal' : 'vertical';
    }
    render() {
        return (h(Host, { key: '1f0e30d82cfbfac03db4c7c98e087ad340c15e4a', class: this.sequence }, h("fsw-signbox", { key: '099309945af918214a86ca771a284fa1cc1da212', sign: this.sign, styling: this.styling, baseUrl: this.baseUrl }), h("fsw-sequence", { key: 'ccdb7fe7aac9730ec295fb146e8c1060efa980c8', sign: this.sign, orientation: this.sequenceOrientation(), styling: this.styling, baseUrl: this.baseUrl })));
    }
    get el() { return getElement(this); }
};
FswSignmaker.style = fswSignmakerCss();

const fswSpatialCss = () => `:host{position:absolute;user-select:none;touch-action:none}:host(.is-dragging){z-index:2}button{all:unset;display:grid;place-items:center;cursor:grab}button:active{cursor:grabbing}fsw-symbol{--sgnw-height:48px}`;

const FswSpatial = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.sgnwSelect = createEvent(this, "sgnw-select");
        this.pointerId = null;
        this.startX = 0;
        this.startY = 0;
        this.offsetX = 0;
        this.offsetY = 0;
        this.dragging = false;
        this.startLeft = 0;
        this.startTop = 0;
        this.onPointerDown = (event) => {
            if (!this.canInteract())
                return;
            if (event.button !== 0)
                return;
            this.pointerId = event.pointerId;
            this.dragging = false;
            this.startX = event.clientX;
            this.startY = event.clientY;
            const rect = this.el.getBoundingClientRect();
            this.offsetX = event.clientX - rect.left;
            this.offsetY = event.clientY - rect.top;
            this.startLeft = this.parsePx(this.el.style.left);
            this.startTop = this.parsePx(this.el.style.top);
            this.el.setPointerCapture(event.pointerId);
            event.preventDefault();
        };
        this.onPointerMove = (event) => {
            if (this.pointerId == null || event.pointerId !== this.pointerId)
                return;
            const dx = event.clientX - this.startX;
            const dy = event.clientY - this.startY;
            if (!this.dragging && Math.hypot(dx, dy) >= 4) {
                this.dragging = true;
                this.el.classList.add('is-dragging');
            }
            if (this.dragging) {
                this.el.style.left = `${this.startLeft + dx}px`;
                this.el.style.top = `${this.startTop + dy}px`;
                event.preventDefault();
            }
        };
        this.onPointerUp = (event) => {
            if (this.pointerId == null || event.pointerId !== this.pointerId)
                return;
            try {
                if (!this.dragging) {
                    this.sgnwSelect.emit({ encoding: 'fsw', symbol: this.symbol.trim() });
                    return;
                }
                const signbox = closestComposed(this.el, 'fsw-signbox');
                if (signbox) {
                    signbox.dispatchEvent(new CustomEvent('sgnw-drop', {
                        detail: {
                            encoding: 'fsw',
                            symbol: this.symbol.trim(),
                            source: 'signbox',
                            fromIndex: typeof this.index === 'number' ? this.index : undefined,
                            clientX: event.clientX,
                            clientY: event.clientY,
                            pageX: event.pageX,
                            pageY: event.pageY,
                        },
                        bubbles: true,
                        composed: true,
                    }));
                }
            }
            finally {
                this.pointerId = null;
                this.dragging = false;
                this.el.classList.remove('is-dragging');
            }
        };
    }
    canInteract() {
        return !!(this.symbol && this.symbol.trim());
    }
    parsePx(value) {
        if (!value)
            return 0;
        const n = Number.parseFloat(value);
        return Number.isFinite(n) ? n : 0;
    }
    render() {
        const symbol = this.symbol?.trim() || '';
        if (!symbol)
            return h(Host, null);
        return (h(Host, null, h("button", { type: "button", onPointerDown: this.onPointerDown, onPointerMove: this.onPointerMove, onPointerUp: this.onPointerUp }, h("fsw-symbol", { symbol: symbol, styling: this.styling, baseUrl: this.baseUrl }))));
    }
    get el() { return getElement(this); }
};
FswSpatial.style = fswSpatialCss();

const fswSymbolCss = () => `:host{display:inline-block;line-height:0}.svg{display:inline-block;height:var(--sgnw-height, 2em);width:auto;vertical-align:middle}.svg svg{display:block;height:100%;width:auto;max-width:100%;overflow:visible}`;

const FswSymbol = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.defaultBaseUrl = getSgnwComponentsDefaults().baseUrl;
    }
    async componentWillLoad() {
        this.defaultBaseUrl = getSgnwComponentsDefaults().baseUrl;
        await ensureSgnwFonts();
    }
    getValue() {
        const propValue = this.symbol?.trim();
        if (propValue)
            return propValue;
        return this.el.textContent?.trim() || '';
    }
    render() {
        const value = this.getValue();
        if (!value) {
            return (h(Host, null, h("slot", null)));
        }
        const svg = fswSymbolSvg(`${value}${normalizeRenderStyling(this.styling)}`);
        return (h(Host, { role: "img", "aria-label": `FSW symbol ${value}` }, h("span", { class: "svg", innerHTML: svg })));
    }
    get el() { return getElement(this); }
};
FswSymbol.style = fswSymbolCss();

const swuButtonCss = () => `:host{display:inline-block;width:100%;height:100%}button{width:100%;height:100%;display:inline-flex;align-items:center;justify-content:center;border:1px solid #d0d0d0;border-radius:10px;background:#f7f7f7;padding:0;cursor:pointer;user-select:none;touch-action:manipulation}button:active{background:#e9e9e9}.icon{width:70%;height:70%;display:inline-flex}.icon :global(svg){width:100%;height:100%;fill:currentColor}`;

const SwuButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /** Inline SVG markup string. */
        this.svg = '';
    }
    render() {
        return (h(Host, { key: 'ed3e8bbf3b6b0850a11ec9f06cc7ee970d003588' }, h("button", { key: '2aa5ff6d4e31691ab54fadd185e6b79cd7c33cc3', type: "button", "aria-label": this.ariaLabel }, h("span", { key: '627796a7595f221094085f26a2c9979138e74bfb', class: "icon", innerHTML: this.svg }))));
    }
};
SwuButton.style = swuButtonCss();

const swuPaletteCss = () => `:host{width:100%;height:100%;display:flex}nav{height:100%;width:100%;flex:0 0 10%;display:flex;align-items:center}nav swu-button,nav div{flex:25%;height:100%;width:100%;margin:1%}main{flex:0 0 90%;width:100%;height:100%;display:grid;gap:4px}:host(.horizontal){flex-direction:row}:host(.horizontal) nav{flex-direction:column}:host(.horizontal.small) main,:host(.horizontal.medium) main{grid-template-columns:repeat(10, 1fr)}:host(.horizontal.large) main{grid-template-columns:repeat(16, 1fr)}:host(.vertical){flex-direction:column}:host(.vertical) nav{flex-direction:row}:host(.vertical) main{grid-auto-flow:column}:host(.vertical.small) main,:host(.vertical.medium) main{grid-template-rows:repeat(10, 1fr)}:host(.vertical.large) main{grid-template-rows:repeat(16, 1fr)}`;

const SwuPalette = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.sgnwSelect = createEvent(this, "sgnw-select");
        /** Orientation of palette. */
        this.orientation = 'vertical';
        /** Size of palette. */
        this.size = 'small';
        /** Symbol group dataset. */
        this.alphabet = iswa2010SWU;
        /** Top level symbol selection. */
        this.group = null;
        /** Page flag for paging. */
        this.more = false;
        this.palette = [];
        this.hasMore = false;
        this.goHome = () => {
            this.group = null;
        };
        this.goUp = () => {
            this.group = null;
        };
    }
    onAlphabetChange() {
        this.normalizeAlphabet();
        this.setPalette();
    }
    onGroupChange() {
        this.more = false;
        this.setPalette();
    }
    onMoreChange() {
        this.setPalette();
    }
    normalizeAlphabet() {
        if (typeof this.alphabet === 'string') {
            try {
                this.alphabet = JSON.parse(this.alphabet);
            }
            catch {
                this.alphabet = {};
            }
        }
    }
    getDims() {
        return paletteDims(this.size);
    }
    getPaletteAll() {
        const { total } = this.getDims();
        const alphabet = this.alphabet;
        let keys = Object.keys(alphabet);
        if (this.size === 'large')
            keys = padArrayInner(keys, 10, 16).filter(Boolean);
        const padded = padArray(keys, total);
        this.hasMore = false;
        return padded;
    }
    getPaletteGroup() {
        const { total } = this.getDims();
        const alphabet = this.alphabet;
        const group = this.group || '';
        let keys = (alphabet[group] || []).slice();
        if (this.size === 'large')
            keys = padArrayInner(keys, 10, 16).filter(Boolean);
        const padded = padArray(keys, total);
        if (padded.length > total) {
            this.hasMore = true;
            return this.more ? padded.slice(total, total * 2) : padded.slice(0, total);
        }
        this.hasMore = false;
        return padded;
    }
    setPalette() {
        this.palette = [...(this.group ? this.getPaletteGroup() : this.getPaletteAll())];
    }
    componentWillLoad() {
        this.normalizeAlphabet();
        this.setPalette();
    }
    onPaletteSymbolClick(event) {
        const detail = event.detail;
        if (!detail || detail.encoding !== 'swu')
            return;
        const symbol = detail.symbol;
        if (!this.group) {
            this.group = symbol;
            return;
        }
        this.sgnwSelect.emit({ encoding: 'swu', symbol });
    }
    render() {
        const { major } = this.getDims();
        const rows = this.orientation === 'vertical' ? major : undefined;
        const cols = this.orientation === 'horizontal' ? major : undefined;
        const gridStyle = {
            gridTemplateRows: rows ? `repeat(${rows}, 1fr)` : undefined,
            gridTemplateColumns: cols ? `repeat(${cols}, 1fr)` : undefined,
        };
        return (h(Host, { key: 'bfce9f7fe936c127982221257322d22d8481c745', class: `${this.orientation} ${this.size}` }, h("nav", { key: '93b1aecadc93d4c6827b6da3b95a35908c49a744' }, h("swu-button", { key: '1e1d86839845f7f817335f6ffa1317c8640e8371', svg: HomeIcon, "aria-label": "Home", onClick: this.goHome }), this.group ? (h("swu-button", { svg: ChevronUpIcon, "aria-label": "Up", onClick: this.goUp })) : (h("div", null)), this.hasMore ? (h("swu-button", { svg: this.more ? ArrowLeftIcon : ArrowRightIcon, "aria-label": "More", onClick: () => (this.more = !this.more) })) : this.size === 'small' ? (h("div", null)) : null, h("div", { key: 'd2f16aca121c9b8ab702ea290fce2caac65ee2db' })), h("main", { key: 'ed283dd7ccedbe13fb8a1f2dd448883f550dc0f8', style: gridStyle }, this.palette.map(symbol => (h("swu-palette-symbol", { symbol: symbol || undefined, styling: this.styling, baseUrl: this.baseUrl }))))));
    }
    static get watchers() { return {
        "alphabet": [{
                "onAlphabetChange": 0
            }],
        "group": [{
                "onGroupChange": 0
            }],
        "more": [{
                "onMoreChange": 0
            }]
    }; }
};
SwuPalette.style = swuPaletteCss();

const swuPaletteSymbolCss = () => `:host{display:block;position:relative;border:1px solid #d0d0d0;border-radius:8px;background:#fff;user-select:none;touch-action:none}:host([data-empty='true']){border-color:transparent;background:transparent}.wrap{width:100%;height:100%;display:grid;place-items:center}:host(.is-dragging){opacity:0.95;box-shadow:0 10px 30px rgba(0, 0, 0, 0.25);z-index:10}button{all:unset;width:100%;height:100%;display:grid;place-items:center;cursor:pointer;font-family:"SuttonSignWritingOneD", sans-serif}button:focus-visible{outline:2px solid #4b7be5;outline-offset:2px;border-radius:8px}swu-symbol{--sgnw-height:42px}`;

const SwuPaletteSymbol = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.sgnwPaletteSymbolClick = createEvent(this, "sgnw-palette-symbol-click");
        /** CSS selector for drop targets. */
        this.dropTarget = 'swu-signbox, swu-sequence';
        this.pointerId = null;
        this.startX = 0;
        this.startY = 0;
        this.dragging = false;
        this.lastDx = 0;
        this.lastDy = 0;
        this.onPointerDown = (event) => {
            if (!this.canInteract())
                return;
            if (event.button !== 0)
                return;
            this.pointerId = event.pointerId;
            this.dragging = false;
            this.startX = event.clientX;
            this.startY = event.clientY;
            this.el.setPointerCapture(event.pointerId);
            event.preventDefault();
        };
        this.onPointerMove = (event) => {
            if (this.pointerId == null || event.pointerId !== this.pointerId)
                return;
            const dx = event.clientX - this.startX;
            const dy = event.clientY - this.startY;
            if (!this.dragging && Math.hypot(dx, dy) >= 6) {
                this.dragging = true;
                this.beginDrag();
            }
            if (this.dragging) {
                this.updateDrag(dx, dy);
                event.preventDefault();
            }
        };
        this.onPointerUp = (event) => {
            if (this.pointerId == null || event.pointerId !== this.pointerId)
                return;
            try {
                const symbol = this.getSymbolChar();
                if (!symbol)
                    return;
                if (!this.dragging) {
                    this.emitClick();
                    return;
                }
                const target = findDropTargetAtPoint({
                    clientX: event.clientX,
                    clientY: event.clientY,
                    exclude: this.el,
                    selector: this.dropTarget,
                });
                if (target) {
                    this.dispatchDrop(target, {
                        encoding: 'swu',
                        symbol,
                        source: 'palette',
                        clientX: event.clientX,
                        clientY: event.clientY,
                        pageX: event.pageX,
                        pageY: event.pageY,
                    });
                }
            }
            finally {
                this.pointerId = null;
                this.dragging = false;
                this.restoreAfterDrag();
            }
        };
        this.onKeyDown = (event) => {
            if (!this.canInteract())
                return;
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                this.emitClick();
            }
        };
    }
    getSymbolChar() {
        const raw = this.symbol?.trim() || '';
        return Array.from(raw)[0] || '';
    }
    canInteract() {
        return !!this.getSymbolChar();
    }
    emitClick() {
        const symbol = this.getSymbolChar();
        if (!symbol)
            return;
        this.sgnwPaletteSymbolClick.emit({ encoding: 'swu', symbol });
    }
    beginDrag() {
        this.el.classList.add('is-dragging');
        this.el.style.willChange = 'transform';
    }
    updateDrag(dx, dy) {
        this.lastDx = dx;
        this.lastDy = dy;
        this.el.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
    }
    restoreAfterDrag() {
        this.el.classList.remove('is-dragging');
        this.el.style.transform = '';
        this.el.style.willChange = '';
        this.lastDx = 0;
        this.lastDy = 0;
    }
    dispatchDrop(target, detail) {
        target.dispatchEvent(new CustomEvent('sgnw-drop', {
            detail,
            bubbles: true,
            composed: true,
        }));
    }
    render() {
        const symbol = this.getSymbolChar();
        const empty = !symbol;
        return (h(Host, { key: '19d2e627e6abbc2b027a42a199ab7fc6dce8638e', "data-empty": empty ? 'true' : 'false' }, h("div", { key: 'ff33c775da51c831d2e726363e8da840c125e966', class: "wrap" }, h("button", { key: 'e57aa0e5eb579a0cd79442eb1ae5e480aa1488de', type: "button", disabled: empty, "aria-disabled": empty ? 'true' : 'false', onPointerDown: this.onPointerDown, onPointerMove: this.onPointerMove, onPointerUp: this.onPointerUp, onKeyDown: this.onKeyDown }, empty ? null : (h("swu-symbol", { symbol: symbol, styling: this.styling, baseUrl: this.baseUrl }))))));
    }
    get el() { return getElement(this); }
};
SwuPaletteSymbol.style = swuPaletteSymbolCss();

const swuSearchCss = () => `.search{display:flex;gap:8px}input{flex:1;padding:6px 8px;border:1px solid #c7c7c7;border-radius:6px;font-size:14px;font-family:"SuttonSignWritingOneD", system-ui, sans-serif}button{padding:6px 10px;border:1px solid #2a2a2a;background:#2a2a2a;color:#fff;border-radius:6px;cursor:pointer}`;

const SwuSearch = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.sgnwSearch = createEvent(this, "sgnw-search");
        this.value = '';
        this.onInput = (event) => {
            const target = event.target;
            this.value = target.value;
        };
        this.onSubmit = (event) => {
            event.preventDefault();
            this.sgnwSearch.emit({ encoding: 'swu', query: this.value });
        };
    }
    render() {
        return (h(Host, { key: '71ee72c78edc5f41ea7b7108109acace69f5d2fc' }, h("form", { key: '5dacf18edef65c13c0c1f29cfcd9bae11547a8ac', class: "search", onSubmit: this.onSubmit }, h("input", { key: 'e3c15dc26e364f74c60502a55bd4b3c8d1e87123', type: "text", placeholder: "SWU query", value: this.value, onInput: this.onInput }), h("button", { key: '0e447aaf4c2b520d1ee8bfb60d73393332448058', type: "submit" }, "Search"))));
    }
};
SwuSearch.style = swuSearchCss();

const swuSignCss = () => `:host{display:inline-block;line-height:0}.svg{display:inline-block;height:var(--sgnw-height, 6em);width:auto;vertical-align:middle}.svg svg{display:block;height:100%;width:auto;max-width:100%;overflow:visible}`;

const SwuSign = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.defaultBaseUrl = getSgnwComponentsDefaults().baseUrl;
    }
    async componentWillLoad() {
        this.defaultBaseUrl = getSgnwComponentsDefaults().baseUrl;
        await ensureSgnwFonts();
    }
    getValue() {
        const propValue = this.sign?.trim();
        if (propValue)
            return propValue;
        return this.el.textContent?.trim() || '';
    }
    render() {
        const value = this.getValue();
        if (!value) {
            return (h(Host, null, h("slot", null)));
        }
        const svg = swuSignSvg(`${value}${normalizeRenderStyling(this.styling)}`);
        return (h(Host, { role: "img", "aria-label": `SWU sign ${value}` }, h("span", { class: "svg", innerHTML: svg })));
    }
    get el() { return getElement(this); }
};
SwuSign.style = swuSignCss();

const swuSymbolCss = () => `:host{display:inline-block;line-height:0}.svg{display:inline-block;height:var(--sgnw-height, 2em);width:auto;vertical-align:middle}.svg svg{display:block;height:100%;width:auto;max-width:100%;overflow:visible}`;

const SwuSymbol = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.defaultBaseUrl = getSgnwComponentsDefaults().baseUrl;
    }
    async componentWillLoad() {
        this.defaultBaseUrl = getSgnwComponentsDefaults().baseUrl;
        await ensureSgnwFonts();
    }
    getValue() {
        const propValue = this.symbol?.trim();
        if (propValue)
            return propValue;
        return this.el.textContent?.trim() || '';
    }
    render() {
        const value = this.getValue();
        if (!value) {
            return (h(Host, null, h("slot", null)));
        }
        const svg = swuSymbolSvg(`${value}${normalizeRenderStyling(this.styling)}`);
        return (h(Host, { role: "img", "aria-label": `SWU symbol ${value}` }, h("span", { class: "svg", innerHTML: svg })));
    }
    get el() { return getElement(this); }
};
SwuSymbol.style = swuSymbolCss();

export { FswButton as fsw_button, FswPalette as fsw_palette, FswPaletteSymbol as fsw_palette_symbol, FswPlatform as fsw_platform, FswSearch as fsw_search, FswSequence as fsw_sequence, FswSequenceSymbol as fsw_sequence_symbol, FswSign as fsw_sign, FswSignbox as fsw_signbox, FswSignmaker as fsw_signmaker, FswSpatial as fsw_spatial, FswSymbol as fsw_symbol, SwuButton as swu_button, SwuPalette as swu_palette, SwuPaletteSymbol as swu_palette_symbol, SwuSearch as swu_search, SwuSign as swu_sign, SwuSymbol as swu_symbol };
