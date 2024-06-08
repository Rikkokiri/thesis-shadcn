import "./Button.css";

export type ButtonVariant = "solid" | "outline" | "ghost";
export type ButtonSize = "small" | "medium" | "icon-only";
type ButtonIconSize = 20 | 24;

export interface ISharedButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  isDisabled?: boolean;
  className?: string;
  size?: ButtonSize;
  iconSize?: ButtonIconSize;
}

interface IButtonProps extends ISharedButtonProps {
  variant?: ButtonVariant;
  iconBefore?: JSX.Element;
  iconAfter?: JSX.Element;
}

export const Button = ({
  children,
  onClick,
  isDisabled = false,
  variant = "solid",
  size = "medium",
  className,
  iconBefore,
  iconAfter,
  iconSize = 20,
}: IButtonProps) => {
  return (
    <button
      disabled={isDisabled}
      className={`button button--${variant} ${className ?? ""} button--${size}`}
      onClick={onClick}
    >
      <ButtonIcon icon={iconBefore} iconSize={iconSize} />
      {children && <span className="button__content">{children}</span>}
      <ButtonIcon icon={iconAfter} iconSize={iconSize} />
    </button>
  );
};

const ButtonIcon = (props: {
  icon?: JSX.Element;
  iconSize: ButtonIconSize;
}) => {
  if (!props.icon) return null;
  return (
    <span className={`icon icon-before icon-${props.iconSize}`}>
      {props.icon}
    </span>
  );
};
