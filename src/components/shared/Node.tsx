import useStore, { Actions, State } from "../../store";
import Element from "../../IElement";
import { cn } from "../../utils";

const Node = ({ name, className, icon: Icon, beats }: Element) => {
  const currentStep = useStore((state: State & Actions) => state.step);
  const moveNextStep = useStore(
    (state: State & Actions) => state.goToSecondStep
  );
  const setSelectedElement = useStore(
    (state: State & Actions) => state.setSelectedElement
  );

  const handleSelectedElement = () => {
    if (currentStep === 1) {
      setSelectedElement({
        name: name,
        className: className,
        icon: Icon,
        beats: beats,
      });
      moveNextStep();
    }
  };

  return (
    <div
      onClick={currentStep === 1 ? handleSelectedElement : undefined}
      className={cn(
        "transition-all duration-400 py-10 px-10 bg-white rounded-full border-8	hover:shadow-lg z-10 w-32 h-32 md:w-40 md:h-40",
        className
      )}
    >
      <Icon className=" -translate-x-3 -translate-y-3 md:scale-125 md:translate-x-0 md:translate-y-0" />
    </div>
  );
};

export default Node;
