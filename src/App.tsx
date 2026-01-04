import s from './App.module.scss'
import {Counter} from "./components/counter/Counter.tsx";
import {
  CounterSettings
} from "./components/counterSettings/CounterSettings.tsx";
import {useState} from "react";

function App() {
  const [startValue, setStartValue] = useState(0);
  const [maxValue, setMaxValue] = useState(5);
  return (
      <div className={s.gridWrapper}>
      <CounterSettings
        startValue={startValue}
        maxValue={maxValue}
        setStartValue={setStartValue}
        setMaxValue={setMaxValue}/>
      <Counter
        startValue={startValue}
        maxValue={maxValue}/>
    </div>
  )
}

export default App
