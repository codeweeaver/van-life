import { createContext, useCallback, useMemo, useState } from "react";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const logoutUser = useCallback(() => {
    localStorage.removeItem("user");
    setUser(null);
  }, []);

  const loginUser = useCallback(async (creds) => {
    const res = await fetch("/api/login", {
      method: "post",
      body: JSON.stringify(creds),
    });
    const data = await res.json();

    if (!res.ok) {
      throw {
        message: data.message,
        statusText: res.statusText,
        status: res.status,
      };
    }

    localStorage.setItem("user", JSON.stringify(data));
    setUser(data);
  }, []);

  const authValues = useMemo(
    () => ({
      user,
      setUser,
      loginUser,
      logoutUser,
    }),
    [user, setUser, loginUser, logoutUser]
  );

  return (
    <AuthContext.Provider value={authValues}>{children}</AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
