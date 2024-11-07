import React, { createContext, useState, ReactNode, useEffect } from "react";

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface AuthContextType {
  user: User | null;
  validateToken: () => Promise<void>;
  checkLoggedIn: () => string | null;
  login: (userInfo: User) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const checkLoggedIn = () => {
    return localStorage.getItem("token");
  };

  const validateToken = () => {
    // Directly set a dummy user if the token exists
    return login({
      id: "test-id",
      name: "test-name",
      email: "test-email",
    });
  };

  useEffect(() => {
    const token = checkLoggedIn();
    if (token) {
      validateToken();
    }
  });

  const login = async (userInfo: User) => {
    try {
      const response = await fetch("http://localhost:5050/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
      });

      if (!response.ok) {
        throw new Error(`Login failed: ${response.statusText}`);
      }

      const data = await response.json();

      setUser(data);
      // TODO: Better way to store token?
      localStorage.setItem("token", data.token);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{ user, validateToken, checkLoggedIn, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
