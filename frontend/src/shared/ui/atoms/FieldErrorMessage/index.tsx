import React, { memo } from "react";

import { FormikErrors } from "formik";

import { twClsx } from "shared/utils";

interface Props {
  errors: string | FormikErrors<any> | string[] | FormikErrors<any>[] | object;
  className?: string;
  id?: string;
}

export const FieldErrorMessage: React.FC<Props> = memo(
  ({ className = "mt-2", errors, id }) => {
    let errorsList = [errors];

    if (Array.isArray(errors)) {
      errorsList = errors;
    }

    if (errors.toString() === "[object Object]") {
      errorsList = Object.values(errors);
    }

    return (
      <ul
        className={twClsx(
          className,
          Array.isArray(errors) && "flex flex-col gap-1"
        )}
        id={id}
      >
        {errorsList.map((message, index) => (
          <li key={index} className="text-xs font-medium text-statuses-red">
            {message.toString()}
          </li>
        ))}
      </ul>
    );
  }
);

FieldErrorMessage.displayName = "FieldErrorMessage";
