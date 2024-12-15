import axios from "axios";

export const api = axios.create({
  // TODO: Colocar a URL de produção
  baseURL: "http://192.168.100.10:3333",
  timeout: 700,
});
