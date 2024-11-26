export const SYNERGY = {
  Acamedy: 1,
  Automata: 2,
  "Black Rose": 3,
  "Chem-Baron": 4,
  Conqueror: 5,
  Emissary: 6,
  Enforcer: 7,
  Experiment: 8,
  Family: 9,
  Firelight: 10,
  "High Roller": 11,
  "Junker King": 12,
  Rebel: 13,
  Scrap: 14,
  Ambusher: 15,
  Artillerist: 16,
  Bruiser: 17,
  Dominator: 18,
  "Form Swapper": 19,
  "Pit Fighter": 20,
  Quickstriker: 21,
  Sentinel: 22,
  Sniper: 23,
  Sorcerer: 24,
  Visionary: 25,
  Watcher: 26,
};

export const UNIT = {
  Akali: 1,
  Ambessa: 2,
  Amumu: 3,
  Blitzcrank: 4,
  Caitlyn: 5,
  Camille: 6,
  Cassiopeia: 7,
  Corki: 8,
  Darius: 9,
  "Dr. Mundo": 10,
  Draven: 11,
  Ekko: 12,
  Elise: 13,
  Ezreal: 14,
  Gangplank: 15,
  Garen: 16,
  Heimerdinger: 17,
  Illaoi: 18,
  Irelia: 19,
  Jayce: 20,
  Jinx: 21,
  "Kog'Maw": 22,
  LeBlanc: 23,
  Leona: 24,
  Loris: 25,
  Lux: 26,
  Maddie: 27,
  Malzahar: 28,
  Mordekaiser: 29,
  Morgana: 30,
  Nami: 31,
  Nocturne: 32,
  "Nunu & Willump": 33,
  Powder: 34,
  Rell: 35,
  "Renata Glasc": 36,
  Renni: 37,
  Rumble: 38,
  Scar: 39,
  Sett: 40,
  Sevika: 41,
  Silco: 42,
  Singed: 43,
  Smeech: 44,
  Steb: 45,
  Swain: 46,
  Tristana: 47,
  Trundle: 48,
  "Twisted Fate": 49,
  Twitch: 50,
  Urgot: 51,
  Vander: 52,
  Vex: 53,
  Vi: 54,
  Violet: 55,
  Vladimir: 56,
  Zeri: 57,
  Ziggs: 58,
  Zoe: 59,
  Zyra: 60,
};

export const SYNERGY_INFO = [
  {
    id: 1,
    name: "Acamedy",
    displayName: "아카데미",
    unit: [UNIT.Lux, UNIT.Leona, UNIT.Ezreal, UNIT.Heimerdinger, UNIT.Jayce],
    condition: [3, 4, 5, 6],
  },
  {
    id: 2,
    name: "Automata",
    displayName: "자동기계",
    unit: [
      UNIT.Amumu,
      UNIT.Nocturne,
      UNIT.Blitzcrank,
      UNIT["Kog'Maw"],
      UNIT.Malzahar,
    ],
    condition: [2, 4, 6],
  },
  {
    id: 3,
    name: "Black Rose",
    displayName: "검은 장미단",
    unit: [
      UNIT.Morgana,
      UNIT.Vladimir,
      UNIT.Cassiopeia,
      UNIT.Elise,
      UNIT.LeBlanc,
    ],
    condition: [3, 4, 5, 7],
  },
  {
    id: 4,
    name: "Chem-Baron",
    displayName: "화공 남작",
    unit: [
      UNIT.Singed,
      UNIT["Renata Glasc"],
      UNIT.Renni,
      UNIT.Smeech,
      UNIT.Silco,
      UNIT.Sevika,
    ],
    condition: [3, 4, 5, 6, 7],
  },
  {
    id: 5,
    name: "Conqueror",
    displayName: "정복자",
    unit: [
      UNIT.Darius,
      UNIT.Draven,
      UNIT.Rell,
      UNIT.Swain,
      UNIT.Ambessa,
      UNIT.Mordekaiser,
    ],
    condition: [2, 4, 6, 9],
  },
  {
    id: 6,
    name: "Emissary",
    displayName: "사절",
    unit: [UNIT.Tristana, UNIT.Nami, UNIT.Ambessa, UNIT.Garen],
    condition: [1, 4],
  },
  {
    id: 7,
    name: "Enforcer",
    displayName: "집행자",
    unit: [
      UNIT.Maddie,
      UNIT.Steb,
      UNIT.Camille,
      UNIT.Loris,
      UNIT["Twisted Fate"],
      UNIT.Vi,
      UNIT.Caitlyn,
    ],
    condition: [2, 4, 6, 8, 10],
  },
  {
    id: 8,
    name: "Experiment",
    displayName: "실험체",
    unit: [
      UNIT.Zyra,
      UNIT.Urgot,
      UNIT["Nunu & Willump"],
      UNIT["Dr. Mundo"],
      UNIT.Twitch,
    ],
    condition: [3, 5, 7],
  },
  {
    id: 9,
    name: "Family",
    displayName: "가족",
    unit: [UNIT.Powder, UNIT.Violet, UNIT.Vander],
    condition: [3, 4, 5],
  },
  {
    id: 10,
    name: "Firelight",
    displayName: "점화단",
    unit: [UNIT.Zeri, UNIT.Scar, UNIT.Ekko],
    condition: [2, 3, 4],
  },
  {
    id: 11,
    name: "High Roller",
    displayName: "도박꾼",
    unit: [UNIT.Sevika],
    condition: [1],
  },
  {
    id: 12,
    name: "Junker King",
    displayName: "고물의 왕",
    unit: [UNIT.Rumble],
    condition: [1],
  },
  {
    id: 13,
    name: "Rebel",
    displayName: "반군",
    unit: [
      UNIT.Irelia,
      UNIT.Vex,
      UNIT.Akali,
      UNIT.Sett,
      UNIT.Ezreal,
      UNIT.Illaoi,
      UNIT.Zoe,
      UNIT.Jinx,
    ],
    condition: [3, 5, 7, 10],
  },
  {
    id: 14,
    name: "Scrap",
    displayName: "고물상",
    unit: [
      UNIT.Powder,
      UNIT.Trundle,
      UNIT.Ziggs,
      UNIT.Gangplank,
      UNIT.Corki,
      UNIT.Ekko,
      UNIT.Rumble,
    ],
    condition: [2, 4, 6, 9],
  },
  {
    id: 15,
    name: "Ambusher",
    displayName: "매복자",
    unit: [UNIT.Powder, UNIT.Camille, UNIT.Smeech, UNIT.Ekko, UNIT.Jinx],
    condition: [2, 3, 4, 5],
  },
  {
    id: 16,
    name: "Artillerist",
    displayName: "포수",
    unit: [UNIT.Tristana, UNIT.Urgot, UNIT.Ezreal, UNIT.Corki],
    condition: [2, 4, 6],
  },
  {
    id: 17,
    name: "Bruiser",
    displayName: "난동꾼",
    unit: [
      UNIT.Steb,
      UNIT.Trundle,
      UNIT.Sett,
      UNIT["Nunu & Willump"],
      UNIT.Renni,
      UNIT.Elise,
    ],
    condition: [2, 4, 6],
  },
  {
    id: 18,
    name: "Dominator",
    displayName: "지배자",
    unit: [
      UNIT.Ziggs,
      UNIT.Blitzcrank,
      UNIT.Cassiopeia,
      UNIT["Dr. Mundo"],
      UNIT.Silco,
      UNIT.Mordekaiser,
    ],
    condition: [2, 4, 6],
  },
  {
    id: 19,
    name: "Form Swapper",
    displayName: "형태전환자",
    unit: [UNIT.Gangplank, UNIT.Swain, UNIT.Elise, UNIT.Jayce],
    condition: [2, 4],
  },
  {
    id: 20,
    name: "Pit Fighter",
    displayName: "투사",
    unit: [
      UNIT.Draven,
      UNIT.Violet,
      UNIT.Urgot,
      UNIT.Gangplank,
      UNIT.Vi,
      UNIT.Sevika,
    ],
    condition: [2, 4, 6, 8],
  },
  {
    id: 21,
    name: "Quickstriker",
    displayName: "기동타격대",
    unit: [UNIT.Akali, UNIT.Nocturne, UNIT["Twisted Fate"], UNIT.Ambessa],
    condition: [2, 3, 4],
  },
  {
    id: 22,
    name: "Sentinel",
    displayName: "감시자",
    unit: [
      UNIT.Irelia,
      UNIT.Singed,
      UNIT.Leona,
      UNIT.Rell,
      UNIT.Loris,
      UNIT.Illaoi,
      UNIT.Rumble,
    ],
    condition: [2, 4, 6],
  },
  {
    id: 23,
    name: "Sniper",
    displayName: "저격수",
    unit: [UNIT.Maddie, UNIT.Zeri, UNIT["Kog'Maw"], UNIT.Twitch, UNIT.Caitlyn],
    condition: [2, 4, 6],
  },
  {
    id: 24,
    name: "Sorcerer",
    displayName: "마법사",
    unit: [
      UNIT.Lux,
      UNIT.Zyra,
      UNIT.Vladimir,
      UNIT.Nami,
      UNIT.Swain,
      UNIT.Zoe,
      UNIT.LeBlanc,
    ],
    condition: [2, 4, 6, 8],
  },
  {
    id: 25,
    name: "Visionary",
    displayName: "선도자",
    unit: [
      UNIT.Morgana,
      UNIT.Vex,
      UNIT.Rell,
      UNIT["Renata Glasc"],
      UNIT["Nunu & Willump"],
      UNIT.Heimerdinger,
      UNIT.Malzahar,
    ],
    condition: [2, 4, 6, 8],
  },
  {
    id: 26,
    name: "Watcher",
    displayName: "주시자",
    unit: [
      UNIT.Amumu,
      UNIT.Darius,
      UNIT.Vander,
      UNIT.Vladimir,
      UNIT.Scar,
      UNIT.Garen,
    ],
    condition: [2, 4, 6],
  },
];

export const UNIT_INFO = [
  {
    id: 1,
    cost: 2,
    name: "Akali",
    displayName: "아칼리",
    synergy: [SYNERGY.Rebel, SYNERGY.Quickstriker],
  },
  {
    id: 2,
    cost: 4,
    name: "Ambessa",
    displayName: "암베사",
    synergy: [SYNERGY.Conqueror, SYNERGY.Emissary, SYNERGY.Quickstriker],
  },
  {
    id: 3,
    cost: 1,
    name: "Amumu",
    displayName: "아무무",
    synergy: [SYNERGY.Automata, SYNERGY.Watcher],
  },
  {
    id: 4,
    cost: 3,
    name: "Blitzcrank",
    displayName: "블리츠크랭크",
    synergy: [SYNERGY.Automata, SYNERGY.Dominator],
  },
  {
    id: 5,
    cost: 5,
    name: "Caitlyn",
    displayName: "케이틀린",
    synergy: [SYNERGY.Enforcer, SYNERGY.Sniper],
  },
  {
    id: 6,
    cost: 2,
    name: "Camille",
    displayName: "카밀",
    synergy: [SYNERGY.Enforcer, SYNERGY.Ambusher],
  },
  {
    id: 7,
    cost: 3,
    name: "Cassiopeia",
    displayName: "카시오페아",
    synergy: [SYNERGY["Black Rose"], SYNERGY.Dominator],
  },
  {
    id: 8,
    cost: 4,
    name: "Corki",
    displayName: "코르키",
    synergy: [SYNERGY.Scrap, SYNERGY.Artillerist],
  },
  {
    id: 9,
    cost: 1,
    name: "Darius",
    displayName: "다리우스",
    synergy: [SYNERGY.Conqueror, SYNERGY.Watcher],
  },
  {
    id: 10,
    cost: 4,
    name: "Dr. Mundo",
    displayName: "문도박사",
    synergy: [SYNERGY.Experiment, SYNERGY.Dominator],
  },
  {
    id: 11,
    cost: 1,
    name: "Draven",
    displayName: "드레이븐",
    synergy: [SYNERGY.Conqueror, SYNERGY["Pit Fighter"]],
  },
  {
    id: 12,
    cost: 4,
    name: "Ekko",
    displayName: "에코",
    synergy: [SYNERGY.Firelight, SYNERGY.Scrap, SYNERGY.Ambusher],
  },
  {
    id: 13,
    cost: 4,
    name: "Elise",
    displayName: "엘리스",
    synergy: [SYNERGY["Black Rose"], SYNERGY.Bruiser, SYNERGY["Form Swapper"]],
  },
  {
    id: 14,
    cost: 3,
    name: "Ezreal",
    displayName: "이즈리얼",
    synergy: [SYNERGY.Acamedy, SYNERGY.Rebel, SYNERGY.Artillerist],
  },
  {
    id: 15,
    cost: 3,
    name: "Gangplank",
    displayName: "갱플랭크",
    synergy: [SYNERGY.Scrap, SYNERGY["Form Swapper"], SYNERGY["Pit Fighter"]],
  },
  {
    id: 16,
    cost: 4,
    name: "Garen",
    displayName: "가렌",
    synergy: [SYNERGY.Emissary, SYNERGY.Watcher],
  },
  {
    id: 17,
    cost: 4,
    name: "Heimerdinger",
    displayName: "하이머딩거",
    synergy: [SYNERGY.Acamedy, SYNERGY.Visionary],
  },
  {
    id: 18,
    cost: 4,
    name: "Illaoi",
    displayName: "일라오이",
    synergy: [SYNERGY.Rebel, SYNERGY.Sentinel],
  },
  {
    id: 19,
    cost: 1,
    name: "Irelia",
    displayName: "이렐리아",
    synergy: [SYNERGY.Rebel, SYNERGY.Sentinel],
  },
  {
    id: 20,
    cost: 5,
    name: "Jayce",
    displayName: "제이스",
    synergy: [SYNERGY.Acamedy, SYNERGY["Form Swapper"]],
  },
  {
    id: 21,
    cost: 5,
    name: "Jinx",
    displayName: "징크스",
    synergy: [SYNERGY.Rebel, SYNERGY.Ambusher],
  },
  {
    id: 22,
    cost: 3,
    name: "Kog'Maw",
    displayName: "코그모",
    synergy: [SYNERGY.Automata, SYNERGY.Sniper],
  },
  {
    id: 23,
    cost: 5,
    name: "LeBlanc",
    displayName: "르블랑",
    synergy: [SYNERGY["Black Rose"], SYNERGY.Sorcerer],
  },
  {
    id: 24,
    cost: 2,
    name: "Leona",
    displayName: "레오나",
    synergy: [SYNERGY.Acamedy, SYNERGY.Sentinel],
  },
  {
    id: 25,
    cost: 3,
    name: "Loris",
    displayName: "로리스",
    synergy: [SYNERGY.Enforcer, SYNERGY.Sentinel],
  },
  {
    id: 26,
    cost: 1,
    name: "Lux",
    displayName: "럭스",
    synergy: [SYNERGY.Acamedy, SYNERGY.Sorcerer],
  },
  {
    id: 27,
    cost: 1,
    name: "Maddie",
    displayName: "매디",
    synergy: [SYNERGY.Enforcer, SYNERGY.Sniper],
  },
  {
    id: 28,
    cost: 5,
    name: "Malzahar",
    displayName: "말자하",
    synergy: [SYNERGY.Automata, SYNERGY.Visionary],
  },
  {
    id: 29,
    cost: 5,
    name: "Mordekaiser",
    displayName: "모데카이저",
    synergy: [SYNERGY.Conqueror, SYNERGY.Dominator],
  },
  {
    id: 30,
    cost: 1,
    name: "Morgana",
    displayName: "모르가나",
    synergy: [SYNERGY["Black Rose"], SYNERGY.Visionary],
  },
  {
    id: 31,
    cost: 3,
    name: "Nami",
    displayName: "나미",
    synergy: [SYNERGY.Emissary, SYNERGY.Sorcerer],
  },
  {
    id: 32,
    cost: 2,
    name: "Nocturne",
    displayName: "녹턴",
    synergy: [SYNERGY.Automata, SYNERGY.Quickstriker],
  },
  {
    id: 33,
    cost: 3,
    name: "Nunu & Willump",
    displayName: "누누와 윌럼프",
    synergy: [SYNERGY.Experiment, SYNERGY.Bruiser, SYNERGY.Visionary],
  },
  {
    id: 34,
    cost: 1,
    name: "Powder",
    displayName: "파우더",
    synergy: [SYNERGY.Family, SYNERGY.Scrap, SYNERGY.Ambusher],
  },
  {
    id: 35,
    cost: 2,
    name: "Rell",
    displayName: "렐",
    synergy: [SYNERGY.Conqueror, SYNERGY.Sentinel, SYNERGY.Visionary],
  },
  {
    id: 36,
    cost: 2,
    name: "Renata Glasc",
    displayName: "레나타 글라스크",
    synergy: [SYNERGY["Chem-Baron"], SYNERGY.Visionary],
  },
  {
    id: 37,
    cost: 3,
    name: "Renni",
    displayName: "레니",
    synergy: [SYNERGY["Chem-Baron"], SYNERGY.Bruiser],
  },
  {
    id: 38,
    cost: 5,
    name: "Rumble",
    displayName: "럼블",
    synergy: [SYNERGY["Junker King"], SYNERGY.Scrap, SYNERGY.Sentinel],
  },
  {
    id: 39,
    cost: 3,
    name: "Scar",
    displayName: "스카",
    synergy: [SYNERGY.Firelight, SYNERGY.Watcher],
  },
  {
    id: 40,
    cost: 2,
    name: "Sett",
    displayName: "세트",
    synergy: [SYNERGY.Rebel, SYNERGY.Bruiser],
  },
  {
    id: 41,
    cost: 5,
    name: "Sevika",
    displayName: "세비카",
    synergy: [
      SYNERGY["Chem-Baron"],
      SYNERGY["High Roller"],
      SYNERGY["Pit Fighter"],
    ],
  },
  {
    id: 42,
    cost: 4,
    name: "Silco",
    displayName: "실코",
    synergy: [SYNERGY["Chem-Baron"], SYNERGY.Dominator],
  },
  {
    id: 43,
    cost: 1,
    name: "Singed",
    displayName: "신지드",
    synergy: [SYNERGY["Chem-Baron"], SYNERGY.Sentinel],
  },
  {
    id: 44,
    cost: 3,
    name: "Smeech",
    displayName: "스미치",
    synergy: [SYNERGY["Chem-Baron"], SYNERGY.Ambusher],
  },
  {
    id: 45,
    cost: 1,
    name: "Steb",
    displayName: "스텝",
    synergy: [SYNERGY.Enforcer, SYNERGY.Bruiser],
  },
  {
    id: 46,
    cost: 3,
    name: "Swain",
    displayName: "스웨인",
    synergy: [SYNERGY.Conqueror, SYNERGY["Form Swapper"], SYNERGY.Sorcerer],
  },
  {
    id: 47,
    cost: 2,
    name: "Tristana",
    displayName: "트리스나타",
    synergy: [SYNERGY.Emissary, SYNERGY.Artillerist],
  },
  {
    id: 48,
    cost: 1,
    name: "Trundle",
    displayName: "트런들",
    synergy: [SYNERGY.Scrap, SYNERGY.Bruiser],
  },
  {
    id: 49,
    cost: 3,
    name: "Twisted Fate",
    displayName: "트위스티드 페이트",
    synergy: [SYNERGY.Enforcer, SYNERGY.Quickstriker],
  },
  {
    id: 50,
    cost: 4,
    name: "Twitch",
    displayName: "트위치",
    synergy: [SYNERGY.Experiment, SYNERGY.Sniper],
  },
  {
    id: 51,
    cost: 2,
    name: "Urgot",
    displayName: "우르곳",
    synergy: [SYNERGY.Experiment, SYNERGY.Artillerist, SYNERGY["Pit Fighter"]],
  },
  {
    id: 52,
    cost: 2,
    name: "Vander",
    displayName: "밴더",
    synergy: [SYNERGY.Family, SYNERGY.Watcher],
  },
  {
    id: 53,
    cost: 1,
    name: "Vex",
    displayName: "벡스",
    synergy: [SYNERGY.Rebel, SYNERGY.Visionary],
  },
  {
    id: 54,
    cost: 4,
    name: "Vi",
    displayName: "바이",
    synergy: [SYNERGY.Enforcer, SYNERGY["Pit Fighter"]],
  },
  {
    id: 55,
    cost: 1,
    name: "Violet",
    displayName: "바이올렛",
    synergy: [SYNERGY.Family, SYNERGY["Pit Fighter"]],
  },
  {
    id: 56,
    cost: 2,
    name: "Vladimir",
    displayName: "블라디미르",
    synergy: [SYNERGY["Black Rose"], SYNERGY.Sorcerer, SYNERGY.Watcher],
  },
  {
    id: 57,
    cost: 2,
    name: "Zeri",
    displayName: "제리",
    synergy: [SYNERGY.Firelight, SYNERGY.Sniper],
  },
  {
    id: 58,
    cost: 2,
    name: "Ziggs",
    displayName: "직스",
    synergy: [SYNERGY.Scrap, SYNERGY.Dominator],
  },
  {
    id: 59,
    cost: 4,
    name: "Zoe",
    displayName: "조이",
    synergy: [SYNERGY.Rebel, SYNERGY.Sorcerer],
  },
  {
    id: 60,
    cost: 1,
    name: "Zyra",
    displayName: "자이라",
    synergy: [SYNERGY.Experiment, SYNERGY.Sorcerer],
  },
];
