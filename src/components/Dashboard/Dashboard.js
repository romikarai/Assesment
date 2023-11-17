import React, { useState, useEffect } from 'react';
import UsersTable from '../Users/UserTable';
import AccountForm from '../AccountCreation/AccountCreation';
import SelectedUserPopup from '../Users/SelectedUserPopup';

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isPopupOpen, setPopupOpen] = useState(false);

  useEffect(() => {
    // Fetch user data from a placeholder database (in this case, a JSON file)
    fetch('/Data/userDetails.json')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.userDetails);
        setFilteredUsers(data.userDetails);
      })
      .catch((error) => console.error('Error fetching user data:', error));
  }, []);

  const handleUserClick = (user) => {
    setSelectedUser(user);
    setPopupOpen(true);
  };

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    const filteredUsers = users.filter((user) =>
      user.userName.toLowerCase().includes(searchTerm)
    );

    setFilteredUsers(filteredUsers);
  };

  const closePopup = () => {
    setSelectedUser(null);
    setPopupOpen(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">User Management Dashboard</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by username"
          value={searchTerm}
          onChange={handleSearch}
          className="px-4 py-2 border rounded"
        />
        <button
          onClick={() => {
            setSearchTerm('');
            setFilteredUsers(users);
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ml-2"
        >
          Clear Search
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-bold mb-2">User List</h2>
          <UsersTable users={filteredUsers} onUserClick={handleUserClick} />
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">Account Creation</h2>
          <AccountForm />
        </div>
      </div>
          {isPopupOpen && selectedUser && (
        <SelectedUserPopup selectedUser={selectedUser} onClose={closePopup} />
      )}
    </div>
  );
};

export default Dashboard;