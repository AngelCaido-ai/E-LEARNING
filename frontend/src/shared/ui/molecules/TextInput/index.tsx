import { FC, KeyboardEventHandler, ReactNode } from "react";

import { FieldProps } from "formik";

import { FieldErrorMessage } from "shared/ui";
import { twClsx } from "shared/utils";

interface Props extends FieldProps<string> {
  type?: "text" | "password";
  label: string;
  labelClassName: string;
  containerClassName?: string;
  inputContainerClassName?: string;
  inputClassName?: string;
  placeholder?: string;
  additionalInputElement?: ReactNode;
  required?: boolean;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
  disabled?: boolean;
  errorClassName?: string;
  isAutoComplete?: boolean;
  testId?: string;
  blueBg?: boolean;
}

export const TextInput: FC<Props> = ({
  type = "text",
  label,
  labelClassName,
  containerClassName,
  inputContainerClassName,
  inputClassName,
  placeholder,
  additionalInputElement,
  required,
  onKeyDown,
  disabled,
  errorClassName,
  testId,
  isAutoComplete,
  blueBg,
  ...fieldProps
}) => {
  const { field, form } = fieldProps;
  const fieldErrors = form.errors[field.name];

  const hasError = fieldErrors && form.touched[field.name];

  return (
    <div className={containerClassName}>
      <label
        htmlFor={field.name}
        className={twClsx(
          "text-sm font-medium",
          labelClassName,
          hasError ? (blueBg ? "text-white" : "text-statuses-red") : ""
        )}
      >
        {label}
        {required && <span className="text-statuses-red"> *</span>}
      </label>
      <div className="relative mt-2" id="text_input_container">
        <div className={inputContainerClassName}>
          <input
            type={type}
            id={field.name}
            placeholder={placeholder}
            value={field.value}
            onChange={field.onChange}
            onBlur={field.onBlur}
            disabled={disabled}
            data-testid={testId}
            autoComplete={isAutoComplete ? "on" : "off"}
            className={twClsx(
              "h-12 w-full rounded-md border border-salon-bleu/80 px-4 placeholder:text-berwick-berry",
              inputClassName,
              {
                "border-statuses-red placeholder:text-statuses-red focus:outline-statuses-red text-statuses-red":
                  hasError,
              },
              {
                "bg-distant-horizon border-distant-horizon": disabled,
              }
            )}
            onKeyDown={onKeyDown}
          />
          {additionalInputElement}
        </div>
        {hasError && (
          <FieldErrorMessage className={errorClassName} errors={fieldErrors} />
        )}
      </div>
    </div>
  );
};
