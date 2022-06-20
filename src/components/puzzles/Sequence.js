import { useState } from "react";
import styles from "../../styles/Main.module.scss";

const Sequence = (props) => {
    const [computing, setComputing] = useState(false);
    const [formData, setFormData] = useState("");

    const mappedSet = props.set.map((item) => (
        <div
            className={
                props.state === props.correctAnswer
                    ? styles.sequenceBoxCorrect
                    : styles.sequenceBox
            }
            key={item.id}>
            {item.value}
        </div>
    ));

    const handleSubmit = async () => {
        setComputing(true);
        props.setTried(false);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setComputing(false);
        if (formData === props.correctAnswer) {
            props.setState(formData);
            props.sectionUpdate(props.section + 1);
        } else props.setTried(true);
        setFormData("");
    };

    const handleFormData = (event) => {
        event.preventDefault();
        setFormData(event.target.value);
    };

    return (
        <div className={styles.sequenceContainer}>
            <div className={styles.sequenceBoxContainer}>
                {mappedSet}
                <div
                    className={
                        props.state === props.correctAnswer
                            ? styles.sequenceBoxCorrect
                            : styles.sequenceBox
                    }>
                    {props.state}
                </div>
            </div>
            {props.state !== props.correctAnswer && (
                <>
                    <form>
                        <input
                            type="text"
                            name="formData"
                            placeholder="your answer"
                            value={formData}
                            onChange={handleFormData}
                            required
                        />
                    </form>
                    <p className={styles.helper}>
                        {"> "}Complete the sequence{" <"}
                    </p>
                    {computing ? (
                        <button disabled>computing answer...</button>
                    ) : (
                        <button
                            onClick={
                                props.state === props.correctAnswer
                                    ? null
                                    : handleSubmit
                            }>
                            Submit
                        </button>
                    )}
                </>
            )}
        </div>
    );
};

export default Sequence;
