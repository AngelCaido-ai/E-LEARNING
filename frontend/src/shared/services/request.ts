import { toast } from "react-toastify";

import axios, { AxiosError } from "axios";

export const request = axios.create({
  baseURL: "http://localhost:7000/",
  timeout: 6000,
  withCredentials: true,
});

request.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response && error.response.status === 400) {
      return Promise.reject(error);
    }

    if (error.response && error.response?.status >= 500) {
      toast("Ошибка сервера, повторите попытку позже", {
        type: "error",
        toastId: "notification",
      });
    } else if (error.code === "ECONNABORTED") {
      toast("Таймаут соединения, повторите попытку", {
        type: "error",
        toastId: "notification",
      });
    } else {
      toast("Неизвестная ошибка", {
        type: "error",
        toastId: "notification",
      });
    }
  }
);
