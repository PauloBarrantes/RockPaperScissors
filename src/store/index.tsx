import { create } from "zustand";
import Element from "../IElement";

// define types for state values and actions separately
export type State = {
  score: number;
  rules: boolean;
  step: 1 | 2 | 3;
  selectedElement: Element | null;
  selectedElementByHouse: Element | null;
};

export type Actions = {
  openRules: () => void;
  closeRules: () => void;
  goToSecondStep: () => void;
  goToFinalStep: () => void;

  setSelectedElement: (element: Element) => void;
  setSelectedElementHouse: (element: Element) => void;

  increaseScore: () => void;
  resetScore: () => void;
  resetGame: () => void;
};

// define the initial state
const initialState: State = {
  score: 0,
  rules: false,
  step: 1,
  selectedElement: null,
  selectedElementByHouse: null,
};

// create store
const useSlice = create<State & Actions>()((set, get) => ({
  ...initialState,
  openRules: () => set(() => ({ rules: true })),
  closeRules: () => set(() => ({ rules: false })),
  goToSecondStep: () => set(() => ({ step: 2 })),
  goToFinalStep: () => set(() => ({ step: 3 })),
  setSelectedElement: (element: Element) =>
    set(() => ({ selectedElement: element })),
  setSelectedElementHouse: (element: Element) =>
    set(() => ({ selectedElementByHouse: element })),
  increaseScore: () => set((state: State) => ({ score: state.score + 1 })),
  resetScore: () => set({ score: 0 }),
  resetGame: () =>
    set({ step: 1, selectedElement: null, selectedElementByHouse: null }),
}));

// const useStore = create((set) => ({
//   score: 0,
//   rules: false,
//   step: 1,
//   selectedElement: null,
//   selectedElementByHouse: null,
// }));

export default useSlice;
