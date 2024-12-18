import { Platform } from "react-native";

// export const Base_URL = Platform.OS ==="android"?
//  'http://localhost:8000': 'http://10:0.2.2:8000'

//  export const Socket_URL = Platform.OS ==="android"?
//  'ws://localhost:8000': 'ws://10:0.2.2:8000'

// const LOCAL_IPV4 = "192.168.1.25";
export const LOCAL_IPV4 = "127.0.0.1";

export const Base_URL =
  Platform.OS === "web"
    ? "http://localhost:8000"
    : `http://${LOCAL_IPV4}:8000`;

export const Socket_URL =
  Platform.OS === "web"
    ? "ws://localhost:8000"
    : `ws://${LOCAL_IPV4}:8000`;


//    if Url  is deployed then use https in both
// and ip addresss 
// expot BASE_URL = 'http://192.168.29.236:8000'
//    Link-local IPv6 Address . . . . . : fe80::6378:9638:1c3a:b98f%3
// IPv4 Address. . . . . . . . . . . : 192.168.1.25
// Subnet Mask . . . . . . . . . . . : 255.255.255.0
// Default Gateway . . . . . . . . . : 192.168.1.1