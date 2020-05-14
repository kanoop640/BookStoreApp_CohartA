import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { Card, TextField, Button, Checkbox, Grid, Link } from '@material-ui/core'
import axios from 'axios';

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error:false,
            errorText: '',
        }
    }
    componentDidMount() {
        document.body.style.backgroundImage = `url('/static/media/img.e0ef5ef0.png')`;
        document.body.style.backgroundRepeat = 'no-repeat'
        document.body.style.backgroundSize = 'cover'
    }
    handleEmailChange = (event) => {
        const email = event.target.value;
        this.setState({
            email: email
        })
        console.log("email", this.state.email)
    }
    handlePasswordChange = (event) => {
        const email = event.target.value;
        this.setState({
            password: email
        })
        console.log("password", this.state.value)
    }

    handleLogin = () => {

        var data = {
            email: this.state.email,
            password:this.state.password
        };

        axios.post(``, { email: data.email, password: data.password})
            .then(res => {
                console.log(res);
                console.log(res.data);
                if(res.data===data.email)
                {
                this.setState({
                    loginAuthentication: true
                  })
                }
              this.props.history.push('/Dashboard');
        
              }).catch(()=>{
                  this.setState({
                      error:true, errorText:'Authenticiation failed.'
                  })
              })
    }
    render() {
        return (
            <div className="login_container">

                {
                    <Grid
                        container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justify="center"
                        style={{ minHeight: '100vh' }}
                    >
                        <Card className="loginCard"  >
                            <div >
                                <h2>Login</h2>
                            </div>
                            <TextField
                                id="outlined-basic"
                                label="email"
                                variant="standard"
                                type="email"
                                color="#000000"
                                onChange={this.handleEmailChange}
                            >
                            </TextField>
                            <TextField
                                id="outlined-basic"
                                label="Password"
                                variant="standard"
                                type="password"
                                onChange={this.handlePasswordChange}
                            >
                            </TextField>
                            <p className="errorTextStyle">
                                {this.state.errorText}
                            </p>
                            <Grid className="login-bton">
                                <Button id="Btn" variant="contained" color="Primary" onClick={() => { this.handleLogin() }}>login</Button>
                            </Grid>
                            <Grid className="sign-up">
                                Don't have an account  <a href="/Registration"><span className="signup-color"> Sign Up</span></a>
                            </Grid>
                        </Card>
                    </Grid>
                }
            </div>
        )
    }
}

const styles = {
    errorTextStyle : {
        alignItems : 'center',
        color: 'red',
    }
}
export default withRouter(Login)