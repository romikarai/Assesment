import React from 'react';

const UsersTable = ({ users, onUserClick }) => {
  return (
    <div className="max-w-4xl mx-auto p-4 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">User Details</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr>
              <th className="p-2 border-b">User Name</th>
              <th className="p-2 border-b">Email</th>
              <th className="p-2 border-b">Phone</th>
              <th className="p-2 border-b">ID</th>
              <th className="p-2 border-b">Creation Date</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="transition-all hover:bg-gray-100 cursor-pointer"
                onClick={() => onUserClick(user)}
              >
                <td className="p-2 border-b">{user.userName}</td>
                <td className="p-2 border-b">{user.email}</td>
                <td className="p-2 border-b">{user.phone}</td>
                <td className="p-2 border-b">{user.id}</td>
                <td className="p-2 border-b">{user.creationDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersTable;