"use client";

import React, { useState } from 'react';
import { FiHome, FiUsers, FiCheckCircle, FiEdit2, FiTrash2 } from 'react-icons/fi';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  

const sidebarItems = [
  { name: 'Home', icon: <FiHome size={20} /> },
  { name: 'Patients', icon: <FiUsers size={20} /> },
  { name: 'Approved', icon: <FiCheckCircle size={20} /> },
];

const HomePage = () => (
  <div>
    <h1 className="text-3xl font-bold mb-6">Welcome to the Dashboard</h1>
    <div className="bg-white rounded-xl shadow p-8 min-h-[300px]">
      <p className="text-gray-600">Select a section from the sidebar to get started.</p>
    </div>
  </div>
);

const PatientsPage = () => (
    <div>
      <h2 className="text-3xl font-bold mb-6">Patients</h2>
      <div className="bg-white rounded-xl shadow p-8 min-h-[300px]">
        <p className="text-gray-600">Here you can manage patient information.</p>
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[40px]">
                <input type="checkbox" />
              </TableHead>
              <TableHead className="w-[100px]">Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>County</TableHead>
              <TableHead className="text-center w-[120px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <input type="checkbox" />
              </TableCell>
              <TableCell className="font-medium">Aman</TableCell>
              <TableCell>Pending</TableCell>
              <TableCell>Starkville</TableCell>
              <TableCell className="flex justify-center gap-2">
                <button
                  className="p-2 rounded hover:bg-green-100 text-green-600"
                  title="Edit"
                >
                  <FiEdit2 size={16} />
                </button>
                <button
                  className="p-2 rounded hover:bg-red-100 text-red-600"
                  title="Delete"
                >
                  <FiTrash2 size={16} />
                </button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );

const ApprovedPage = () => (
  <div>
    <h3 className="text-3xl font-bold mb-6">Approved</h3>
    <div className="bg-white rounded-xl shadow p-8 min-h-[300px]">
      <p className="text-gray-600">View approved cases here.</p>
    </div>
  </div>
);

const pageComponents: { [key: string]: React.ReactNode } = {
  Home: <HomePage />,
  Patients: <PatientsPage />,
  Approved: <ApprovedPage />,
};

const Dashboard = () => {
  const [activePage, setActivePage] = useState('Home');

  return (
    <div className="flex min-h-screen bg-gray-100 container mx-auto rounded-lg">
      {/* Sidebar */}
      <aside className="w-64 bg-[#5d1725] border-r border-gray-200 flex flex-col py-8 px-4 shadow-sm rounded-lg">
        <div className="flex items-center gap-2 mb-10 px-2">
          <span className="text-xl font-bold text-white rounded">LongCovid</span>
        </div>
        <nav>
          <ul className="space-y-2">
            {sidebarItems.map(item => (
              <li
                key={item.name}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition
                  ${activePage === item.name
                    ? 'bg-white text-[#5d1725] font-semibold'
                    : 'text-white hover:bg-white hover:text-[#5d1725]'}`}
                onClick={() => setActivePage(item.name)}
              >
                <span>{item.icon}</span>
                <span className="font-medium">{item.name}</span>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-auto pt-10 px-2 text-xs text-white">
          &copy; {new Date().getFullYear()} LongCovid Dashboard
        </div>
      </aside>
      {/* Main Content */}
      <main className="flex-1 p-10">
        {pageComponents[activePage]}
      </main>
    </div>
  );
};

export default Dashboard;