import { useState } from "react";
import styles from "../../styles/Main.module.scss";

const Selection = (props) => {
    const [computing, setComputing] = useState(false);

    async function handleSetId(e, id) {
        setComputing(true);
        props.setTried(false);
        await new Promise((resolve) => setTimeout(resolve, 3500));
        setComputing(false);
        props.setState(id);
        if (id === props.correctAnswer) props.sectionUpdate(props.section + 1);
        else props.setTried(true);
    }

    const mappedQuotes = props.set.map((s) => (
        <button
            key={s.id}
            className={
                s.id === props.state ? styles.selected : styles.unselected
            }
            onClick={(e) => handleSetId(e, s.id)}>
            {s.quote}
        </button>
    ));

    const answer = props.set
        .find((s) => s.id === props.answer)
        .map((s) => (
            <button className={styles.selected} disabled>
                {s.quote}
            </button>
        ));

    return (
        <div className={styles.selectionContainer}>
            {props.state === props.correctAnswer && { answer }}
            {computing === false && props.state !== props.correctAnswer && (
                <>
                    {mappedQuotes}
                    <p className={styles.helper}>
                        {"> "}Make a choice{" <"}
                    </p>
                </>
            )}
            {computing && (
                <p className={styles.loadingAnswer}>computing choice</p>
            )}
        </div>
    );
};

export default Selection;
