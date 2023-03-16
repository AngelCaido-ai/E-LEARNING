import { FC } from "react";

import { FieldProps } from "formik";

import { Radio } from "shared/ui";
import { twClsx } from "shared/utils";

interface Props extends FieldProps<string> {
  className?: string;
  id: string;
  label: string;
  labelId?: string;
  checked?: boolean;
  onChange?: () => void;
}

export const RadioInput: FC<Props> = ({
  className,
  label,
  labelId,
  field,
  id,
  checked,
  onChange,
}) => {
  return (
    <label
      htmlFor={id}
      id={labelId}
      className={twClsx(`inline-flex items-center cursor-pointer`, className)}
    >
      <Radio
        id={id}
        name={field.name}
        className="relative mr-3"
        checked={checked ?? field.checked}
        value={field.value}
        onChange={onChange ?? field.onChange}
        onBlur={field.onBlur}
      />
      {label}
    </label>
  );
};
