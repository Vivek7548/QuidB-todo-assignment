import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/tasksSlice";
import { Form, Button } from "react-bootstrap";

const TaskInput = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask({ text: task }));
      setTask("");
    }
  };

  return (
    <Form className="mb-3">
      <Form.Group controlId="taskInput">
        <Form.Control
          type="text"
          placeholder="Enter task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleAddTask();
            }
          }}
        />
      </Form.Group>
      <Button variant="primary"  onClick={handleAddTask} className="btn btn-primary  mt-2">
        Add Task
      </Button>
    </Form>
  );
};

export default TaskInput;
