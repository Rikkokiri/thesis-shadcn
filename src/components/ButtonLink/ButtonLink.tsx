import { Link, LinkProps } from "react-router-dom";
import "./ButtonLink.css";

export type ButtonLinkVariant = "solid" | "outline";
export type ButtonLinkSize = "small" | "medium";
type ButtonIconSize = 20 | 24;

export interface IButtonProps {}

interface IButtonLinkProps extends LinkProps {
  children?: React.ReactNode;
  className?: string;
  size?: ButtonLinkSize;
  iconSize?: ButtonIconSize;
  variant?: ButtonLinkVariant;
  iconBefore?: JSX.Element;
  iconAfter?: JSX.Element;
  isExternal?: boolean;
}

/**
 * Link that looks like a button
 */

export const ButtonLink = ({
  children,
  variant = "solid",
  size = "medium",
  className,
  iconBefore,
  iconAfter,
  iconSize = 20,
  ...rest
}: IButtonLinkProps) => {
  const classNames = `btn-link btn-link--${variant} ${className} btn-link--${size}`;

  return (
    <Link className={classNames} {...rest}>
      <Icon icon={iconBefore} iconSize={iconSize} />
      {children && <span className="btn-link__content">{children}</span>}
      <Icon icon={iconAfter} iconSize={iconSize} />
    </Link>
  );
};

const Icon = (props: { icon?: JSX.Element; iconSize: ButtonIconSize }) => {
  if (!props.icon) return null;
  return (
    <span className={`icon icon-before icon-${props.iconSize}`}>
      {props.icon}
    </span>
  );
};
