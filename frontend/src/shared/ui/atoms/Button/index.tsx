import { FC, ForwardedRef, forwardRef, ReactNode } from "react";

import { twClsx } from "shared/utils";

type ButtonIcon = "plus" | string;

interface Props {
  theme?: "primary" | "outline" | "dotted";
  type?: "button" | "submit" | "reset";
  className?: string;
  children?: ReactNode;
  disabled?: boolean;
  id?: string;
  onClick?: (e?: any) => void;
  ref?: ForwardedRef<HTMLButtonElement>;
  icon?: ButtonIcon;
  blueBg?: boolean;
}

interface ButtonIconProps {
  icon?: ButtonIcon;
  className?: string;
  disabled?: boolean;
}

export const Button: FC<Props> = forwardRef(
  (
    {
      children,
      className,
      theme = "primary",
      type = "button",
      icon,
      disabled,
      blueBg,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={twClsx(
          "font-semibold h-9 rounded-md px-5",
          {
            "bg-absolute-zero text-white hover:bg-dark-midnight-blue focus:outline-absolute-zero disabled:bg-berwick-berry/20 disabled:text-black-out/30":
              theme === "primary",
          },
          {
            "border-2 border-absolute-zero text-absolute-zero hover:border-dark-midnight-blue hover:text-dark-midnight-blue focus:outline-dark-midnight-blue focus:text-dark-midnight-blue disabled:bg-berwick-berry/20 disabled:text-black-out/30":
              theme === "outline",
          },
          {
            "border-2 disabled:border-berwick-berry/20 border-dotted border-absolute-zero text-absolute-zero hover:border-dark-midnight-blue hover:text-dark-midnight-blue focus:outline-dark-midnight-blue focus:text-dark-midnight-blue disabled:bg-berwick-berry/20 disabled:text-black-out/30":
              theme === "dotted",
          },
          {
            "flex gap-3.5 items-center justify-center": icon,
          },
          {
            "hover:border-white hover:text-white hover:opacity-60": blueBg,
          },
          className
        )}
        type={type}
        disabled={disabled}
        {...props}
      >
        <p>{children}</p>
      </button>
    );
  }
);

Button.displayName = "Button";
