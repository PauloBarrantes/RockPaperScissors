import Element from "../IElement";
import Node from "./shared/Node";
import useStore, { Actions, State } from "../store";
import { cn } from "../utils";

const SelectionPhase = ({ elements }: { elements: Element[] }) => {
  const currentStep = useStore((state: State & Actions) => state.step);
  const currentElement = useStore(
    (state: State & Actions) => state.selectedElement
  );

  return (
    <div className="game">
      {elements.map((element) => (
        <Node
          {...element}
          className={cn(
            currentStep === 1 ? "cursor-pointer" : "cursor-default",
            currentStep !== 1 ? "opacity-0 " : "opacity-100",
            currentElement?.name === element.name && "delay-75",
            element.className
          )}
        ></Node>
      ))}
    </div>
  );
};

export default SelectionPhase;
