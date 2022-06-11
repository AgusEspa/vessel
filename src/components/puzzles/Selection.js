import { useState } from "react";
import styles from "../../styles/Main.module.scss";

const Selection = (props) => {
    const [computing, setComputing] = useState(false);

    async function handleSetId(e, id) {
        setComputing(true);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setComputing(false);
        props.setState(id);
        if (id === 4 && props.section < 2) props.sectionUpdate(2);
    }

    const mappedQuotes = props.set.map((s) => (
        <button
            key={s.id}
            className={
                s.id === props.state ? styles.selected : styles.unselected
            }
            onClick={props.state === 4 ? null : (e) => handleSetId(e, s.id)}>
            {s.quote}
        </button>
    ));

    return (
        <div className={styles.selectionContainer}>
            {mappedQuotes}
            {computing === false && props.state !== 4 && (
                <p className={styles.helper}>Make a choice</p>
            )}
            {computing && <p className={styles.helper}>computing choice...</p>}
        </div>
    );
};

export default Selection;
