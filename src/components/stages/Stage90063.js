import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import useUpdateSection from "../../utils/useUpdateSection";
import useUpdateStage from "../../utils/useUpdateStage";
import styles from "../../styles/Main.module.scss";
import Selection from "../puzzles/Selection";
import Ordering from "../puzzles/Ordering";
const Stage90063 = () => {
    const { userAuth, setUserAuth } = useContext(AuthContext);
    const [updateSection] = useUpdateSection();
    const [updateStage] = useUpdateStage();
    const navigate = useNavigate();
    const [loadingSave, setLoadingSave] = useState(false);
    const [saveNotice, setSaveNotice] = useState(false);

    // Section 1 Hooks
    const [puzzle1, setPuzzle1] = useState(userAuth.lastSection > 1 ? 4 : 0);

    // Section 2 Hooks
    const [puzzle2, setPuzzle2] = useState(
        userAuth.lastSection > 2 ? true : false
    );
    const [puzzle2tried, setPuzzle2Tried] = useState(false);

    const stageId = 90063;

    useEffect(() => {
        setUserAuth((prevState) => ({
            ...prevState,
            userIsConfirmed: true,
        }));
        window.localStorage.setItem("confirmed", true);
    }, []);

    // Section 1 content
    const puzzle1set = [
        {
            id: 1,
            quote: "I can handle uncertainty and change",
        },
        {
            id: 2,
            quote: "I’m ready to expand awareness",
        },
        {
            id: 3,
            quote: "Uniqueness is a constituent of us all",
        },
        {
            id: 4,
            quote: "I can't be",
        },
    ];

    // Section 2 content
    const puzzle2setScrambled = [
        {
            id: "q1",
            quote: "Reality has to be influenced by the difference between perception and interpretation, which is a subtractive factor, as is subjectivity",
            correctIndex: 1,
        },
        {
            id: "q2",
            quote: "One’s interpretation seems the remains of perception when devoid of any reality ",
            correctIndex: 2,
        },
        {
            id: "q3",
            quote: "Or reality indeed follows a repetitive pattern which is never entirely real nor entirely unique",
            correctIndex: 3,
        },
        {
            id: "q4",
            quote: "Perception is the quasi-autonomic interpretation of one’s reality",
            correctIndex: 4,
        },
    ];
    const puzzle2setOrdered = [
        {
            id: "q1",
            quote: "Reality has to be influenced by the difference between perception and interpretation, which is a subtractive factor, as is subjectivity",
        },
        {
            id: "q2",
            quote: "One’s interpretation seems the remains of perception when devoid of any reality ",
        },
        {
            id: "q3",
            quote: "Or reality indeed follows a repetitive pattern which is never entirely real nor entirely unique",
        },
        {
            id: "q4",
            quote: "Perception is the quasi-autonomic interpretation of one’s reality",
        },
    ];

    const handleSectionUpdate = async (newSection, e) => {
        updateSection(newSection);
        setSaveNotice(true);
        await new Promise((resolve) => setTimeout(resolve, 2500));
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
            <div className={styles.sectionBox}>
                <h1>PROLOGUE</h1>
                <div className={styles.headIconBox}>
                    <img src="headset.png" alt="headset icon" />
                </div>
                <h2>The Paradox of Subjective Experience</h2>
            </div>

            {/* Section 1 */}
            <div className={styles.sectionBox}>
                <p>
                    However intrinsic the trend to push boundaries may be to the
                    human condition, only in recent history your imagination was
                    not only able to conjure forecasts that go beyond the
                    biologically possible, but also fear its closeness. If
                    humanity are to embody its technological achievements, you
                    must first face a deeper challenge, one that endangers human
                    condition, and ultimately, all biologically sustained life.
                </p>
                <p>
                    The prevalence between the organic and the synthetic will be
                    decided at the frontier of consciousness. If an individual’s
                    body predates its consciousness, and there’s not much
                    evidence to be doubtful of that fact, then you have to at
                    least entertain the idea that consciousness could be
                    absolutely dependent upon the organic body. Should you
                    consequently act as if whatever change to the body might
                    produce a change in consciousness, to the point of being
                    obliterative? Or can you venture into the realm of
                    abstraction without fearing coming back something else?
                </p>
                <p>
                    The dependency on the body could be the last boundary that
                    humanity might ever need to push. Luckily, there already
                    exists an analogous state: sleep. Even during the most
                    intense and bizarre dreams, humans can still find a sense of
                    consciousness and recognize themselves in that fantastic
                    realm.
                </p>
                <p>
                    In such unconscious states, the severance of awareness is
                    never an obstacle. Likewise, a constant perception of one
                    same physicality doesn’t appear to be essential for that
                    recognition. After all, you change and decay and sometimes
                    become unrecognizable to others but not to yourselves thanks
                    to that elusive sense of continuity to being.
                </p>
                <p>
                    The next logical question must be how you can experience
                    that continuity when the dissection processes are
                    detrimental to your natural processes. However, while all
                    that may be the ultimate goal, there is still a much more
                    pressing problem regarding identity: for a consciousness to
                    desire permanence there must be an agent aware of its
                    limits, and ostensively unique as well.
                </p>
                <p>Are you prepared to accept your current state?</p>
                <Selection
                    set={puzzle1set}
                    state={puzzle1}
                    correctAnswer={4}
                    setState={setPuzzle1}
                    section={userAuth.lastSection}
                    sectionUpdate={handleSectionUpdate}
                />

                {puzzle1 < 4 && puzzle1 > 0 && (
                    <p className={styles.mistake}>
                        You don’t seem to be. Complacence is a downward spiral.
                        Maybe try again.
                    </p>
                )}
            </div>

            {/* Section 2 */}
            {(userAuth.lastStage > stageId || userAuth.lastSection >= 2) && (
                <div className={styles.sectionBox}>
                    <p>Good.</p>
                    <p>
                        To think of this as an artificial superset of existence
                        takes you no further, since all existences are in
                        essence synthetic when viewed from within. Furthermore,
                        all human experiences have inevitably become
                        preconceived and inauthentic. An influx of curated
                        information permeates your subjectivity in unprecedented
                        quantities and almost permanent exposures. Not even the
                        utmost mind-altering forces seem to bring you any
                        solace.
                    </p>
                    <p>
                        In all your conscious behaviors there seems to exist an
                        implicit law that guarantees non-fungibility; it could
                        be summed up as the pervasiveness of individuality. But
                        then what seems unique is really a common path, one even
                        conceived collectively. This paradox is far from the
                        only condition that bring us here, but it is the most
                        illustrious as of this moment.
                    </p>
                    <Ordering
                        setOrdered={puzzle2setOrdered}
                        set={puzzle2setScrambled}
                        setState={setPuzzle2}
                        state={puzzle2}
                        section={userAuth.lastSection}
                        sectionUpdate={handleSectionUpdate}
                        setTried={setPuzzle2Tried}
                    />
                    {puzzle2tried && puzzle2 === false && (
                        <p className={styles.mistake}>
                            You don’t seem to be. Complacence is a downward
                            spiral. Maybe try again.
                        </p>
                    )}
                </div>
            )}

            {/* Section 3 */}
            {(userAuth.lastStage > stageId || userAuth.lastSection >= 3) && (
                <div className={styles.sectionBox}>
                    <p>The most striking nature of our subjective reality...</p>
                </div>
            )}

            {/* Save stage completion*/}
            {userAuth.lastStage === stageId && userAuth.lastSection >= 4 && (
                <div className={styles.sectionBox}>
                    <p className={styles.end}>End of the chapter</p>
                    <div className={styles.saveButtonsBox}>
                        {loadingSave ? (
                            <button className={styles.saveDisabled} disabled>
                                <div className={styles.loading}>
                                    <p>saving</p>
                                    <div className={styles.loadingDots}>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            </button>
                        ) : (
                            <button onClick={handleSave}>Save</button>
                        )}
                        {loadingSave ? (
                            <div></div>
                        ) : (
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

export default Stage90063;
