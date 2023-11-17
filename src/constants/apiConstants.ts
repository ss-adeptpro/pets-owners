import { TDefaultTimeout, THeader } from "../types/apiTypes";

export const Header: THeader = {
  "Content-Type": 'application/json'
};

// Set a default timeout in seconds
export const API_DEAFULT_TIMEOUT:TDefaultTimeout = 10000;
export const API_OWNERS_TIMEOUT:TDefaultTimeout = 2000;