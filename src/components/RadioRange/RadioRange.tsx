import "./RadioRange.css";

interface RadioOption {
  value: number;
  label: string;
  optionClassName?: string;
}

interface RadioRangeProps {
  options: RadioOption[];
  value: number | undefined;
  onChange: (value: number) => void;
  isReadonly?: boolean;
}

export const RadioRange = (props: RadioRangeProps) => {
  return (
    <div className="radio-range">
      {props.options.map((option, index) => {
        const isChecked = props.value == option.value;
        const optionClass = option.optionClassName ?? "";

        return (
          <div
            className={`radio-range__option ${optionClass}`}
            key={`radio-option-${option.value}`}
          >
            <input
              type="radio"
              name="radio-option"
              id={`radio-option-${option.value}`}
              value={option.value}
              checked={isChecked}
              onChange={() => props.onChange(option.value)}
              readOnly={!!props.isReadonly}
              className={props.isReadonly ? "readonly" : ""}
            />
            {isChecked && <div className={`option__indicator`}></div>}
            <label key={index}>{option.label}</label>
          </div>
        );
      })}
    </div>
  );
};
