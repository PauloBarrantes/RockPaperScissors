import useRockPaperScissorsStore, { State } from "../store";

const Score = () => {
  const score = useRockPaperScissorsStore((state: State) => state.score);
  return (
    <div className="flex flex-row border rounded border-slate-200 p-4 w-full md:w-1/3 uppercase font-bold justify-between">
      <div className="text-3xl">
        <h2>Rock</h2>
        <h2>Paper</h2>
        <h2>Scissors</h2>
      </div>
      <div className="flex items-center">
        <div className="rounded bg-white border-none drop-shadow-lg px-8 py-2 text-slate-700 text-center">
          <h2 className="text-xs text-cyan-700">Score</h2>
          <h1 className="text-4xl text-slate-700">{score}</h1>
        </div>
      </div>
    </div>
  );
};

export default Score;
