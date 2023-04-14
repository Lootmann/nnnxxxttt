"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";

type AuthContextProps = {
  currentUser: TUser | undefined;
};

const AuthContext = createContext<AuthContextProps>({
  currentUser: undefined,
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<TUser | undefined>();
  const [cookies] = useCookies(["userAuth"]);

  useEffect(() => {
    const getLoginUser = async () => {
      console.log("* AuthContext.login");
      // TODO: check cookie has token
      const username = cookies.userAuth;

      // TODO: find username and password
      const res = await fetch(
        `http://localhost:3000/api/users?name=${username}`
      );

      if (res.ok) {
        const data = await res.json();
        const user = data.users;

        console.log(user);
        console.log("data[0] = ", user[0]);
        setCurrentUser(user[0]);
      }
    };

    getLoginUser();
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser: currentUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => useContext(AuthContext);
