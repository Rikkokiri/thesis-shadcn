import { Button, ButtonSize, ButtonVariant } from "../Button/Button";
import "./ToggleButton.css";

type ToggleButtonVariant = Extract<ButtonVariant, "outline" | "ghost">;

interface IToggleButtonProps {
  children?: React.ReactNode;
  isToggled: boolean;
  toggle: () => void;
  untoggledIcon?: JSX.Element;
  toggledIcon?: JSX.Element;
  variant?: ToggleButtonVariant;
  size?: ButtonSize;
}

export const ToggleButton = ({
  children,
  isToggled,
  toggle,
  untoggledIcon,
  toggledIcon,
  variant = "outline",
  size,
}: IToggleButtonProps) => {
  return (
    <Button
      onClick={toggle}
      iconBefore={isToggled ? toggledIcon : untoggledIcon}
      className={`toggle-button ${isToggled ? "toggled" : ""}`}
      variant={variant}
      size={size}
    >
      {children}
    </Button>
  );
};
