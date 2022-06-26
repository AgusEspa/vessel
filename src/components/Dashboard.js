import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "./Navbar";
import DeleteModal from "./DeleteModal";
import styles from "../styles/Main.module.scss";

const Dashboard = (props) => {
    const { userAuth } = useContext(AuthContext);

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const navigate = useNavigate();

    const handleDelete = (event) => {
        event.preventDefault();
        setModalIsOpen(true);
    };

    const handleContinue = (event) => {
        event.preventDefault();
        const lastLink = `/stage/${userAuth.lastStage}`;
        navigate(lastLink);
    };

    return (
        <>
            <Navbar userExists={true} song={"mystique-16608.mp3"} />

            <main className={styles.dashContainer}>
                <div className={styles.dashboardBox}>
                    <div className={styles.iconBox}>
                        <img src="headset.png" alt="headset icon" />
                    </div>
                    <h1 className={styles.alias}>{userAuth.userAlias},</h1>
                    <h1>you are still here...</h1>
                    <button
                        className={styles.contButton}
                        onClick={handleContinue}>
                        Continue the quest
                    </button>
                    <p>or choose a chapter</p>
                    <div className={styles.indexContainer}>
                        <button
                            className={styles.chapterButton}
                            onClick={() => navigate("/stage/90063")}>
                            <div className={styles.chapterIconBox}>
                                <img
                                    src="headset-small.png"
                                    alt="headset icon"
                                />
                            </div>
                            <h4>Prologue</h4>
                        </button>

                        <h3>PART I - The Construct</h3>
                        {userAuth.lastStage >= 90146 ? (
                            <button
                                className={styles.chapterButton}
                                onClick={() => navigate("/stage/90146")}>
                                <div className={styles.chapterIconBox}>
                                    <img
                                        src="headset-small.png"
                                        alt="headset icon"
                                    />
                                </div>
                                <h4>Matter of Thought</h4>
                            </button>
                        ) : (
                            <button
                                className={styles.chapterButtonDisabled}
                                onClick={() => navigate("/stage/90146")}
                                disabled>
                                <div className={styles.chapterIconBox}>
                                    <img
                                        src="headset-small.png"
                                        alt="headset icon"
                                    />
                                </div>
                                <h4>Matter of Thought</h4>
                            </button>
                        )}
                    </div>

                    <div className={styles.abandonBox}>
                        <button
                            type="button"
                            className={styles.deleteButton}
                            onClick={handleDelete}>
                            Abandon the quest
                        </button>
                        <p>and all your progress will be lost forever...</p>
                        {modalIsOpen && (
                            <DeleteModal setModalIsOpen={setModalIsOpen} />
                        )}
                    </div>
                </div>
            </main>

            <footer>
                <div className={styles.footerBox}>
                    <p>Agustin Espana &copy;2022 Stockholm, Sweden</p>
                </div>
            </footer>
        </>
    );
};

export default Dashboard;
