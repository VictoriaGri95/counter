import s from './DisplayCounterSettings.module.scss';
import * as React from "react";


export type DisplayCounterSettingsProps = {
  startValue: number
  maxValue: number
  setStartValue: (startValue: number) => void
  setMaxValue: (maxValue: number) => void
}

export const DisplayCounterSettings = ({
                                         startValue,
                                         maxValue,
                                         setStartValue,
                                         setMaxValue
                                       }: DisplayCounterSettingsProps) => {
  // const [maxInputValue, setMaxInputValue] = useState(maxValue);
  // const [startInputValue, setStartInputValue] = useState(maxValue);
  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = +e.target.value;
    setMaxValue(value);
  };

  const handleStartChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = +e.target.value;
    setStartValue(value);
  };
  return (
    <div className={s.inputWrapper}>
      <div className={s.settingInput}>
        <label className={s.label}>
          Max value:
        </label>
        <input
          type="number"
          className={s.input}
          value={maxValue}
          onChange={handleMaxChange}
        />

      </div>

      <div className={s.settingInput}>
        <label className={s.label}>
          Start value:
        </label>
        <input
          type="number"
          className={s.input}
          value={startValue}
          onChange={handleStartChange}
        />

      </div>

    </div>
  );
};

