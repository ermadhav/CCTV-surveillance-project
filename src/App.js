import React from "react";
import Sidebar from "./components/Sidebar";
import LicensePlateRow from "./components/LicensePlateRow";
import Event from "./components/Event";
// import Card from "./components/Card";
import "./styles.css"; // Ensure this is imported

const App = () => (
  <div className="flex w-full min-h-screen bg-gray-100">
    <Sidebar />
    <div className="main p-6 w-full">
      <h1 className="text-3xl font-bold mb-6">Live Surveillance</h1>

      {/* Live Surveillance Cards - Match Recent Events Section */}
      <div className="surveillance-container">
        <div className="card">
          <h2>Active Cameras</h2>
          <p>24/24 Online</p>
          <button className="button">View All</button>
        </div>

        <div className="card">
          <h2>Active Alerts</h2>
          <p>3 High Priority</p>
          <button className="button">Review</button>
        </div>

        <div className="card">
          <h2>AI Detection</h2>
          <p>98% Accuracy</p>
          <button className="button">Details</button>
        </div>
      </div>

      <h2 className="text-2xl font-semibold recent-events-title">
        Recent Events
      </h2>

      <div className="flex justify-center space-x-24 w-full recent-container">
        <div className="w-48">
          <Event
            icon="fa-car"
            title="Unauthorized Vehicle Detected"
            description="Parking Lot B - 2 minutes ago"
          />
        </div>
        <div className="w-48">
          <Event
            icon="fa-clock"
            title="Motion Detected After Hours"
            description="Building entrance - 15 minutes ago"
          />
        </div>
        <div className="w-48">
          <Event
            icon="fa-user-check"
            title="Face Recognition Match"
            description="Main Gate - 30 minutes ago"
          />
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        License Plate Detection
      </h2>

      {/* License Plate Table - Full Width */}
      <table className="w-full bg-white rounded-lg shadow">
        <thead>
          <tr className="text-left border-b">
            <th className="p-4">License Plate</th>
            <th className="p-4">Make & Model</th>
            <th className="p-4">Color</th>
            <th className="p-4">Status</th>
            <th className="p-4">Gate</th>
            <th className="p-4"></th>
          </tr>
        </thead>
        <tbody>
          <LicensePlateRow
            plate="ABC123"
            model="Toyota Camry"
            color="Black"
            status="Authorized"
            gate="Gate A"
          />
          <LicensePlateRow
            plate="XYZ789"
            model="Honda Civic"
            color="White"
            status="Unauthorized"
            gate="Gate B"
          />
          <LicensePlateRow
            plate="DEF456"
            model="Ford F150"
            color="Red"
            status="Authorized"
            gate="Gate C"
          />
        </tbody>
      </table>
    </div>
  </div>
);

export default App;
