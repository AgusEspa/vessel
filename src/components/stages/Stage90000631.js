import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";

const Stage90000631 = () => {
	const { setUserAuth } = useContext(AuthContext);

	useEffect(() => {
		setUserAuth((prevState) => ({
			...prevState,
			userIsConfirmed: true,
		}));
	}, []);

	return <div>Welcome Stage101</div>;
};

export default Stage90000631;
