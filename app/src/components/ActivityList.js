import React from 'react';
import { Table } from 'react-bootstrap';

const ActivityList = ({ activities }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Deporte</th>
          <th>Duracion (min)</th>
          <th>Distancia (km)</th>
          <th>Dato</th>
        </tr>
      </thead>
      <tbody>
        {activities.map((activity, index) => (
          <tr key={index}>
            <td>{activity.type}</td>
            <td>{activity.duration}</td>
            <td>{activity.distance}</td>
            <td>{new Date(activity.date).toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ActivityList;
