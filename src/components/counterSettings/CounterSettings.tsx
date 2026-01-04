import s from "./CounterSettings.module.scss";
import {
  DisplayCounterSettings
} from "./displayCounterSettings/DisplayCounterSettings.tsx";
import {Button} from "../button/Button.tsx";

export type CounterSettingsProps = {
  startValue: number;
  maxValue: number;
  setStartValue: (startValue: number) => void;
  setMaxValue: (maxValue: number) => void;
}

export const CounterSettings = ({
                                  startValue,
                                  maxValue,
                                  setStartValue,
                                  setMaxValue
                                }: CounterSettingsProps) => {
  const onClickHandler = () => {
    setStartValue(startValue);
    setMaxValue(maxValue);
  }
  return (
    <div className={s.counterWrapper}>
      <DisplayCounterSettings startValue={startValue}  maxValue={maxValue} setStartValue={setStartValue} setMaxValue={setMaxValue}/>
      <div className={s.buttonsWrapper}>
        <Button
          title="set"
          onClick={onClickHandler}
        />
      </div>
    </div>
  );
};

