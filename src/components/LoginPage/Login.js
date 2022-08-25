import React, { Component } from 'react';
import './Login.css'
class Login extends Component {
    constructor() {
        super();
        this.state = {
            emailField: "",
            pwdField: "",
        }
    }
    handleEmailField = (e) => {
        this.setState({ emailField: e.target.value })
    }
    handlePwdField = (e) => {
        console.log(e);
        this.setState({ pwdField: e.target.value })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const email = this.state.emailField;
        const pwd = this.state.pwdField
        let objLoginCred = {
            email: email,
            pwd: pwd
        }
        console.log(email);
        console.log(pwd);
        // fetch(
        //     `${process.env.REACT_APP_server}/api/toDoLists/todoadd`,
        //     {
        //         headers: {
        //             "Content-Type": "application/json",
        //             Authorization: `Bearer ${loginToken}`,
        //         },
        //         method: "POST",
        //         body: JSON.stringify(objLoginCred),
        //     }
        // )
        //     .then((response) => {
        //console.log(response)
        //if(response.status===200){
        // redirect to home page
        //   }else{}
        //         return response.json();
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });

    }
    render() {
        return (
            <div className="mainLoginPage">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label> Email:</label><br />
                        <input type="text" className="emailField" onChange={this.handleEmailField} />
                    </div>
                    <div >
                        <label>PassWord:</label><br />
                        <input type="password" className="pwdField" onChange={this.handlePwdField} />
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}
export default Login