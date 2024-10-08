import { Queue } from "./queue.js";

const SYNERGY = {
  Arcana: 1,
  Chrono: 2,
  Dragon: 3,
  Druid: 4,
  Eldritch: 5,
  Faerie: 6,
  Frost: 7,
  Honeymancy: 8,
  Portal: 9,
  Pyro: 10,
  Ravenous: 11,
  Sugarcraft: 12,
  Witchcraft: 13,
  Ascendant: 14,
  Bastion: 15,
  "Bat Queen": 16,
  "Best Friends": 17,
  Blaster: 18,
  Hunter: 19,
  Incantor: 20,
  Mage: 21,
  Multistriker: 22,
  Preserver: 23,
  Scholar: 24,
  Shapeshifter: 25,
  Vanguard: 26,
  Warrior: 27,
};

const UNIT = {
  Ahri: 1,
  Akali: 2,
  Ashe: 3,
  Bard: 4,
  Blitzcrank: 5,
  Briar: 6,
  Camille: 7,
  Cassiopeia: 8,
  Diana: 9,
  Elise: 10,
  Ezreal: 11,
  Fiora: 12,
  Galio: 13,
  Gwen: 14,
  Hecarim: 15,
  Hwei: 16,
  Jax: 17,
  Jayce: 18,
  Jinx: 19,
  Kalista: 20,
  Karma: 21,
  Kassadin: 22,
  Katarina: 23,
  "Kog'Maw": 24,
  Lillia: 25,
  Milio: 26,
  Mordekaiser: 27,
  Morgana: 28,
  Nami: 29,
  Nasus: 30,
  Neeko: 31,
  Nilah: 32,
  Nomsy: 33,
  Norra: 34,
  Nunu: 35,
  Olaf: 36,
  Poppy: 37,
  Rakan: 38,
  Rumble: 39,
  Ryze: 40,
  Seraphine: 41,
  Shen: 42,
  Shyvana: 43,
  Smolder: 44,
  Soraka: 45,
  Swain: 46,
  Syndra: 47,
  "Tahm Kench": 48,
  Taric: 49,
  Tristana: 50,
  Twitch: 51,
  Varus: 52,
  Veigar: 53,
  Vex: 54,
  Warwick: 55,
  Wukong: 56,
  Xerath: 57,
  Ziggs: 58,
  Zilean: 59,
  Zoe: 60,
};

const SYNERGY_INFO = [
  {
    id: 1,
    name: "Arcana",
    displayName: "아르카나",
    unit: [UNIT.Ahri, UNIT.Hecarim, UNIT["Tahm Kench"], UNIT.Xerath],
    condition: [2, 3, 4, 5],
  },
  {
    id: 2,
    name: "Chrono",
    displayName: "시공간",
    unit: [UNIT.Jax, UNIT.Zilean, UNIT.Vex, UNIT.Karma, UNIT.Camille],
    condition: [2, 4, 6],
  },
  {
    id: 3,
    name: "Dragon",
    displayName: "용",
    unit: [UNIT.Nomsy, UNIT.Shyvana, UNIT.Smolder],
    condition: [2, 3],
  },
  {
    id: 4,
    name: "Druid",
    displayName: "드루이드",
    unit: [UNIT.Wukong],
    condition: [1],
  },
  {
    id: 5,
    name: "Eldritch",
    displayName: "섬뜩한힘",
    unit: [
      UNIT.Ashe,
      UNIT.Elise,
      UNIT.Nilah,
      UNIT.Syndra,
      UNIT.Mordekaiser,
      UNIT.Nami,
      UNIT.Briar,
    ],
    condition: [3, 5, 7, 10],
  },
  {
    id: 6,
    name: "Faerie",
    displayName: "요정",
    unit: [
      UNIT.Lillia,
      UNIT.Seraphine,
      UNIT.Tristana,
      UNIT.Katarina,
      UNIT.Kalista,
      UNIT.Rakan,
      UNIT.Milio,
    ],
    condition: [3, 5, 7, 9],
  },
  {
    id: 7,
    name: "Frost",
    displayName: "서리",
    unit: [
      UNIT.Twitch,
      UNIT.Warwick,
      UNIT.Zilean,
      UNIT.Hwei,
      UNIT.Swain,
      UNIT.Olaf,
      UNIT.Diana,
    ],
    condition: [3, 5, 7, 9],
  },
  {
    id: 8,
    name: "Honeymancy",
    displayName: "벌꿀술사",
    unit: [
      UNIT.Blitzcrank,
      UNIT.Ziggs,
      UNIT["Kog'Maw"],
      UNIT.Nunu,
      UNIT.Veigar,
    ],
    condition: [3, 5, 7],
  },
  {
    id: 9,
    name: "Portal",
    displayName: "차원문",
    unit: [
      UNIT.Jayce,
      UNIT.Zoe,
      UNIT.Galio,
      UNIT.Kassadin,
      UNIT.Ezreal,
      UNIT.Ryze,
      UNIT.Taric,
      UNIT.Norra,
    ],
    condition: [3, 6, 8, 10],
  },
  {
    id: 10,
    name: "Pyro",
    displayName: "화염",
    unit: [UNIT.Akali, UNIT.Shen, UNIT.Nasus, UNIT.Varus],
    condition: [2, 3, 4, 5],
  },
  {
    id: 11,
    name: "Ravenous",
    displayName: "허기",
    unit: [UNIT.Briar],
    condition: [1],
  },
  {
    id: 12,
    name: "Sugarcraft",
    displayName: "달콤술사",
    unit: [UNIT.Soraka, UNIT.Rumble, UNIT.Bard, UNIT.Jinx, UNIT.Gwen],
    condition: [2, 4, 6],
  },
  {
    id: 13,
    name: "Witchcraft",
    displayName: "마녀",
    unit: [
      UNIT.Poppy,
      UNIT.Zoe,
      UNIT.Cassiopeia,
      UNIT.Neeko,
      UNIT.Fiora,
      UNIT.Morgana,
    ],
    condition: [2, 4, 6, 8],
  },
  {
    id: 14,
    name: "Ascendant",
    displayName: "초월체",
    unit: [UNIT.Xerath],
    condition: [1],
  },
  {
    id: 15,
    name: "Bastion",
    displayName: "요새",
    unit: [
      UNIT.Lillia,
      UNIT.Poppy,
      UNIT.Nunu,
      UNIT.Hecarim,
      UNIT.Shen,
      UNIT.Taric,
      UNIT.Diana,
    ],
    condition: [2, 4, 6, 8],
  },
  {
    id: 16,
    name: "Bat Queen",
    displayName: "박쥐여왕",
    unit: [UNIT.Morgana],
    condition: [1],
  },
  {
    id: 17,
    name: "Best Friends",
    displayName: "단짝",
    unit: [UNIT.Norra],
    condition: [1],
  },
  {
    id: 18,
    name: "Blaster",
    displayName: "폭파단",
    unit: [
      UNIT.Rumble,
      UNIT.Tristana,
      UNIT.Ezreal,
      UNIT.Hwei,
      UNIT.Varus,
      UNIT.Smolder,
    ],
    condition: [2, 4, 6],
  },
  {
    id: 19,
    name: "Hunter",
    displayName: "사냥꾼",
    unit: [UNIT.Nomsy, UNIT.Twitch, UNIT["Kog'Maw"], UNIT.Jinx, UNIT.Olaf],
    condition: [2, 4, 6],
  },
  {
    id: 20,
    name: "Incantor",
    displayName: "마도사",
    unit: [UNIT.Ziggs, UNIT.Cassiopeia, UNIT.Syndra, UNIT.Karma],
    condition: [2, 4],
  },
  {
    id: 21,
    name: "Mage",
    displayName: "요술사",
    unit: [
      UNIT.Seraphine,
      UNIT.Soraka,
      UNIT.Galio,
      UNIT.Veigar,
      UNIT.Vex,
      UNIT.Nami,
      UNIT.Norra,
    ],
    condition: [3, 5, 7, 10],
  },
  {
    id: 22,
    name: "Multistriker",
    displayName: "쇄도자",
    unit: [
      UNIT.Ashe,
      UNIT.Jax,
      UNIT.Akali,
      UNIT.Kassadin,
      UNIT.Hecarim,
      UNIT.Kalista,
      UNIT.Camille,
    ],
    condition: [3, 5, 7, 9],
  },
  {
    id: 23,
    name: "Preserver",
    displayName: "보호술사",
    unit: [UNIT.Zilean, UNIT.Bard, UNIT.Rakan, UNIT.Morgana],
    condition: [2, 3, 4, 5],
  },
  {
    id: 24,
    name: "Scholar",
    displayName: "학자",
    unit: [UNIT.Zoe, UNIT.Ahri, UNIT.Bard, UNIT.Ryze, UNIT.Milio],
    condition: [2, 4, 6],
  },
  {
    id: 25,
    name: "Shapeshifter",
    displayName: "형상변환자",
    unit: [
      UNIT.Elise,
      UNIT.Jayce,
      UNIT.Shyvana,
      UNIT.Neeko,
      UNIT.Swain,
      UNIT.Nasus,
      UNIT.Briar,
    ],
    condition: [2, 4, 6, 8],
  },
  {
    id: 26,
    name: "Vanguard",
    displayName: "선봉대",
    unit: [
      UNIT.Blitzcrank,
      UNIT.Warwick,
      UNIT.Galio,
      UNIT.Rumble,
      UNIT.Mordekaiser,
      UNIT["Tahm Kench"],
    ],
    condition: [2, 4, 6],
  },
  {
    id: 27,
    name: "Warrior",
    displayName: "전사",
    unit: [UNIT.Akali, UNIT.Nilah, UNIT.Katarina, UNIT.Fiora, UNIT.Gwen],
    condition: [2, 4, 6],
  },
];

const UNIT_INFO = [
  {
    id: 1,
    cost: 2,
    name: "Ahri",
    displayName: "아리",
    synergy: [SYNERGY.Arcana, SYNERGY.Scholar],
  },
  {
    id: 2,
    cost: 2,
    name: "Akali",
    displayName: "아칼리",
    synergy: [SYNERGY.Pyro, SYNERGY.Multistriker, SYNERGY.Warrior],
  },
  {
    id: 3,
    cost: 1,
    name: "Ashe",
    displayName: "애쉬",
    synergy: [SYNERGY.Eldritch, SYNERGY.Multistriker],
  },
  {
    id: 4,
    cost: 3,
    name: "Bard",
    displayName: "바드",
    synergy: [SYNERGY.Sugarcraft, SYNERGY.Preserver, SYNERGY.Scholar],
  },
  {
    id: 5,
    cost: 1,
    name: "Blitzcrank",
    displayName: "블리츠크랭크",
    synergy: [SYNERGY.Honeymancy, SYNERGY.Vanguard],
  },
  {
    id: 6,
    cost: 5,
    name: "Briar",
    displayName: "브라이어",
    synergy: [SYNERGY.Eldritch, SYNERGY.Ravenous, SYNERGY.Shapeshifter],
  },
  {
    id: 7,
    cost: 5,
    name: "Camille",
    displayName: "카밀",
    synergy: [SYNERGY.Chrono, SYNERGY.Multistriker],
  },
  {
    id: 8,
    cost: 2,
    name: "Cassiopeia",
    displayName: "카시오페아",
    synergy: [SYNERGY.Witchcraft, SYNERGY.Incantor],
  },
  {
    id: 9,
    cost: 5,
    name: "Diana",
    displayName: "다이애나",
    synergy: [SYNERGY.Frost, SYNERGY.Bastion],
  },
  {
    id: 10,
    cost: 1,
    name: "Elise",
    displayName: "엘리스",
    synergy: [SYNERGY.Eldritch, SYNERGY.Shapeshifter],
  },
  {
    id: 11,
    cost: 3,
    name: "Ezreal",
    displayName: "이즈리얼",
    synergy: [SYNERGY.Portal, SYNERGY.Blaster],
  },
  {
    id: 12,
    cost: 4,
    name: "Fiora",
    displayName: "피오라",
    synergy: [SYNERGY.Witchcraft, SYNERGY.Warrior],
  },
  {
    id: 13,
    cost: 2,
    name: "Galio",
    displayName: "갈리오",
    synergy: [SYNERGY.Portal, SYNERGY.Mage, SYNERGY.Vanguard],
  },
  {
    id: 14,
    cost: 4,
    name: "Gwen",
    displayName: "그웬",
    synergy: [SYNERGY.Sugarcraft, SYNERGY.Warrior],
  },
  {
    id: 15,
    cost: 3,
    name: "Hecarim",
    displayName: "헤카림",
    synergy: [SYNERGY.Arcana, SYNERGY.Bastion, SYNERGY.Multistriker],
  },
  {
    id: 16,
    cost: 3,
    name: "Hwei",
    displayName: "흐웨이",
    synergy: [SYNERGY.Frost, SYNERGY.Blaster],
  },
  {
    id: 17,
    cost: 1,
    name: "Jax",
    displayName: "잭스",
    synergy: [SYNERGY.Chrono, SYNERGY.Multistriker],
  },
  {
    id: 18,
    cost: 1,
    name: "Jayce",
    displayName: "제이스",
    synergy: [SYNERGY.Portal, SYNERGY.Shapeshifter],
  },
  {
    id: 19,
    cost: 3,
    name: "Jinx",
    displayName: "징크스",
    synergy: [SYNERGY.Sugarcraft, SYNERGY.Hunter],
  },
  {
    id: 20,
    cost: 4,
    name: "Kalista",
    displayName: "칼리스타",
    synergy: [SYNERGY.Faerie, SYNERGY.Multistriker],
  },
  {
    id: 21,
    cost: 4,
    name: "Karma",
    displayName: "카르마",
    synergy: [SYNERGY.Chrono, SYNERGY.Incantor],
  },
  {
    id: 22,
    cost: 2,
    name: "Kassadin",
    displayName: "카사딘",
    synergy: [SYNERGY.Portal, SYNERGY.Multistriker],
  },
  {
    id: 23,
    cost: 3,
    name: "Katarina",
    displayName: "카타리나",
    synergy: [SYNERGY.Faerie, SYNERGY.Warrior],
  },
  {
    id: 24,
    cost: 2,
    name: "Kog'Maw",
    displayName: "코그모",
    synergy: [SYNERGY.Honeymancy, SYNERGY.Hunter],
  },
  {
    id: 25,
    cost: 1,
    name: "Lillia",
    displayName: "릴리아",
    synergy: [SYNERGY.Faerie, SYNERGY.Bastion],
  },
  {
    id: 26,
    cost: 5,
    name: "Milio",
    displayName: "밀리오",
    synergy: [SYNERGY.Faerie, SYNERGY.Scholar],
  },
  {
    id: 27,
    cost: 3,
    name: "Mordekaiser",
    displayName: "모데카이저",
    synergy: [SYNERGY.Eldritch, SYNERGY.Vanguard],
  },
  {
    id: 28,
    cost: 5,
    name: "Morgana",
    displayName: "모르가나",
    synergy: [SYNERGY.Witchcraft, SYNERGY["Bat Queen"], SYNERGY.Preserver],
  },
  {
    id: 29,
    cost: 4,
    name: "Nami",
    displayName: "나미",
    synergy: [SYNERGY.Eldritch, SYNERGY.Mage],
  },
  {
    id: 30,
    cost: 4,
    name: "Nasus",
    displayName: "나서스",
    synergy: [SYNERGY.Pyro, SYNERGY.Shapeshifter],
  },
  {
    id: 31,
    cost: 3,
    name: "Neeko",
    displayName: "니코",
    synergy: [SYNERGY.Witchcraft, SYNERGY.Shapeshifter],
  },
  {
    id: 32,
    cost: 2,
    name: "Nilah",
    displayName: "닐라",
    synergy: [SYNERGY.Eldritch, SYNERGY.Warrior],
  },
  {
    id: 33,
    cost: 1,
    name: "Nomsy",
    displayName: "뇸뇸이",
    synergy: [SYNERGY.Dragon, SYNERGY.Hunter],
  },
  {
    id: 34,
    cost: 5,
    name: "Norra",
    displayName: "노라",
    synergy: [SYNERGY.Portal, SYNERGY["Best Friends"], SYNERGY.Mage],
  },
  {
    id: 35,
    cost: 2,
    name: "Nunu",
    displayName: "누누",
    synergy: [SYNERGY.Honeymancy, SYNERGY.Bastion],
  },
  {
    id: 36,
    cost: 4,
    name: "Olaf",
    displayName: "올라프",
    synergy: [SYNERGY.Frost, SYNERGY.Hunter],
  },
  {
    id: 37,
    cost: 1,
    name: "Poppy",
    displayName: "뽀삐",
    synergy: [SYNERGY.Witchcraft, SYNERGY.Bastion],
  },
  {
    id: 38,
    cost: 4,
    name: "Rakan",
    displayName: "라칸",
    synergy: [SYNERGY.Faerie, SYNERGY.Preserver],
  },
  {
    id: 39,
    cost: 2,
    name: "Rumble",
    displayName: "럼블",
    synergy: [SYNERGY.Sugarcraft, SYNERGY.Blaster, SYNERGY.Vanguard],
  },
  {
    id: 40,
    cost: 4,
    name: "Ryze",
    displayName: "라이즈",
    synergy: [SYNERGY.Portal, SYNERGY.Scholar],
  },
  {
    id: 41,
    cost: 1,
    name: "Seraphine",
    displayName: "세라핀",
    synergy: [SYNERGY.Faerie, SYNERGY.Mage],
  },
  {
    id: 42,
    cost: 3,
    name: "Shen",
    displayName: "쉔",
    synergy: [SYNERGY.Pyro, SYNERGY.Bastion],
  },
  {
    id: 43,
    cost: 2,
    name: "Shyvana",
    displayName: "쉬바나",
    synergy: [SYNERGY.Dragon, SYNERGY.Shapeshifter],
  },
  {
    id: 44,
    cost: 5,
    name: "Smolder",
    displayName: "스몰더",
    synergy: [SYNERGY.Dragon, SYNERGY.Blaster],
  },
  {
    id: 45,
    cost: 1,
    name: "Soraka",
    displayName: "소라카",
    synergy: [SYNERGY.Sugarcraft, SYNERGY.Mage],
  },
  {
    id: 46,
    cost: 3,
    name: "Swain",
    displayName: "스웨인",
    synergy: [SYNERGY.Frost, SYNERGY.Shapeshifter],
  },
  {
    id: 47,
    cost: 2,
    name: "Syndra",
    displayName: "신드라",
    synergy: [SYNERGY.Eldritch, SYNERGY.Incantor],
  },
  {
    id: 48,
    cost: 4,
    name: "Tahm Kench",
    displayName: "탐켄치",
    synergy: [SYNERGY.Arcana, SYNERGY.Vanguard],
  },
  {
    id: 49,
    cost: 4,
    name: "Taric",
    displayName: "타릭",
    synergy: [SYNERGY.Portal, SYNERGY.Bastion],
  },
  {
    id: 50,
    cost: 2,
    name: "Tristana",
    displayName: "트리스타나",
    synergy: [SYNERGY.Faerie, SYNERGY.Blaster],
  },
  {
    id: 51,
    cost: 1,
    name: "Twitch",
    displayName: "트위치",
    synergy: [SYNERGY.Frost, SYNERGY.Hunter],
  },
  {
    id: 52,
    cost: 4,
    name: "Varus",
    displayName: "바루스",
    synergy: [SYNERGY.Pyro, SYNERGY.Blaster],
  },
  {
    id: 53,
    cost: 3,
    name: "Veigar",
    displayName: "베이가",
    synergy: [SYNERGY.Honeymancy, SYNERGY.Mage],
  },
  {
    id: 54,
    cost: 3,
    name: "Vex",
    displayName: "벡스",
    synergy: [SYNERGY.Chrono, SYNERGY.Mage],
  },
  {
    id: 55,
    cost: 1,
    name: "Warwick",
    displayName: "워윅",
    synergy: [SYNERGY.Frost, SYNERGY.Vanguard],
  },
  {
    id: 56,
    cost: 3,
    name: "Wukong",
    displayName: "오공",
    synergy: [SYNERGY.Druid],
  },
  {
    id: 57,
    cost: 5,
    name: "Xerath",
    displayName: "제라스",
    synergy: [SYNERGY.Arcana, SYNERGY.Ascendant],
  },
  {
    id: 58,
    cost: 1,
    name: "Ziggs",
    displayName: "직스",
    synergy: [SYNERGY.Honeymancy, SYNERGY.Incantor],
  },
  {
    id: 59,
    cost: 2,
    name: "Zilean",
    displayName: "질리언",
    synergy: [SYNERGY.Chrono, SYNERGY.Frost, SYNERGY.Preserver],
  },
  {
    id: 60,
    cost: 1,
    name: "Zoe",
    displayName: "조이",
    synergy: [SYNERGY.Portal, SYNERGY.Witchcraft, SYNERGY.Scholar],
  },
];

const q = new Queue();
let initialSynergyStaus = [];
let initialUnitStatus = [];
let result = [];

const levelFilter = (level, unitStatus) => {
  return (unit) => {
    if (unitStatus[unit.id]) return false;

    if (level < 5) {
      return unit.cost < 4;
    } else if (level < 7) {
      return unit.cost < 5;
    }
    return true;
  };
};

const initialize = (level) => {
  for (let i = 0; i <= SYNERGY_INFO.length; i++) {
    initialSynergyStaus.push(0);
  }
  for (let i = 0; i <= UNIT_INFO.length; i++) {
    initialUnitStatus.push(false);
  }

  UNIT_INFO.filter(levelFilter(level, initialUnitStatus)).forEach((unit) => {
    const synergyStatus = [...initialSynergyStaus];
    const unitStatus = [...initialUnitStatus];
    unitStatus[unit.id] = true;
    unit.synergy.forEach((synergy) => {
      synergyStatus[synergy] += 1;
    });
    q.enqueue({
      level: 1,
      totalCost: unit.cost,
      synergyStatus,
      unitStatus,
    });
  });
};

const addScore = (status) => {
  let synergyScore = 0;
  SYNERGY_INFO.filter(
    (synergy) => status.synergyStatus[synergy.id] > 0
  ).forEach((synergy) => {
    let maxCond = 0;
    synergy.condition.forEach((cond) => {
      if (cond < status.synergyStatus[synergy.id]) {
        maxCond = cond;
      }
    });
    synergyScore += maxCond;
    synergyScore -= status.synergyStatus[synergy.id] - maxCond;
  });
  return { ...status, score: status.totalCost + synergyScore };
};

for (let level = 3; level <= 4; level += 1) {
  initialize(level);
  while (!q.isEmpty()) {
    const current = q.dequeue();
    if (current.level < level) {
      UNIT_INFO.filter(levelFilter(current.level, current.unitStatus)).forEach(
        (unit) => {
          const synergyStatus = [...current.synergyStatus];
          const unitStatus = [...current.unitStatus];
          unitStatus[unit.id] = true;
          unit.synergy.forEach((synergy) => {
            synergyStatus[synergy] += 1;
          });
          q.enqueue(
            addScore({
              level: current.level + 1,
              totalCost: current.totalCost + unit.cost,
              synergyStatus,
              unitStatus,
            })
          );
        }
      );
    } else {
      result.push(current);
    }
  }
}

console.log(
  result
    .sort((a, b) => b.score - a.score)
    .map((status) => {
      const synergyTextList = SYNERGY_INFO.filter(
        (synergy) => status.synergyStatus[synergy.id] >= synergy.condition[0]
      ).map((synergy) => {
        let count = 0;
        for (const cond of synergy.condition) {
          if (cond <= status.synergyStatus[synergy.id]) {
            count = cond;
          } else {
            break;
          }
        }
        return `${count}${synergy.displayName}`;
      });
      const unitTextList = UNIT_INFO.filter(
        (unit) => status.unitStatus[unit.id]
      ).map((unit) => unit.displayName);

      return `[${[...unitTextList].join(",")}]: ${synergyTextList.join(",")}, ${
        status.score
      }`;
    })
);