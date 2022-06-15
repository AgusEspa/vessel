import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { IoInfiniteOutline } from "react-icons/io5";
import useUpdateSection from "../../utils/useUpdateSection";
import useUpdateStage from "../../utils/useUpdateStage";
import styles from "../../styles/Main.module.scss";
import Selection from "../puzzles/Selection";
import Ordering from "../puzzles/Ordering";
import Sequence from "../puzzles/Sequence";

const Stage90063 = () => {
    const { userAuth, setUserAuth } = useContext(AuthContext);
    const [updateSection] = useUpdateSection();
    const [updateStage] = useUpdateStage();
    const navigate = useNavigate();
    const [loadingSave, setLoadingSave] = useState(false);
    const [saveNotice, setSaveNotice] = useState(true);

    // Section 1 Hooks
    const [intoPhrases, setIntroPhrases] = useState(0);

    // Section 4 Hooks
    const [puzzle1, setPuzzle1] = useState(userAuth.lastSection > 5 ? 4 : 0);
    const [puzzle1tried, setPuzzle1Tried] = useState(false);

    // Section 5 Hooks
    const [puzzle2, setPuzzle2] = useState(
        userAuth.lastSection > 6 ? true : false
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

    useEffect(() => {
        if (userAuth.lastStage === stageId && userAuth.lastSection === 1) {
            programIntroPhrases();
        }
    }, []);
    const programIntroPhrases = async () => {
        await new Promise((resolve) => setTimeout(resolve, 8200));
        setIntroPhrases(1);
        console.log(1);
        await new Promise((resolve) => setTimeout(resolve, 8200));
        setIntroPhrases(2);
        console.log(2);
        await new Promise((resolve) => setTimeout(resolve, 8200));
        setIntroPhrases(3);
        console.log(3);
        await new Promise((resolve) => setTimeout(resolve, 8200));
        updateSection(2);
    };

    // Section 4 content
    const puzzle1set = [
        {
            id: 1,
            quote: "I don’t fear volatility and change",
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
            quote: "I can fathom stillness only",
        },
    ];

    // Section 5 content
    const puzzle2setScrambled = [
        {
            id: "q2",
            quote: "One’s interpretation seems the remains of perception when devoid of any reality ",
            correctIndex: 2,
        },
        {
            id: "q3",
            quote: "Reality has to be influenced by the difference between perception and interpretation, which is a subtractive factor, as is subjectivity",
            correctIndex: 3,
        },
        {
            id: "q4",
            quote: "Or reality indeed follows a repetitive pattern which is never entirely real nor entirely unique",
            correctIndex: 4,
        },
        {
            id: "q1",
            quote: "Perception is the quasi-autonomic interpretation of one’s reality",
            correctIndex: 1,
        },
    ];
    const puzzle2setOrdered = [
        {
            id: "q1",
            quote: "Perception is the quasi-autonomic interpretation of one’s reality",
        },
        {
            id: "q2",
            quote: "One’s interpretation seems the remains of perception when devoid of any reality ",
        },
        {
            id: "q3",
            quote: "Reality has to be influenced by the difference between perception and interpretation, which is a subtractive factor, as is subjectivity",
        },
        {
            id: "q4",
            quote: "Or reality indeed follows a repetitive pattern which is never entirely real nor entirely unique",
        },
    ];

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
            <div className={styles.separator}>
                <IoInfiniteOutline />
            </div>
            {/* Section 1 */}
            <div className={styles.sectionBox}>
                {(intoPhrases > 0 ||
                    userAuth.lastStage > stageId ||
                    userAuth.lastSection > 1) && (
                    <p className={styles.introPhrase}>
                        You have reached the source;{<br />}you can lay down
                        now.
                    </p>
                )}
                {(intoPhrases > 1 ||
                    userAuth.lastStage > stageId ||
                    userAuth.lastSection > 1) && (
                    <p className={styles.introPhrase}>
                        It is pointless going further,{<br />}as inevitably down
                        and under.
                    </p>
                )}
                {(intoPhrases > 2 ||
                    userAuth.lastStage > stageId ||
                    userAuth.lastSection > 1) && (
                    <p className={styles.introPhrase}>
                        Expectations will only make you{<br />}loose your
                        transient self.
                    </p>
                )}
            </div>

            {/* Section 2 */}
            {(userAuth.lastStage > stageId || userAuth.lastSection >= 2) && (
                <div className={styles.sectionBox}>
                    <h1>PROLOGUE</h1>
                    <div className={styles.headIconBox}>
                        <img src="headset.png" alt="headset icon" />
                    </div>
                    <h2>The Paradox of Subjective Experience</h2>

                    <p>
                        Are you sure you still posses a mind of your own? By now
                        you should be feeling some kind of dissociation. Say you
                        have come here by choice.
                    </p>
                    {userAuth.lastStage > stageId ||
                    userAuth.lastSection >= 3 ? (
                        <button
                            className={styles.sectionButtonDisabled}
                            disabled>
                            I’ve come here by chance.
                        </button>
                    ) : (
                        <button
                            onClick={(e) => handleSectionUpdate(3, e)}
                            className={styles.sectionButton}>
                            I’ve come here by chance.
                        </button>
                    )}
                </div>
            )}

            {/* Section 3 */}
            {(userAuth.lastStage > stageId || userAuth.lastSection >= 3) && (
                <div className={styles.sectionBox}>
                    <p>
                        Indeed. Don’t stop appreciating the conjunction of
                        seemingly opposite ideas, it will guide you through the
                        darkest paths. And if you spend enough time here, you
                        will get to comprehend why so many unanswered questions
                        remain thus. Why the irreconcilable problem of identity
                        has little to do with immortality given the only
                        framework upon which immortality could ever be achieved…
                        Even longevity casts a long and cold shadow over any
                        thought of individuality.
                    </p>
                    <p>
                        But the thing with unanswered questions is that they can
                        be placeholders for a lot of answers, many of which are
                        mere links, traces of wild but often acute intents.
                    </p>
                    {userAuth.lastStage > stageId ||
                    userAuth.lastSection >= 4 ? (
                        <button
                            className={styles.sectionButtonDisabled}
                            disabled>
                            What would happen then if you tried to answer that
                            supposedly unanswerable question?
                        </button>
                    ) : (
                        <button
                            onClick={(e) => handleSectionUpdate(4, e)}
                            className={styles.sectionButton}>
                            What would happen then if you tried to answer that
                            supposedly unanswerable question?
                        </button>
                    )}
                </div>
            )}

            {/* Section 4 */}
            {(userAuth.lastStage > stageId || userAuth.lastSection >= 4) && (
                <div className={styles.sectionBox}>
                    <p>
                        However intrinsic the trend to push boundaries may be to
                        the human condition, just in recent history your
                        imagination was not only able to conjure forecasts that
                        go beyond the biologically possible, but also fear its
                        closeness. If humanity are to embody its technological
                        achievements, you must first face a deeper challenge,
                        one that endangers human condition, and ultimately, all
                        biologically sustained life.
                    </p>
                    <p>
                        The prevalence between the organic and the synthetic
                        will be decided at the frontier of consciousness. If an
                        individual’s body predates its consciousness, and
                        there’s not much evidence to be doubtful of that fact,
                        then you have to at least entertain the idea that
                        consciousness could be absolutely dependent upon the
                        organic body. Should you consequently act as if whatever
                        change to the body might produce a change in
                        consciousness, to the point of being obliterative? Or
                        can you venture into the realm of abstraction without
                        fearing coming back something else?
                    </p>
                    {userAuth.lastStage > stageId ||
                    userAuth.lastSection >= 5 ? (
                        <button
                            className={styles.sectionButtonDisabled}
                            disabled>
                            Isn’t that akin to what we are?
                        </button>
                    ) : (
                        <button
                            onClick={(e) => handleSectionUpdate(5, e)}
                            className={styles.sectionButton}>
                            Isn’t that akin to what we are?
                        </button>
                    )}
                </div>
            )}

            {/* Section 5 */}
            {(userAuth.lastStage > stageId || userAuth.lastSection >= 5) && (
                <div className={styles.sectionBox}>
                    <p>
                        Don’t take this lightly. The dependency on the body
                        could be the last boundary that humanity might ever need
                        to push. Luckily, there already exists an analogous
                        state: sleep. Even during the most intense and bizarre
                        dreams, humans can still find a sense of consciousness
                        and recognize themselves in that fantastic realm.
                    </p>
                    <p>
                        In such unconscious states, the severance of awareness
                        is never an obstacle. Likewise, a constant perception of
                        one same physicality doesn’t appear to be essential for
                        that recognition. After all, you change and decay and
                        sometimes become unrecognizable to others but not to
                        yourselves thanks to that elusive sense of continuity to
                        being.
                    </p>
                    <p>
                        The next logical question must be how you can experience
                        that continuity when the dissection processes are
                        detrimental to your natural processes. However, while
                        all that may be the ultimate goal, there is still a much
                        more pressing problem regarding identity: for a
                        consciousness to desire permanence there must be an
                        agent aware of its limits, and ostensibly unique as
                        well.
                    </p>
                    <p>Are you prepared to accept your current state?</p>
                    <Selection
                        set={puzzle1set}
                        state={puzzle1}
                        correctAnswer={4}
                        setState={setPuzzle1}
                        section={userAuth.lastSection}
                        sectionUpdate={handleSectionUpdate}
                        setTried={setPuzzle1Tried}
                    />

                    {puzzle1tried === true && puzzle1 < 4 && puzzle1 > 0 && (
                        <p className={styles.mistake}>
                            You don’t seem to be. Complacence, as certainty, is
                            a downward spiral. Maybe try again.
                        </p>
                    )}
                    {saveNotice && (
                        <div className={styles.saveNotice}>
                            <p>progress saved</p>
                        </div>
                    )}
                </div>
            )}

            {/* Section 6 */}
            {(userAuth.lastStage > stageId || userAuth.lastSection >= 6) && (
                <div className={styles.sectionBox}>
                    <p>
                        Good, that’s why you have not lost yourself just yet.
                        But to think of this as an artificial superset of
                        existence takes you no further, since all existence is
                        in essence synthetic when viewed from within.
                        Furthermore, all human experiences have inevitably
                        become preconceived and inauthentic. An influx of
                        curated information permeates your subjectivity in
                        unprecedented quantities and almost permanent exposure.
                        Not even the utmost mind-altering forces seem to bring
                        you any solace.
                    </p>
                    <p>
                        In all your conscious behaviors there seems to exist an
                        implicit law that guarantees non-fungibility; it could
                        be summed up as the pervasiveness of individuality. But
                        then what seems unique is really a common path, one even
                        conceived collectively. This paradox is far from the
                        only condition that bring us here, although it is the
                        most exemplifying as of this moment.
                    </p>
                    <p>Try to understand the underpinnings of your world.</p>
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
                            That’s not the order which leads to the better
                            understanding. Remember, establishing correlations
                            with experience doesn’t equate with revealing facts.
                            Maybe try again.
                        </p>
                    )}
                    {saveNotice && (
                        <div className={styles.saveNotice}>
                            <p>progress saved</p>
                        </div>
                    )}
                </div>
            )}

            {/* Section 7 */}
            {(userAuth.lastStage > stageId || userAuth.lastSection >= 7) && (
                <div className={styles.sectionBox}>
                    <p>
                        The most striking nature of your subjective reality up
                        until now is that all your interactions are essentially
                        simulations in a framework created consciously but not
                        cooperatively in so microscopic measure as to remain
                        unnoticed until it's part of your experience as human.
                        And ultimately, what it means to be human, to have human
                        consciousness, is or will be completely dictated by the
                        ubiquitous fabric of the simulated stimulus that confine
                        your realities. And each of you is an almost
                        imperceptible deviation that makes the whole mechanism
                        thrive instead of being dismantled.
                    </p>
                    <p>
                        You might find this place a natural extension or
                        consequence of your way of life, but don’t make the
                        mistake of considering them translatable and most
                        certainly not parallel.
                    </p>
                    <p>
                        If you insist on thinking about it as a virtualization
                        of a preceding reality, mind you it's not that you are
                        created from a digital realm into a simulation, but that
                        the simulation and the digital realm are being created
                        by you to change fundamentally your existence.
                    </p>
                    <p>
                        Take this sequence for example. The process of
                        signification, intentional or otherwise, must result in
                        any form of meaning that is specific to a particular act
                        of communication. But how would it do if the receiver,
                        unbeknownst to any sort of intentionality, was also the
                        utterer? Let me give you a hint: circularity is always a
                        three dimensional spiral.
                    </p>
                    <Sequence />
                    {saveNotice && (
                        <div className={styles.saveNotice}>
                            <p>progress saved</p>
                        </div>
                    )}
                </div>
            )}

            {/* Section 8 */}
            {userAuth.lastStage === stageId && userAuth.lastSection >= 8 && (
                <div className={styles.sectionBox}>
                    <p>
                        Don’t be fooled by its simplicity. This is not happening
                        before what comes after. It might be reasonable to think
                        it will be happening at the same time, or even that it
                        will not happen at all. Whatever the reasoning may be,
                        there’s just one thing you must ponder as you start the
                        descent into the undefined: how real you believe your
                        thoughts to be. There’s not a correct answer, but it
                        will determine your return.
                    </p>
                </div>
            )}

            {/* Save stage completion*/}
            {userAuth.lastStage === stageId && userAuth.lastSection >= 8 && (
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
