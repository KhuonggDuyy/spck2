import React from "react";
import adminLayout from "../hoc/adminLayout";
import ModalComponent from "../components/ModalComponent";
class TypographyPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {};
    }

    modalFooterContent(){ 
        return <>
            <div style={{width:"100%"}}>
                <button className="btn btn-default">Save</button> 
            </div>
        </>;
    }

    modalContent(){
        return <>
       
        </>;
    }

    render(){
        function addUser (){

        }

        return (
            <>
            <div className="table-container">
                <div className="row">
                    <div className="col">
                        <h5 className="pb-2 mb-0">DATA USER MANAGEMENT</h5>
                    </div>
                    <div className="col text-right">
                        <button onClick={addUser} className="btn btn-default low-height-btn">
                            <i className="fa fa-plus"></i>
                        </button>
                    </div>
                </div>
                <div></div>
                <p>
              ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                </p>
                <div className="d-flex text-muted">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Age</th>
                                <th>Created On</th>
                                <th>Status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Lynk Lee</td>
                                <td>Lynklee@abc.com</td>
                                <td>18</td>
                                <td>22-06-2023</td>
                                <td>Online</td>
                                <td>
                                    <div className="dropdown table-action-dropdown">
                                        <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButtonSM" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" aria-hidden="true"></i></button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButtonSM">
                                            <li><a className="dropdown-item" href="#"><i className="fa fa-pencil" aria-hidden="true"></i>&nbsp;Edit</a></li>
                                            <div className="dropdown-divider"></div>
                                            <li><a className="dropdown-item text-danger" href="#"><i className="fa fa-trash" aria-hidden="true"></i>&nbsp;Delete</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Nam Nung</td>
                                <td>nam.nung@abc.com</td>
                                <td>22</td>
                                <td>22-06-2023</td>
                                <td>Online</td>
                                <td>
                                    <div className="dropdown table-action-dropdown">
                                        <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButtonSM" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" aria-hidden="true"></i></button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButtonSM">
                                            <li><a className="dropdown-item" href="#"><i className="fa fa-pencil" aria-hidden="true"></i>&nbsp;Edit</a></li>
                                            <div className="dropdown-divider"></div>
                                            <li><a className="dropdown-item text-danger" href="#"><i className="fa fa-trash" aria-hidden="true"></i>&nbsp;Delete</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Hồ Quang Hiếu</td>
                                <td>hquang.hieu@abc.com</td>
                                <td>26</td>
                                <td>22-06-2023</td>
                                <td>Offline</td>
                                <td>
                                    <div className="dropdown table-action-dropdown">
                                        <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButtonSM" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" aria-hidden="true"></i></button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButtonSM">
                                            <li><a className="dropdown-item" href="#"><i className="fa fa-pencil" aria-hidden="true"></i>&nbsp;Edit</a></li>
                                            <div className="dropdown-divider"></div>
                                            <li><a className="dropdown-item text-danger" href="#"><i className="fa fa-trash" aria-hidden="true"></i>&nbsp;Delete</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Sơn Tùng MTP</td>
                                <td>mtp@abc.com</td>
                                <td>30</td>
                                <td>22-06-2023</td>
                                <td>Offline</td>
                                <td>
                                    <div className="dropdown table-action-dropdown">
                                        <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButtonSM" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" aria-hidden="true"></i></button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButtonSM">
                                            <li><a className="dropdown-item" href="#"><i className="fa fa-pencil" aria-hidden="true"></i>&nbsp;Edit</a></li>
                                            <div className="dropdown-divider"></div>
                                            <li><a className="dropdown-item text-danger" href="#"><i className="fa fa-trash" aria-hidden="true"></i>&nbsp;Delete</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <nav className="table-bottom-center-pagination" aria-label="Page navigation example ">
                 
                </nav>
            </div>
           
                
                        
                        
                        
        
                       
        
                        
        
                       
        
                           
        
                            
        
                           
            </>
          );
    }
}

export default adminLayout(TypographyPage);