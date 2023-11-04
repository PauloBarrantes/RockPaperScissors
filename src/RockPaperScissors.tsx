import Board from "./components/Board";
import Score from "./components/Score";
import Button from "./components/shared/Button";
import useStore, { Actions, State } from "./store";

const RockPaperScissors = () => {
  const openRules = useStore((state: State & Actions) => state.openRules);
  const resetGame = useStore((state: State & Actions) => state.resetGame);

  return (
    <div className="h-screen p-5 md:px-20 md:py-5 flex flex-col justify-center items-center relative">
      <Score />
      <Board />
      <Button onClick={resetGame} className="absolute bottom-3 left-3">
        Reset
      </Button>
      <Button onClick={openRules} className="absolute bottom-3 right-3">
        Rules
      </Button>
    </div>
  );
};

export default RockPaperScissors;
