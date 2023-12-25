import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle";
import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
const OnGoing = () => {

    // State to store tasks in different lists
    const [toDoTasks, setToDoTasks] = useState([]);
    const [ongoingTasks, setOngoingTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);



    // Function to handle the drag-and-drop logic
    const handleDragEnd = (result) => {
        const { source, destination } = result;

        // Check if the task was dropped outside of any droppable area
        if (!destination) {
            return;
        }

        // Determine the source and destination lists
        let sourceList, destinationList, updatedSourceList, updatedDestinationList;

        switch (source.droppableId) {
            case 'to-do':
                sourceList = toDoTasks;
                updatedSourceList = setToDoTasks;
                break;
            case 'ongoing':
                sourceList = ongoingTasks;
                updatedSourceList = setOngoingTasks;
                break;
            case 'completed':
                sourceList = completedTasks;
                updatedSourceList = setCompletedTasks;
                break;
            default:
                return;
        }

        switch (destination.droppableId) {
            case 'to-do':
                destinationList = toDoTasks;
                updatedDestinationList = setToDoTasks;
                break;
            case 'ongoing':
                destinationList = ongoingTasks;
                updatedDestinationList = setOngoingTasks;
                break;
            case 'completed':
                destinationList = completedTasks;
                updatedDestinationList = setCompletedTasks;
                break;
            default:
                return;
        }

        // Remove the task from the source list
        const removedTask = sourceList.splice(source.index, 1)[0];

        // Add the task to the destination list
        destinationList.splice(destination.index, 0, removedTask);

        // Update the state of both source and destination lists
        updatedSourceList([...sourceList]);
        updatedDestinationList([...destinationList]);
    };



    return (
        <div className="mt-20">
            <Helmet>
                <title> Management ||  OnGoing </title>
            </Helmet>
            <SectionTitle
                headings={'Ongoing to Completed'}
                subHeading={'On Going'}>
            </SectionTitle>
           

            {/* <DragDropContext onDragEnd={handleDragEnd}>
                <Droppable droppableId="to-do">
                    {(provided) => (
                        <div ref={provided.innerRef} {...provided.droppableProps}>
                            <h2>To-Do List</h2>
                            {toDoTasks.map((task, index) => (
                                <Draggable key={task.id} draggableId={task.id} index={index}>
                                    {(provided) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                        >
                                            {task.title}
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
                <Droppable droppableId="ongoing">
                </Droppable>
                <Droppable droppableId="completed">
                </Droppable>
            </DragDropContext> */}
        </div>
    );
};

export default OnGoing;