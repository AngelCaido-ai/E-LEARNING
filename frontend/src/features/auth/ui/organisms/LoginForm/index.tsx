import { FastField, Form, Formik } from "formik";
import Link from "next/link";

import { loginForm } from "features/auth/forms";
import { PasswordInput, TextInput } from "shared/ui";

export const LoginForm = () => {
  return (
    <Formik {...loginForm}>
      {({ isSubmitting }) => (
        <Form>
          <FastField
            name="email"
            label="Логин"
            placeholder="Введите ваш логин"
            component={TextInput}
          />
          <FastField
            name="password"
            label="Пароль"
            placeholder="Введите пароль"
            component={PasswordInput}
          />
          <button
            type="submit"
            id="login_button"
            className="mt-8 mb-6 h-12 w-full"
            disabled={isSubmitting}
          >
            Войти
          </button>
          <Link href="/login/password_recovery">Забыли пароль?</Link>
        </Form>
      )}
    </Formik>
  );
};
