// import axios, { AxiosError } from "axios";
import { FormikConfig } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  login: Yup.string().required("Поле логин обязательно для заполнения"),
  password: Yup.string().required("Поле пароль обязательно для заполнения"),
});

export type LoginFormValues = Yup.InferType<typeof validationSchema>;

export const loginForm: FormikConfig<LoginFormValues> = {
  initialValues: {
    login: "",
    password: "",
  },
  // eslint-disable-next-line no-unused-vars
  onSubmit: (values, { setErrors }) => {},
  validationSchema,
};
