import { Button, ButtonVariant, ISharedButtonProps } from "../Button/Button";
import "./ToggleButton.css";

type ToggleButtonVariant = Extract<ButtonVariant, "outline" | "ghost">;

interface IToggleButtonProps extends ISharedButtonProps {
  isToggled: boolean;
  untoggledIcon?: JSX.Element;
  toggledIcon?: JSX.Element;
  variant?: ToggleButtonVariant;
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
}: IToggleButtonProps) => {
  return (
    <Button
      onClick={onClick}
      iconBefore={isToggled ? toggledIcon : untoggledIcon}
      className={`toggle-button ${isToggled ? "toggled" : ""} ${className || ""}`}
      variant={variant}
      size={size}
      isDisabled={isDisabled}
      iconSize={iconSize}
    >
      {children}
    </Button>
  );
};
