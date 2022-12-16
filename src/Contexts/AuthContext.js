import { createContext, useContext, useState } from "react";
import jwt_decode from "jwt-decode";
import Cookie from "js-cookie";
// import { UtilityContext } from "./UtilityContext";
import API from "../utils/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const login = async (credentials) => {
      console.log(credentials);
      try {
          const res = await API.post("/api/auth/login",credentials);
          console.log(res);
          // id:user._id,
          // accessLevel:user.accessLevel,
          // isApproved:user.isApproved
          if (res.status === 200 && res.data) {
            const { id, accessLevel, isApproved} = jwt_decode(
              res.data
            );
            setUser({
              id,
              accessLevel,
              isApproved,
              token: res.data
            });
          //   Cookie.set("sid", res.data);
            return {success: true, accessLevel};
          }
          // toast(res.data);
          // return { success: false };
        } catch (e) {
          // toast(e.response.data, "error");
          return { success: false };
        }
    };
  return (
    <AuthContext.Provider value={{user,login}}>
      {children}
    </AuthContext.Provider>
  );
};



