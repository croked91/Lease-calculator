import type { AxiosPromise } from "axios";
import { apiInstance } from "./base";
import type { PostCalcParams, PostCalcRes } from "./models";

const BASE_URL = "/eK160jgYJ6UlaRPldJ1P";


export const postCalc = (params?: PostCalcParams): AxiosPromise<PostCalcRes> => {
  return apiInstance.post(BASE_URL, { params });
};


