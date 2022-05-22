import { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
	const navigate = useNavigate();

	const [userAuth, setUserAuth] = useState({
		userAlias: window.localStorage.getItem("alias"),
		userIsConfirmed: window.localStorage.getItem("confirmed"),
		lastStage: window.localStorage.getItem("last_stage"),
	});

	const logout = () => {
		setUserAuth([]);
		window.localStorage.clear();
		navigate("/");
	};

	return (
		<AuthContext.Provider value={{ userAuth, setUserAuth, logout }}>
			{children}
		</AuthContext.Provider>
	);
};
