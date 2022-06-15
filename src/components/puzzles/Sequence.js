import { useState } from "react";
import styles from "../../styles/Main.module.scss";

const Sequence = () => {
    const [computing, setComputing] = useState(false);
    return (
        <div className={styles.selectionContainer}>
            <p className={styles.helper}>
                {"> "}Complete the sequence{" <"}
            </p>
            {computing && <p className={styles.helper}>computing choice...</p>}
        </div>
    );
};

export default Sequence;
