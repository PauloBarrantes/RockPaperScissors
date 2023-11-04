import React, { useEffect, useState } from "react";

import useStore from "../store";
import { elements } from "../constants/elements";
import { cn, getRandomElement } from "../utils";
import Results from "./Results";

const ResolutionPhase = () => {
  const [result, setResult] = useState("");
  const currentElement = useStore((state) => state.selectedElement);
  const houseElement = useStore((state) => state.selectedElementByHouse);
  const step = useStore((state) => state.step);

  const setElementByHouse = useStore((state) => state.setSelectedElementHouse);
  const playAgain = useStore((state) => state.resetGame);
  const setFinalStep = useStore((state) => state.goToFinalStep);
  const increaseScore = useStore((state) => state.increaseScore);

  const randomizeElement = () => {
    const newEl = getRandomElement(elements);
    setElementByHouse(newEl);
  };

  function repeatFunction(func: () => void, delay: number, repeat: number) {
    let counter = 0;
    let interval = setInterval(() => {
      if (repeat !== counter) {
        func();
        counter++;
      } else {
        setFinalStep();
        clearInterval(interval);
      }
    }, delay);
  }

  useEffect(() => {
    if (step === 2) {
      repeatFunction(randomizeElement, 50, 20);
    } else if (step === 3 && currentElement && houseElement) {
      // We need to find the winner
      if (currentElement.name === houseElement.name) {
        setResult("No Winner");
      } else if (currentElement.beats.find((e) => e === houseElement.name)) {
        setResult("You Win");
        increaseScore();
      } else {
        setResult("You Lose");
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]);

  return (
    <div>
      <Results />

      <div
        className={cn(
          "flex flex-col items-center translate-y-[300%] transition-all",
          step === 3 ? "opacity-100" : "opacity-0"
        )}
      >
        <h2 className="text-5xl font-display uppercase">{result}</h2>
        <div>
          <button
            onClick={playAgain}
            className="rounded bg-white text-slate-700 px-4 py-2 uppercase shadow-sm mt-4"
          >
            Play Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResolutionPhase;
