import useStore, { Actions, State } from "../../store";
import { AiOutlineClose } from "react-icons/ai";
import { ReactComponent as Rules } from "../../images/image-rules-bonus.svg";
import { cn } from "../../utils";
const Modal = () => {
  const isOpen = useStore((state: State & Actions) => state.rules);
  const closeModal = useStore((state: State & Actions) => state.closeRules);

  return (
    <div
      className={cn(
        "fixed  top-0 left-0 right-0 mx-auto z-50 w-full md:w-3/4 lg:w-3/4 xl:w-1/2 px-10 py-20 md:p-20 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all",
        isOpen ? "fixed opacity-100 visible" : "invisible opacity-0"
      )}
    >
      <div className="h-full relative bg-slate-200 rounded-lg shadow p-10">
        <div className="flex flex-row justify-between items-center">
          <h3 className="text-4xl text-slate-500 uppercase font-bold ">
            Rules
          </h3>
          <button onClick={closeModal}>
            <AiOutlineClose className="text-slate-500" />
          </button>
        </div>
        <div className="flex h-full items-center justify-center ">
          <Rules></Rules>
        </div>
      </div>
    </div>
  );
};

export default Modal;
