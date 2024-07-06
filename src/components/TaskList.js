import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, editTask } from "../features/tasks/tasksSlice";
import { ListGroup, Button } from "react-bootstrap";
import EditTask from "./EditTask";
import styles from "./TaskList.module.css"; // Import the module CSS

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [editModalVisible, setEditModalVisible] = React.useState(false);
  const [editedTask, setEditedTask] = React.useState(null);

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  const handleEditTask = (task) => {
    setEditedTask(task);
    setEditModalVisible(true);
  };

  const handleSaveEditedTask = (editedText) => {
    dispatch(editTask({ id: editedTask.id, text: editedText }));
    setEditModalVisible(false);
    setEditedTask(null);
  };

  return (
    <>
      <ListGroup className={styles.taskList}>
        {tasks.map((task) => (
          <ListGroup.Item
            key={task.id}
            className={`${styles.taskItem} d-flex justify-content-between align-items-center`}
          >
            <span className={styles.taskText}>{task.text}</span>
            <div>
              <Button
                variant="primary"
                size="sm"
                className={`${styles.editButton} mx-1` }
                onClick={() => handleEditTask(task)}
              >
                Edit
              </Button>
              <Button
                variant="danger"
                size="sm"
                className={styles.deleteButton}
                onClick={() => handleDeleteTask(task.id)}
              >
                Delete
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <EditTask
        show={editModalVisible}
        onHide={() => {
          setEditModalVisible(false);
          setEditedTask(null);
        }}
        task={editedTask}
        onSave={handleSaveEditedTask}
      />
    </>
  );
};

export default TaskList;
