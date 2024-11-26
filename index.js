import { SYNERGY_INFO, UNIT_INFO } from "./data13.js";
import { Queue } from "./queue.js";

const MAX_LEVEL = 5;

const q = new Queue();
let initialSynergyStaus = [];
let initialUnitStatus = [];
let result = [];

// 해당 레벨에서 확률이 희박한 코스트 유닛은 제외
const levelFilter = (unitStatus) => {
  return (unit) => {
    if (unitStatus[unit.id]) return false;

    if (MAX_LEVEL < 8) {
      return unit.cost < 4;
    } else if (MAX_LEVEL < 9) {
      return unit.cost < 5;
    }
    return true;
  };
};

const initializeArray = () => {
  initialSynergyStaus = [];
  initialUnitStatus = [];
  result = [];

  for (let i = 0; i <= SYNERGY_INFO.length; i++) {
    initialSynergyStaus.push(0);
  }
  for (let i = 0; i <= UNIT_INFO.length; i++) {
    initialUnitStatus.push(false);
  }
};

// 큐 초기화 후 유닛 1개 insert
const initialize = (selectedUnitId) => {
  initializeArray();
  if (selectedUnitId) {
    const selectedUnit = UNIT_INFO[selectedUnitId];
    const synergyStatus = [...initialSynergyStaus];
    const unitStatus = [...initialUnitStatus];
    unitStatus[selectedUnitId] = true;
    selectedUnit.synergy.forEach((synergy) => {
      synergyStatus[synergy] += 1;
    });

    UNIT_INFO.filter(levelFilter(unitStatus)).forEach((unit) => {
      const newSynergyStatus = [...synergyStatus];
      const newUnitStatus = [...unitStatus];
      newUnitStatus[unit.id] = true;
      unit.synergy.forEach((synergy) => {
        newSynergyStatus[synergy] += 1;
      });
      q.enqueue({
        level: 2,
        totalCost: selectedUnit.cost + unit.cost,
        synergyStatus: newSynergyStatus,
        unitStatus: newUnitStatus,
        lastUnitId: unit.id,
      });
    });

    return;
  }

  UNIT_INFO.filter(levelFilter(initialUnitStatus)).forEach((unit) => {
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

// 점수 계산: 유닛 총 코스트 + 시너지 유닛 수 - (3* 시너지 미적용 유닛 수)
const addScore = (status) => {
  let synergyScore = 0;
  SYNERGY_INFO.filter(
    (synergy) => status.synergyStatus[synergy.id] > 0
  ).forEach((synergy) => {
    let maxCond = 0;
    synergy.condition.forEach((cond) => {
      if (cond <= status.synergyStatus[synergy.id]) {
        maxCond = cond;
      }
    });

    synergyScore += maxCond === 1 ? 0 : maxCond;
    synergyScore -= (status.synergyStatus[synergy.id] - maxCond) * 3;
  });
  return { ...status, score: status.totalCost + synergyScore };
};

const makeTeam = (unitId) => {
  return () => {
    initialize(unitId);
    while (!q.isEmpty()) {
      const current = q.dequeue();
      if (current.level < MAX_LEVEL) {
        UNIT_INFO.filter((unit) => current.lastUnitId < unit.id)
          .filter(levelFilter(current.unitStatus))
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
    console.log(result.sort((a, b) => b.score - a.score).map(printResult));
  };
};

// 결과 출력
const printResult = (status) => {
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
};

const init = () => {
  UNIT_INFO.forEach((unit) => {
    const button = document.createElement("button");
    button.innerText = unit.name;
    button.addEventListener("click", makeTeam(unit.id));
    document.body.appendChild(button);
  });
};

init();
