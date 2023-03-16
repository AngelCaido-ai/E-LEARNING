/* eslint-disable @next/next/no-img-element */
import { memo, useState } from "react";

import { TextInput } from "shared/ui";
import { twClsx } from "shared/utils";

export const PasswordInput: typeof TextInput = memo((props) => {
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  return (
    <TextInput
      {...props}
      type={isVisiblePassword ? "text" : "password"}
      isAutoComplete
      inputContainerClassName={twClsx(
        props.inputContainerClassName,
        "relative"
      )}
      additionalInputElement={
        <button
          type="button"
          tabIndex={-1}
          onClick={() => setIsVisiblePassword((s) => !s)}
          className="absolute inset-y-0 right-4 m-auto"
        >
          <img src="/icons/eye.svg" alt="" />
        </button>
      }
    />
  );
});

PasswordInput.displayName = "PasswordInput";
