import React from 'react';

const SelectedUserPopup = ({ selectedUser, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4">Selected User</h2>
        <p>
          <span className="font-semibold">Username:</span> {selectedUser.userName}
        </p>
        <p>
          <span className="font-semibold">Email:</span> {selectedUser.email}
        </p>
        <div className="flex space-x-4">
          <button
            onClick={onClose}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4"
          >
            Close
          </button>
          <button
            onClick={() => alert(`Generating report for ${selectedUser.userName}`)}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mt-4"
          >
            Generate Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectedUserPopup;