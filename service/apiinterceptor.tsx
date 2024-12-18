import axios from "axios";
import { Base_URL } from "./config";
import { tokenstorage } from "@/store/storage";
import { resetAndNavigate } from "@/utils/Helpers";
import { Logout } from "./authservice";

export const appAxios = axios.create({
  baseURL: Base_URL,
});

export const refresh_token = async () => {
  try {
    const refreshToken = tokenstorage.getString("refresh_token");
    const response = await axios.post(`${Base_URL}/auth/refresh-token`, {
      refresh_token: refreshToken,
    });

    console.log("===response===", response);

    const new_access_token = response.data.access_token;
    const new_refresh_token = response.data.refresh_token;

    localStorage.set("access_token", new_access_token);
    localStorage.set("refresh_token", new_refresh_token);
    return new_access_token;
  } catch (err) {
    console.log("REFRESH TOKEN ERROR");
    tokenstorage.clearAll();
    resetAndNavigate("/role");
    Logout();
  }
};

//  interceptors functions

appAxios.interceptors.request.use(async (config) => {
  const accessToken = tokenstorage.getString("access_token");
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

appAxios.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
      try {
        const newAccesToken = await refresh_token();
        if (newAccesToken) {
          error.headers.Authorization = `Bearer ${newAccesToken}`;
          return axios(error.config);
        }
      } catch (error) {
        console.log("Error refreshing token");
      }
    }

    return Promise.reject(error);
  }
);
