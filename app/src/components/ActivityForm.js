import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const ActivityForm = ({ onAddActivity }) => {
  const [type, setType] = useState('Run');
  const [duration, setDuration] = useState('');
  const [distance, setDistance] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddActivity({ type, duration, distance, date: new Date().toISOString() });
    setType('Run');
    setDuration('');
    setDistance('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="type">
        <Form.Label>Activity Type</Form.Label>
        <Form.Control
          as="select"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option>Run</option>
          <option>Swim</option>
          <option>Cycle</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="duration">
        <Form.Label>Duration (minutes)</Form.Label>
        <Form.Control
          type="number"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="distance">
        <Form.Label>Distance (km)</Form.Label>
        <Form.Control
          type="number"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
        />
      </Form.Group>
      <Button variant="success" type="submit">
        Add Activity
      </Button>
    </Form>
  );
};

export default ActivityForm;
