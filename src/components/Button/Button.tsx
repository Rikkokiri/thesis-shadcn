import "./Button.css";

export type ButtonVariant = "solid" | "outline" | "ghost";
export type ButtonSize = "small" | "medium";

interface IButtonProps {
  children?: React.ReactNode;
  onClick: () => void;
  isDisabled?: boolean;
  variant?: ButtonVariant;
  className?: string;
  size?: ButtonSize;
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
}: IButtonProps) => {
  return (
    <button
      disabled={isDisabled}
      className={`button button--${variant} ${className} button--${size}`}
      onClick={onClick}
    >
      {iconBefore} <span>{children}</span> {iconAfter}
    </button>
  );
};
