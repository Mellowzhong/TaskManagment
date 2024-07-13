import { jwtDecode } from "jwt-decode";

export const getExpiration = (token) => {
  const decoded = jwtDecode(token);
  return decoded.exp;
};

export const getUserId = (token) => {
  const decoded = jwtDecode(token);
  return decoded.user_id;
};
