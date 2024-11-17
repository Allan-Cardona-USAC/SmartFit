import React, { useState } from 'react';
import ActivityForm from '../components/ActivityForm';
import ActivityList from '../components/ActivityList';
import Statistics from '../components/Statistics';

const Dashboard = () => {
  const [activities, setActivities] = useState([]);

  const handleAddActivity = (activity) => {
    setActivities([...activities, activity]);
  };

  return (
    <div className="container mt-4">
      <h1>Fitness Tracker</h1>
      <ActivityForm onAddActivity={handleAddActivity} />
      <h2 className="mt-4">Activity History</h2>
      <ActivityList activities={activities} />
      <h2 className="mt-4">Statistics</h2>
      <Statistics activities={activities} />
    </div>
  );
};

export default Dashboard;
