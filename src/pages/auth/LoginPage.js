import React from "react";
import "../../assets/css/login.css"
import { Link } from 'react-router-dom';
import authLayout from "../../hoc/authLayout";
import {checkAdminLogin} from './checkAdminLogin'
class LoginPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {};
    }

   

    render(){
        const checkAdminLogin = (e) =>{
                // e.preventDefault();
                let admin = {
                    userName : 'admin@gmail.com',
                    password : 'admin'
                }
                const userName = document.querySelector('.valueEmail').value
                const password = document.querySelector('.valuePassword').value
                
                
                if (admin.userName != userName || admin.password != password){
                    alert('Sai tên đăng nhập hoặc mật khẩu')
                    e.preventDefault();
                }
            }
        
        return <>
        {/* <Link to="/typography">home</Link> */}

            <form className="login-form">
                <div className="d-flex align-items-center my-4">
                    <h1 className="text-center fw-normal mb-0 me-3">Sign In</h1>
                </div>
                {/* <!-- Email input --> */}
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example3">Email address</label>
                    <input type="email" id="form3Example3" className="valueEmail form-control form-control-lg"
                    placeholder="Enter a valid email address" name="email" />
                </div>

                {/* <!-- Password input --> */}
                <div className="form-outline mb-3">
                    <label className="form-label" htmlFor="form3Example4">Password</label>
                    <input type="password" id="form3Example4" className="valuePassword form-control form-control-lg"
                    placeholder="Enter password" name="password" />
                </div>

                <div className="d-flex justify-content-between align-items-center">
                    {/* <!-- Checkbox --> */}
                    <div className="form-check mb-0">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                    <label className="form-check-label" htmlFor="form2Example3">
                        Remember me
                    </label>
                    </div>
                    <Link to="/reset-password" className="text-body">Forgot password?</Link>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                    {/* <button className="btn btn-primary btn-lg">Login</button> */}
                    
                     <Link onClick={checkAdminLogin} className="btn btn-primary btn-lg" to="/">Login</Link>
                   
                </div>
            </form>
        </>
    }
}

export default authLayout(LoginPage);