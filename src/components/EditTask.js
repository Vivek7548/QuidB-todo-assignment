import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import styles from "./EditTask.module.css"; // Import the module CSS

const EditTask = ({ show, onHide, task, onSave }) => {
  const [editedText, setEditedText] = useState("");

  useEffect(() => {
    if (task) {
      setEditedText(task.text);
    }
  }, [task]);

  const handleSave = () => {
    onSave(editedText);
  };

  return (
    <Modal show={show} onHide={onHide} contentClassName={styles.modalContent}>
      <Modal.Header closeButton className={styles.modalHeader}>
        <Modal.Title className={styles.modalTitle}>Edit Task</Modal.Title>
      </Modal.Header>
      <Modal.Body className={styles.modalBody}>
        <Form.Group>
          <Form.Control
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            className={styles.inputField}
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer className={styles.modalFooter}>
        <Button
          variant="secondary"
          onClick={onHide}
          className={styles.cancelButton}
        >
          Cancel
        </Button>
        <Button
          variant="primary"
          onClick={handleSave}
          className={styles.saveButton}
        >
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditTask;
