import React, { useEffect, useState } from 'react';

const CrudOperation = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <>
      <div className="container mt-5">
        <h1>This is CRUD</h1>
        <table className="table table-striped mt-3">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <div className="dropdown">
                    <button 
                      className="btn btn-secondary dropdown-toggle" 
                      type="button" 
                      id={`dropdownMenuButton${user.id}`} 
                      data-bs-toggle="dropdown" 
                      aria-expanded="false"
                    >
                      Actions
                    </button>
                    <ul className="dropdown-menu" aria-labelledby={`dropdownMenuButton${user.id}`}>
                      <li>
                        <button className="dropdown-item" type="button">Update</button>
                      </li>
                      <li>
                        <button className="dropdown-item" type="button">Delete</button>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CrudOperation;
