import Counter from "./counter";
import CounterHooks from "./counterHooks";

function App() {
  return (
    <div>
      Counter
      <Counter initialCount={0} />
      CounterHooks
      <CounterHooks initialCount={0} />
    </div>
  );
}

export default App;
