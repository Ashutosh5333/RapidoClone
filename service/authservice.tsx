import { useCaptainStore } from "@/store/captainstore";
import { tokenstorage } from "@/store/storage";
import { useUserStore } from "@/store/userStore";
import { resetAndNavigate } from "@/utils/Helpers";
import axios from "axios";
import { Alert } from "react-native";
import { Base_URL } from "./config";

export const signin = async (payload: {
  role: "customer" | "captain";
  phone: string;
}) => {
  try {
    const { setUser } = useUserStore.getState();
    const { setUser: setCaptainUser } = useCaptainStore.getState();
    const res = await axios.post(`${Base_URL}/auth/signin`, payload);

    if (res.data.user.role === "customer") {
      setUser(res.data.user);
    } else {
      setCaptainUser(res.data.user);
    }
    localStorage.set("access_token", res.data.access_token);
    localStorage.set("refresh_token", res.data.refresh_token);

    if (res.data.user.role === "customer") {
      resetAndNavigate("/customer/home");
    } else {
      resetAndNavigate("/captain/home");
    }


  } catch (err: any) {
    Alert.alert("Oh! Dang there was an error");
    console.log("errror ", err.response.data.msg || "Error  signin");
  }
};





export const Logout = async () => {
  const { clearData } = useUserStore.getState();
  const { clearcaptainData } = useCaptainStore.getState();

  tokenstorage.clearAll();
  clearData();
  clearcaptainData();
  resetAndNavigate("/role");
};
