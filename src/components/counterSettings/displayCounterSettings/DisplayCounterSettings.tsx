import s from './DisplayCounterSettings.module.scss';

export type DisplayCounterSettingsProps = {
  startValue: number
  maxValue: number
  setStartValue: (startValue: number) => void
  setMaxValue: (maxValue: number) => void
}

export const DisplayCounterSettings = ({startValue, maxValue, setStartValue, setMaxValue}: DisplayCounterSettingsProps) => {
  return (
    <div className={s.inputWrapper}>
      <div className={s.settingInput}>
        <label className={s.label}>
          Max value: </label>
          <input
            type="number"
            className={s.input}
            step="1"
            value={maxValue}
            onChange={(e) => {setMaxValue(+e.currentTarget.value)}}
          />

      </div>

      <div className={s.settingInput}>
        <label className={s.label}>
          Start value: </label>
          <input
            type="number"
            className={s.input}
            step="1"
            value={startValue}
            onChange={(e) => {setStartValue(+e.currentTarget.value)}}
          />

      </div>
      
    </div>
  );
};

