import React, { useEffect, useState } from 'react';
import adminLayout from "../hoc/adminLayout"
import { Table } from 'reactstrap';

import axios from 'axios';

function TypographyPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://64917a7f2f2c7ee6c2c84970.mockapi.io/User');
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditUser = async (userId) => {
    const newUsername = prompt('Nhập tên đăng nhập mới:');
    if (newUsername) {
      try {
        await axios.put(`https://64917a7f2f2c7ee6c2c84970.mockapi.io/User/${userId}`, { userName: newUsername });
        fetchUsers();
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(`https://64917a7f2f2c7ee6c2c84970.mockapi.io/User/${userId}`);
      fetchUsers();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    
    
<Table >
<thead>
        <tr>
          <th>Tên đăng nhập</th>
          <th>Email</th>
          <th>Thao tác</th>
        </tr>
      </thead>
  <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.userName}</td>
            <td>{user.email}</td>
            <td>
              <button style={{
                marginRight:'5px',
                border: 'none',
                borderRadius: '5px'
              }} onClick={() => handleEditUser(user.id)}>Sửa</button>
              <button style={{
                marginRight:'5px',
                border: 'none',
                borderRadius: '5px'
              }}
               onClick={() => handleDeleteUser(user.id)}>Xóa</button>
            </td>
          </tr>
        ))}
      </tbody>
</Table>

      
  );
}

// export default TypographyPage;
export default adminLayout(TypographyPage);

