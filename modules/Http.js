import { createContext } from "react";
import axios from "axios";

class Http {
  constructor() {
    axios.defaults.baseURL = process.env.NEXT_PUBLIC_NAVER_BASE_URL;
    axios.defaults.headers.common["X-Naver-Client-Id"] =
      process.env.NEXT_PUBLIC_NAVER_CLIENT_ID;
    axios.defaults.headers.common["X-Naver-Client-Secret"] =
      process.env.NEXT_PUBLIC_NAVER_CLIENT_SECRET;
  }

  async getMovies(query) {
    const res = await axios.get("/", {
      params: {
        query,
      },
    });

    return res;
  }
}

const HttpContext = createContext(new Http());
export default HttpContext;
