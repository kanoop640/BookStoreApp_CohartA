import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import { LoginRequestMethod } from '../Service/service'
import {TextField} from '@material-ui/core'
class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
      loginAuthentication: false,
      showError: false
    }
  }

  emailHandler = (event) => {
    const email = event.target.value;
    console.log("Email", email);
    this.setState({
      email: email,
    })
  }
  passwordHandler = (event) => {
    const password = event.target.value;
    console.log('Password', password)
    this.setState({
      password: password
    })
  }

  submitHandler = (event) => {
    event.preventDefault();
    var data = {
      Email: this.state.email,
      Password: this.state.password
    }
    sessionStorage.setItem("Email",this.state.email);
    const response = LoginRequestMethod(data);
    response.then(res => {
      console.log(res.data);
      if (res.data === true) {
        this.setState({
          loginAuthentication: true
        })
        this.props.history.push('/Dashboard');
      }
      else {
        alert("email or password is incorrect");
      this.setState({
        showError: true
      })
      }
    })
  }

  render() {

    return (
      <>
        <Typography variant='h5' id='welcome-text'>Welcome to Book Store</Typography>
        <form className=" container p-5 bg-light text-primary mx-auto" id='form' onSubmit={this.submitHandler} >
          <div className="form-group">
            <h1 className='display-3 text-dark'>Login</h1>
          </div>
          <div className="form-group">
            <TextField
                                id="outlined-basic"
                                label="email"
                                variant="standard"
                                type="email"
                                color="#000000"
                                onChange={this.emailHandler}
                            >
           {/* </TextField> <input type="text" id="email" className="form-control " onChange={this.emailHandler} /> */}
           </TextField>

          </div>
                            <TextField
                                id="outlined-basic"
                                label="Password"
                                variant="standard"
                                type="password"
                                onChange={this.passwordHandler}
                            >
                            </TextField>

          {/* <div className="form-group">
            <label for="password">Password :</label>
            <input type="password" id="password" className="form-control " onChange={this.passwordHandler} />
          </div> */}
          {
            this.state.showError ? <div className="form-group text-danger" id="error">Email or Password is incorrect </div> : null
          }

          <div className="form-group text-secondary">
            Don't have an account ? register
          </div>
          <button type="submit" className="btn btn-success" id="submitBtn" >Login</button>
          
        </form>
      </>
    )
  }
}
export default Login  