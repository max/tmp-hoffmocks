import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="grid h-screen w-screen place-items-center">
      <button
        className="rounded bg-stone-500 px-1 text-white"
        onClick={() => setCount((count) => count + 1)}
      >
        Count is {count}
      </button>
    </div>
  );
}

export default App;
