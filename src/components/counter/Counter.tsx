import {DisplayCounter} from "./displayCounter/DisplayCounter.tsx";
import {useState} from "react";
import s from './Counter.module.scss'
import {Button} from "../button/Button.tsx";


export const Counter = () => {
  const maxValue = 5
  const minValue = 0


  const [count, setCount] = useState(minValue)

  const onClickIncHandler = () => {
    const newCount = count + 1;
    if (newCount <= maxValue) {
      setCount(newCount)
    }
  }

  const onClickResetHandler = () => {
    setCount(minValue)

  }
  const hasReachedMax = count === maxValue;
  const isMinValue = count === minValue;

  return (
    <div className={s.counterWrapper}>
      <DisplayCounter count={count} isMax={hasReachedMax}/>

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

