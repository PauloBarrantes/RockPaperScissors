import SelectionPhase from "./SelectionPhase";
import ResolutionPhase from "./ResolutionPhase";
import { elements } from "../constants/elements";
const Board = () => {
  return (
    <div>
      <ResolutionPhase />
      <SelectionPhase elements={elements} />
    </div>
  );
};

export default Board;
