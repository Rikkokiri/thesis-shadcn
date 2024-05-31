import { Button, ButtonVariant, ISharedButtonProps } from "../Button/Button";
import "./ToggleButton.css";

type ToggleButtonVariant = Extract<ButtonVariant, "outline" | "ghost">;

interface IToggleButtonProps extends ISharedButtonProps {
  isToggled: boolean;
  untoggledIcon?: JSX.Element;
  toggledIcon?: JSX.Element;
  variant?: ToggleButtonVariant;
  toggledClassName?: string;
}

export const ToggleButton = ({
  children,
  isToggled,
  isDisabled,
  onClick,
  untoggledIcon,
  toggledIcon,
  variant = "outline",
  size,
  iconSize,
  className,
  toggledClassName = "toggled",
}: IToggleButtonProps) => {
  return (
    <Button
      onClick={onClick}
      iconBefore={isToggled ? toggledIcon : untoggledIcon}
      className={`toggle-button ${isToggled ? toggledClassName : ""} ${className || ""}`}
      variant={variant}
      size={size}
      isDisabled={isDisabled}
      iconSize={iconSize}
    >
      {children}
    </Button>
  );
};
