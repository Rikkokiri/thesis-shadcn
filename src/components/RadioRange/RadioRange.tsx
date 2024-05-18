import "./RadioRange.css";

interface RadioOption {
  value: string;
  label: string;
}

interface RadioRangeProps {
  options: RadioOption[];
  value: string | undefined;
  onChange: (value: string) => void;
}

export const RadioRange = (props: RadioRangeProps) => {
  return (
    <div className="radio-range">
      {props.options.map((option, index) => {
        const isChecked = props.value == option.value;

        return (
          <div
            className="radio-range__option"
            key={`radio-option-${option.value}`}
          >
            <input
              type="radio"
              name="radio-option"
              id={`radio-option-${option.value}`}
              value={option.value}
              checked={isChecked}
              onChange={() => props.onChange(option.value)}
            />
            {isChecked && <div className="option__indicator"></div>}
            <label key={index}>{option.label}</label>
          </div>
        );
      })}
    </div>
  );
};
