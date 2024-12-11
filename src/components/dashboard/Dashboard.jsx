import React, { useState } from 'react';
import Modal from './Modal';
import DataTable from './DataTable';
import StatsSection from './StatsSection';
import Button from '../ui/Button';
import { HelpCircle } from 'lucide-react';

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="dashboard">
      <header className="dashboard__header">
        <h1 className="dashboard__title">Dashboard Overview</h1>
        <Button
          variant="primary"
          onClick={() => setIsModalOpen(true)}
          className="dashboard__button"
        >
          <HelpCircle size={16} />
          <span>Instructions</span>
        </Button>
      </header>

      <StatsSection />
      
      <section className="dashboard__section">
        <h2 className="dashboard__title">User Data</h2>
        <DataTable />
      </section>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Dashboard Instructions"
      >
        <div className="space-y-4">
          <section>
            <h3 className="text-lg font-medium text-gray-900">
              Welcome to the Admin Dashboard
            </h3>
            <p className="mt-2 text-gray-600">
              This dashboard provides an overview of your key metrics and user data.
            </p>
          </section>

          <section>
            <h4 className="font-medium text-gray-900">Key Features:</h4>
            <ul className="mt-2 space-y-2 text-gray-600 list-disc list-inside">
              <li>View important statistics at a glance</li>
              <li>Sort user data by clicking on table headers</li>
              <li>Monitor user status and activities</li>
              <li>Responsive design for all devices</li>
            </ul>
          </section>

          <section>
            <h4 className="font-medium text-gray-900">Using the Table:</h4>
            <ul className="mt-2 space-y-2 text-gray-600 list-disc list-inside">
              <li>Click on column headers to sort the data</li>
              <li>Status indicators show active/inactive states</li>
              <li>Scroll horizontally on mobile devices to view all columns</li>
            </ul>
          </section>
        </div>
      </Modal>
    </div>
  );
};

export default Dashboard;