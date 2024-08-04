import { useRouter, useSegments } from "expo-router";
import * as React from "react";
import { deleteSession, getSession, setSession } from "../utils/storage";

const AuthContext = React.createContext<null | any>(null);

export function useAuth() {
  return React.useContext(AuthContext);
}

export function AuthProvider({ children }: React.PropsWithChildren) {
  const rootSegmemnt = useSegments()[0];
  const router = useRouter();
  const [user, setUser] = React.useState<string | undefined>(() =>
    getSession("user")
  );

  React.useEffect(() => {
    if (user === undefined) return;

    if (!user && rootSegmemnt !== "(auth)") {
      router.replace("/(auth)/login");
    } else if (user && rootSegmemnt !== "(app)") {
      router.replace("/");
    }
  }, [user, rootSegmemnt]);

  return (
    <AuthContext.Provider
      value={{
        user: user,
        signIn: () => {
          setUser("Kay");
          setSession("user", "Kay");
        },
        signOut: () => {
          setUser(undefined);
          deleteSession("user");
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
