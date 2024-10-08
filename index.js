import { SYNERGY_INFO, UNIT_INFO } from "./data.js";
import { Queue } from "./queue.js";

const MAX_LEVEL = 5;

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
      lastUnitId: unit.id,
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
    synergyScore += maxCond === 1 ? 0 : maxCond;
    synergyScore -= status.synergyStatus[synergy.id] - maxCond;
  });
  return { ...status, score: status.totalCost + synergyScore };
};

for (let level = 3; level <= MAX_LEVEL; level += 1) {
  initialize(level);
  while (!q.isEmpty()) {
    const current = q.dequeue();
    if (current.level < level) {
      UNIT_INFO.filter((unit) => current.lastUnitId < unit.id)
        .filter(levelFilter(current.level, current.unitStatus))
        .forEach((unit) => {
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
              lastUnitId: unit.id,
            })
          );
        });
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

      return [
        status.score + "점",
        [...unitTextList].join(","),
        synergyTextList.join(","),
      ];
    })
);
