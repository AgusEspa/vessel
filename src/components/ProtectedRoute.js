import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function ProtectedRoute({ children }) {
	const { userAuth } = useContext(AuthContext);

	const isAuthenticated = userAuth.userAlias;

	return isAuthenticated ? children : <Navigate to="/land" />;
}

export default ProtectedRoute;
