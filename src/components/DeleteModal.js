import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import modalStyles from "../styles/Modals.module.scss";
import styles from "../styles/Main.module.scss";

const DeleteModal = (props) => {
	const { logout } = useContext(AuthContext);

	const handleCancelButton = () => {
		props.setModalIsOpen(false);
	};
	const handleDelete = (event) => {
		event.preventDefault();
		logout();
	};

	return (
		<>
			<div
				className={modalStyles.backdrop}
				onClick={() => props.setModalIsOpen(false)}
			/>
			<div className={modalStyles.modalContainer}>
				<div className={styles.deleteModalBox}>
					<div>
						<p>Are you sure?</p>
					</div>
					<div className={styles.buttonsContainer}>
						<button
							type="button"
							className={styles.confirmDeleteButton}
							onClick={handleDelete}
						>
							Yes
						</button>
						<button
							className={styles.cancelButton}
							type="button"
							onClick={handleCancelButton}
						>
							No
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default DeleteModal;
