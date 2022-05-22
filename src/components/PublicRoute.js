import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function PublicRoute({ children }) {
	const { userAuth } = useContext(AuthContext);

	const isConfirmed = userAuth.userIsConfirmed;

	return isConfirmed ? <Navigate to="/" /> : children;
}

export default PublicRoute;
