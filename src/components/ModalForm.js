import React, { useState } from 'react';

const ModalForm = ({ onClose, onSave, user }) => {
  const [name, setName] = useState(user ? user.name : '');
  const [email, setEmail] = useState(user ? user.email : '');
  const [age, setAge] = useState(user ? user.age : '');

  const handleSave = () => {
    const newUser = {
      id: user ? user.id : null,
      name,
      email,
      age
    };

    onSave(newUser);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{user ? 'Sửa người dùng' : 'Thêm người dùng'}</h2>
        <div className="form-group">
          <label>Tên:</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Tuổi:</label>
          <input type="number" value={age} onChange={e => setAge(e.target.value)} />
        </div>
        <div className="modal-buttons">
          <button className="btn btn-primary" onClick={handleSave}>{user ? 'Lưu' : 'Thêm'}</button>
          <button className="btn btn-secondary" onClick={onClose}>Đóng</button>
        </div>
      </div>
    </div>
  );
};

export default ModalForm;
