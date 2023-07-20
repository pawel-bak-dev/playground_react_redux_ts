import { useState } from 'react';

interface AppProps {
  color?: string;
}

const App = (props: AppProps) => {
  const [counter, setCounter] = useState(0);

  const onIncrement = (): void => {
    setCounter(counter + 1);
  };

  const onDecrement = (): void => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
      {counter}
      {props.color}
    </div>
  );
};

export default App;
