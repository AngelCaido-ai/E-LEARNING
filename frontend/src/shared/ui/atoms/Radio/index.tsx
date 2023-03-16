import { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";

import { twClsx } from "shared/utils";

export const Radio: FC<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
> = ({ className, ...props }) => (
  <input
    type="radio"
    {...props}
    className={twClsx(
      `relative h-5 w-5 cursor-pointer appearance-none rounded-full border-2 border-absolute-zero checked:after:absolute checked:after:inset-0 checked:after:m-auto checked:after:h-[10px] checked:after:w-[10px] checked:after:rounded-full checked:after:bg-absolute-zero`,
      className
    )}
  />
);
