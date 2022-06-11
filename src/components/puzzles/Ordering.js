import { useState } from "react";
import styles from "../../styles/Main.module.scss";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const Ordering = (props) => {
    const [itemList, setItemList] = useState(props.set);
    const [computing, setComputing] = useState(false);

    const mappedQuotes = itemList.map((i, index) => (
        <Draggable key={i.id} draggableId={i.id} index={index}>
            {(provided) => (
                <div
                    className={styles.draggableCard}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}>
                    <p>{i.quote}</p>
                </div>
            )}
        </Draggable>
    ));

    const orderedQuotes = props.setOrdered.map((i) => (
        <div key={i.id} className={styles.staticCard}>
            <p>{i.quote}</p>
        </div>
    ));

    // Function to update list on drop
    const handleDrop = (droppedItem) => {
        // Ignore drop outside droppable container
        if (!droppedItem.destination) return;
        var updatedList = [...itemList];
        // Remove dragged item
        const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1);
        // Add dropped item
        updatedList.splice(droppedItem.destination.index, 0, reorderedItem);
        // Update State
        setItemList(updatedList);
    };

    const handleSubmit = async () => {
        setComputing(true);
        await new Promise((resolve) => setTimeout(resolve, 2000));

        console.log(itemList);
        if (
            itemList[0].correctIndex === 1 &&
            itemList[1].correctIndex === 2 &&
            itemList[2].correctIndex === 3 &&
            itemList[3].correctIndex === 4
        ) {
            setComputing(false);
            props.setState(true);
            props.sectionUpdate(props.section + 1);
        } else {
            setComputing(false);
            props.setTried(true);
        }
    };

    return (
        <>
            {props.state === false ? (
                <DragDropContext onDragEnd={handleDrop}>
                    <Droppable droppableId="orderQuotes">
                        {(provided) => (
                            <div
                                className={styles.orderingContainer}
                                {...provided.droppableProps}
                                ref={provided.innerRef}>
                                {mappedQuotes}
                                {provided.placeholder}
                                <p className={styles.helper}>
                                    Order the argument
                                </p>
                                {computing ? (
                                    <button disabled>computing order...</button>
                                ) : (
                                    <button
                                        onClick={
                                            props.state === false
                                                ? handleSubmit
                                                : null
                                        }>
                                        Submit
                                    </button>
                                )}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            ) : (
                <div className={styles.orderingContainer}>{orderedQuotes}</div>
            )}
        </>
    );
};

export default Ordering;
