"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { usePathname } from "next/navigation";

type AuthContextProps = {
  currentUser: TUser | undefined;
};

const AuthContext = createContext<AuthContextProps>({
  currentUser: undefined,
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<TUser | undefined>();
  const [cookies] = useCookies(["userAuth"]);
  const pathname = usePathname();

  useEffect(() => {
    const getLoginUser = async () => {
      console.log("* AuthContext.login");
      const username = cookies.userAuth;

      // NOTE: when token is null, guest is not logged-in, so redirect login page
      if (!username) {
        window.location.href = "/auths/login";
      } else {
        // TODO: find username and password
        const res = await fetch(
          `http://localhost:3000/api/users?name=${username}`
        );

        if (res.ok) {
          const data = await res.json();
          const user = data.users as TUser[];

          // NOTE: user is not found, redirect login page
          if (user.length == 0) {
            window.location.href = "/auths/login";
            return;
          }

          console.log(">>> Login User", user[0]);
          setCurrentUser(user[0]);
        }
      }
    };

    // NOTE: when currentPath == '/auths/login', do not need rediret to /auths/login
    if (pathname !== "/auths/login") getLoginUser();
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser: currentUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => useContext(AuthContext);
