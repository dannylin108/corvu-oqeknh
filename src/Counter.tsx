import { createSignal } from 'solid-js';

const Counter = () => {
  const [count, setCount] = createSignal(0);

  const increment = () => setCount(count() + 1);
  const decrement = () => setCount(count() - 1);

  return (
    <div class="flex-column gap-4">
      <h1>Counter: {count()}</h1>
      <div class="flex gap-4">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={decrement}>
          -
        </button>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={increment}>+</button>
      </div>
    </div>
  );
};

export default Counter;