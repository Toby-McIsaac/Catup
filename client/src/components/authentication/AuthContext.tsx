import React, { createContext, useState, ReactNode } from "react";

// Define the structure of user data and context
export interface User {
  id: string;
  name: string;
  email: string;
}

export interface AuthContextType {
  user: User | null;
  login: (token: string, userInfo: User) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (token: string, userInfo: User) => {
    setUser(userInfo);
	// TODO: change to cookies
    localStorage.setItem("token", token);
  };

  const logout = () => {
    setUser(null);
	// TODO: change to cookies
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
