import React, { Component } from 'react';
import './Login.css'
class Login extends Component {
    render() {
        return (
            <div>
                <div className="mainLoginPage">
                    Log in
                    <div>
                        <label>Email</label>
                        <div>
                            <input />
                        </div>
                    </div>
                    <div>
                        <label>Password</label>
                        <div>
                            <input />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login