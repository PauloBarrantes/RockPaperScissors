import useStore from "../store";
import Node from "./shared/Node";
import { cn } from "../utils";

const Results = ({ result }: { result: string }) => {
  const currentElement = useStore((state) => state.selectedElement);
  const houseElement = useStore((state) => state.selectedElementByHouse);

  return (
    <div className="my-5 flex flex-row justify-between relative ">
      {currentElement ? (
        <div
          className="absolute left-0 top-0 flex flex-col items-center"
          style={{
            background:
              "radial-gradient(43.84% 43.84% at 50% 50%, #9ECFCA 0%, rgba(158, 207, 202, 0.00) 100%);",
          }}
        >
          <Node
            {...currentElement}
            className={cn(
              "opacity-100", // w-32 h-32 md:w-60 md:h-60",
              currentElement.className,
              "cursor-not-allowed"
            )}
          />
          <h3 className="text-center uppercase text-2xl mt-2">You Picked</h3>
        </div>
      ) : null}
      {houseElement ? (
        <div className="absolute right-0 top-0 flex flex-col items-center">
          <Node
            {...houseElement}
            className={cn(
              "opacity-100 cursor-not-allowed",
              houseElement.className
            )}
          />
          <h3 className="text-center uppercase text-2xl mt-2">
            The house picked
          </h3>
        </div>
      ) : null}
    </div>
  );
};

export default Results;
