import { useState } from "react";
import styles from "../../styles/Main.module.scss";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const Ordering = (props) => {
    const [itemList, setItemList] = useState(props.set);

    const mappedQuotes = itemList.map((i) => (
        <Draggable key={i.id} draggableId={i.id} index={i.index}>
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

    return (
        <DragDropContext onDragEnd={handleDrop}>
            <Droppable droppableId="orderQuotes">
                {(provided) => (
                    <div
                        className={styles.orderingContainer}
                        {...provided.droppableProps}
                        ref={provided.innerRef}>
                        {mappedQuotes}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default Ordering;
