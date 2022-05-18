import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function ProtectedStageRoute({ children }) {
	const { userAuth } = useContext(AuthContext);

	const isAuthenticated = userAuth.userAlias;

	return isAuthenticated && userAuth.lastStage >= children.props.id ? (
		children
	) : (
		<Navigate to="/" />
	);
}

export default ProtectedStageRoute;
