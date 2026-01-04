import {DisplayCounter} from "./displayCounter/DisplayCounter.tsx";
import {useState} from "react";
import s from './Counter.module.scss'
import {Button} from "../button/Button.tsx";

export type CounterProps = {
  startValue: number;
  maxValue: number;
}

export const Counter = ({startValue, maxValue}: CounterProps) => {

  const [count, setCount] = useState(startValue)

  const onClickIncHandler = () => {
    const newCount = count + 1;
    if (newCount <= maxValue) {
      setCount(newCount)
    }
  }

  const onClickResetHandler = () => {
    setCount(startValue)

  }
  const hasReachedMax = count === maxValue;
  const isMinValue = count === startValue;

  return (
    <div className={s.counterWrapper}>
      <DisplayCounter
        count={count}
        isMax={hasReachedMax}
      />

      <div className={s.buttonsWrapper}>
        <Button
          title="inc"
          onClick={onClickIncHandler}
          disabled={hasReachedMax}
        />
        <Button
          title="reset"
          onClick={onClickResetHandler}
          disabled={isMinValue}
        />
      </div>

    </div>
  );
};
