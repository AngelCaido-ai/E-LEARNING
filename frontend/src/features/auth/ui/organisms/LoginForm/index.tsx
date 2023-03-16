import { FastField, Form, Formik } from "formik";
import Link from "next/link";

import { loginForm } from "features/auth/forms";

export const LoginForm = () => {
  return (
    <Formik {...loginForm}>
      {({ isSubmitting }) => (
        <Form>
          <FastField
            name="login"
            label="Логин"
            placeholder="Введите ваш логин"
          />
          <FastField name="login" label="Пароль" placeholder="Введите пароль" />
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
