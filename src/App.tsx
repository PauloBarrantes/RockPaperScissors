import RockPaperScissors from "./RockPaperScissors";
import { create } from "zustand";
import Modal from "./components/shared/Modal";

function App() {
  return (
    <div className="bg-gradient-to-t from-cyan-800 to-sky-900 text-white">
      <Modal />
      <RockPaperScissors />
    </div>
  );
}

export default App;
