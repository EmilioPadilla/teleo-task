import React from 'react';
import Table from '../table/Table';
import './Dashboard.css'; // Import your CSS file for styling
import useSWR from 'swr'
import {ClientService} from '../../services/ClientsService'

const Dashboard = () => {
  // This should be retrieved by the main therapist page when clicking on the client.
  const client = 'TimothyTester';
  const { Client } = useSWR('programs', () => ClientService.getClients(client))
  console.log(Client);
  return (
    <div className="dashboard">
      <h2>Dasboard</h2>
      <Table />
    </div>
  );
};

export default Dashboard;
