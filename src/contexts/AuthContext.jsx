import { createContext, useContext, useReducer } from "react";
import {
  signup as signupApi,
  login as loginApi,
  logout as logoutApi,
} from "../services/apiAuth";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const initialState = {
  user: null,
  error: null,
  isLoading: false,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "SIGNUP_START":
      return { ...state, isLoading: true, error: null };
    case "SIGNUP_SUCCESS":
      return { ...state, isLoading: false, user: action.payload, error: null };
    case "SIGNUP_ERROR":
      return { ...state, isLoading: false, error: action.payload };
    case "LOGIN_START":
      return { ...state, isLoading: true, error: null };
    case "LOGIN_SUCCESS":
      return { ...state, isLoading: false, user: action.payload, error: null };
    case "LOGIN_ERROR":
      return { ...state, isLoading: false, error: action.payload };
    case "LOGOUT_START":
      return { ...state, isLoading: true, error: null };
    case "LOGOUT_SUCCESS":
      return { ...state, isLoading: false, user: null, error: null };
    case "LOGOUT_ERROR":
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [{ user, error, isLoading }, dispatch] = useReducer(
    authReducer,
    initialState
  );

  const navigate = useNavigate();

  const signup = async ({ email, password }) => {
    dispatch({ type: "SIGNUP_START" });
    try {
      const user = await signupApi({ email, password });
      dispatch({ type: "SIGNUP_SUCCESS", payload: user });
      navigate("/app", { replace: true });
    } catch (error) {
      dispatch({ type: "SIGNUP_ERROR", payload: error.message });
    }
  };

  const login = async ({ email, password }) => {
    dispatch({ type: "LOGIN_START" });
    try {
      const user = await loginApi({ email, password });
      dispatch({ type: "LOGIN_SUCCESS", payload: user });
      navigate("/app", { replace: true });
    } catch (error) {
      dispatch({ type: "LOGIN_ERROR", payload: error.message });
    }
  };

  const logout = async () => {
    dispatch({ type: "LOGOUT" });
    try {
      await logoutApi();
      dispatch({ type: "LOGOUT_SUCCESS" });
      navigate("/", { replace: true });
    } catch (error) {
      dispatch({ type: "LOGOUT_ERROR", payload: error.message });
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, error, isLoading, signup, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
