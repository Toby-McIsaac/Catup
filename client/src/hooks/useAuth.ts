import { useContext } from "react";
import {
  AuthContext,
  AuthContextType,
} from "../components/authentication/AuthContext";
/**
 * Custom hook to access the authentication context.
 *
 * @returns {AuthContextType} The current authentication context.
 * @throws {Error} If the hook is used outside of an AuthProvider.
 */
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
