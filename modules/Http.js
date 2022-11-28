import { createContext } from "react";
import axios from "axios";

class Http {
  constructor() {
    const instance = axios.create({
      baseURL: process.env.NEXT_PUBLIC_NAVER_BASE_URL,
      headers: {
        "X-Naver-Client-Id": process.env.NEXT_PUBLIC_NAVER_CLIENT_ID,
        "X-Naver-Client-Secret": process.env.NEXT_PUBLIC_NAVER_CLIENT_SECRET,
      },
    });
  }
}

const HttpContext = createContext(new Http());
export default HttpContext;
