// import axios, { AxiosError } from "axios";
import axios, { AxiosError } from "axios";
import { FormikConfig } from "formik";
import * as Yup from "yup";

import { request } from "shared/services/";

const validationSchema = Yup.object({
  email: Yup.string().required("Поле логин обязательно для заполнения"),
  password: Yup.string().required("Поле пароль обязательно для заполнения"),
});

export type LoginFormValues = Yup.InferType<typeof validationSchema>;

export const loginForm: FormikConfig<LoginFormValues> = {
  initialValues: {
    email: "",
    password: "",
  },
  // eslint-disable-next-line no-unused-vars
  onSubmit: (values, { setErrors }) => {
    return request
      .post("login", values)
      .then(({ data }) => {
        console.log(data);
      })
      .catch((error: AxiosError<{ [key: string]: string[] }>) => {
        if (
          axios.isAxiosError(error) &&
          error.response?.data &&
          error.response?.status === 400
        ) {
          setErrors(error.response.data);
        }

        return Promise.reject(error);
      });
  },
  validationSchema,
};
