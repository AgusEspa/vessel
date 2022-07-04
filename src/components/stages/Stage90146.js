import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import useUpdateSection from "../../utils/useUpdateSection";
import useUpdateStage from "../../utils/useUpdateStage";
import styles from "../../styles/Main.module.scss";

const Stage90146 = () => {
    const { userAuth, setUserAuth } = useContext(AuthContext);
    const [updateSection] = useUpdateSection();
    const [updateStage] = useUpdateStage();
    const navigate = useNavigate();
    const [loadingSave, setLoadingSave] = useState(false);
    const [saveNotice, setSaveNotice] = useState(false);

    const stageId = 90146;

    const handleSectionUpdate = async (newSection, e) => {
        updateSection(newSection);
        await new Promise((resolve) => setTimeout(resolve, 200));
        setSaveNotice(true);
        await new Promise((resolve) => setTimeout(resolve, 3500));
        setSaveNotice(false);
    };

    const handleSave = async () => {
        setLoadingSave(true);
        await new Promise((resolve) => setTimeout(resolve, 3000));
        updateStage(90146);
        updateSection(1);
        navigate("/");
    };

    const handleSaveAndCont = async () => {
        setLoadingSave(true);
        await new Promise((resolve) => setTimeout(resolve, 3000));
        updateStage(90146);
        updateSection(1);
        const lastLink = `/stage/${userAuth.lastStage}`;
        navigate(lastLink);
    };

    return (
        <main className={styles.stageContainer}>
            {/* Section 1 */}
            <div className={styles.sectionBox}>
                <h1>PART I - The Construct</h1>
                <div className={styles.headIconBox}>
                    <img src="headset.png" alt="headset icon" />
                </div>
                <h2>1. Matter of Thought</h2>
                <p>
                    You have been woken up before, you have been lost before.
                    You would even expect a correlation between those states.
                    I’m afraid you won’t find any. {<br />}You are awake and you
                    are lost and I’m the only one that knows it’s not going to
                    change. Everything is independent at the beginning.
                </p>
                {userAuth.lastStage > stageId || userAuth.lastSection >= 2 ? (
                    <button className={styles.sectionButtonDisabled} disabled>
                        Where am I?
                    </button>
                ) : (
                    <button
                        onClick={(e) => handleSectionUpdate(2, e)}
                        className={styles.sectionButton}>
                        Where am I?
                    </button>
                )}
            </div>

            {/* Section 2 */}
            {(userAuth.lastStage > stageId || userAuth.lastSection >= 2) && (
                <div className={styles.sectionBox}>
                    <p>
                        There’s hardly any significance in that, if it can even
                        be determined.
                    </p>
                    <p></p>
                    <p></p>
                    <p>To be continued...</p>
                </div>
            )}

            {/* Save stage completion*/}
            {userAuth.lastStage === stageId && userAuth.lastSection >= 3 && (
                <div className={styles.sectionBox}>
                    <p className={styles.end}>End of the chapter</p>
                    <div className={styles.saveButtonsBox}>
                        {loadingSave ? (
                            <button className={styles.saveDisabled} disabled>
                                <div className={styles.loading}>
                                    <p>saving</p>
                                </div>
                            </button>
                        ) : (
                            <button onClick={handleSave}>Save</button>
                        )}
                        {!loadingSave && (
                            <button onClick={handleSaveAndCont}>
                                Save & continue
                            </button>
                        )}
                    </div>
                </div>
            )}

            {/* End of chapter icon*/}
            {userAuth.lastStage > stageId && (
                <div className={styles.sectionBox}>
                    <div className={styles.endChapterIconBox}>
                        <img src="headset-small.png" alt="headset icon" />
                    </div>
                </div>
            )}
        </main>
    );
};

export default Stage90146;
