import React, { useState } from 'react';
import adminLayout from "../hoc/adminLayout";
import ModalForm from "../components/ModalForm";

class TypographyPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id: 1,
          name: 'Lynk Lee',
          email: 'lynklee@abc.com',
          age: 18,
          createdOn: '22-06-2023',
          status: 'Online'
        },
        {
          id: 2,
          name: 'Nam Nung',
          email: 'nam.nung@abc.com',
          age: 22,
          createdOn: '22-06-2023',
          status: 'Online'
        },
        {
          id: 3,
          name: 'Hồ Quang Hiếu',
          email: 'hquang.hieu@abc.com',
          age: 26,
          createdOn: '22-06-2023',
          status: 'Offline'
        },
        {
          id: 4,
          name: 'Sơn Tùng MTP',
          email: 'mtp@abc.com',
          age: 30,
          createdOn: '22-06-2023',
          status: 'Offline'
        }
      ],
      isModalOpen: false,
      editUserId: null
    };
  }

  openModal = (editUserId) => {
    this.setState({ isModalOpen: true, editUserId });
  }

  closeModal = () => {
    this.setState({ isModalOpen: false, editUserId: null });
  }

  addUser = (user) => {
    const { users } = this.state;
    const newUser = {
      ...user,
      id: users.length + 1
    };

    this.setState(prevState => ({
      users: [...prevState.users, newUser],
      isModalOpen: false
    }));
  }

  editUser = (user) => {
    const { users } = this.state;
    const updatedUsers = users.map(u => (u.id === user.id ? user : u));

    this.setState({ users: updatedUsers, isModalOpen: false });
  }

  deleteUser = (userId) => {
    this.setState(prevState => ({
      users: prevState.users.filter(user => user.id !== userId)
    }));
  }

  render() {
    const { users, isModalOpen, editUserId } = this.state;

    return (
      <>
        <div className="table-container">
          <div className="row">
            <div className="col">
              <h5 className="pb-2 mb-0">QUẢN LÝ NGƯỜI DÙNG</h5>
            </div>
            <div className="col text-right">
              <button onClick={this.openModal} className="btn btn-default low-height-btn">
                <i className="fa fa-plus"></i>
              </button>
            </div>
          </div>

          <div className="d-flex text-muted">
            <table className="table">
              <thead>
                <tr>
                  <th>Tên</th>
                  <th>Email</th>
                  <th>Tuổi</th>
                  <th>Ngày tạo</th>
                  <th>Trạng thái</th>
                  <th>Hành động</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.age}</td>
                    <td>{user.createdOn}</td>
                    <td>{user.status}</td>
                    <td>
                      <div className="dropdown table-action-dropdown">
                        <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id={`dropdownMenuButtonSM-${user.id}`} data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                        </button>
                        <ul className="dropdown-menu" aria-labelledby={`dropdownMenuButtonSM-${user.id}`}>
                          <li>
                            <a className="dropdown-item" href="#" onClick={() => this.openModal(user.id)}>
                              <i className="fa fa-pencil" aria-hidden="true"></i>&nbsp;Sửa
                            </a>
                          </li>
                          <div className="dropdown-divider"></div>
                          <li>
                            <a className="dropdown-item text-danger" href="#" onClick={() => this.deleteUser(user.id)}>
                              <i className="fa fa-trash" aria-hidden="true"></i>&nbsp;Xoá
                            </a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <nav className="table-bottom-center-pagination" aria-label="Page navigation example">
          </nav>
        </div>

        {isModalOpen && (
          <ModalForm
            onClose={this.closeModal}
            onSave={editUserId ? this.editUser : this.addUser}
            user={editUserId ? users.find(user => user.id === editUserId) : null}
          />
        )}
      </>
    );
  }
}

export default adminLayout(TypographyPage);
