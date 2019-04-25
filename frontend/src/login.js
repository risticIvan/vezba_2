import React from 'react';
import axios from 'axios';

class Login extends React.Component {
    constructor () {
        super();
        this.state = {
          username: '',
          password: ''
        }
      }
    postData () {
        var data = {
            username: this.state.username,
            password: this.state.password,
        }
        
        axios.post('http://localhost:9000/login', data).then(res => {
            if (res.status === 200) {
                console.log('Uspesno');
                // res.redirect('http://localhost:3000/about/');
                window.location.replace("http://localhost:3000/success/");
            }
        }).catch((error)=> {
            if(error.response.status === 401 || error.response.status === 403) {
                window.location.replace("http://localhost:3000/error/");
            }
        });
    }

    handleChangeUsername(e) {
        this.setState({username: e.target.value});
    }

    handleChangePassword(e) {
        this.setState({password: e.target.value});
    }

    render () {
        return (
            <div>
                <br></br>
                <div style={{textAlign: "center"}}>
                  <label style={{fontSize: 30, color: "#b3b3cc"}}>Login form</label>
                </div>
                <br></br>
                <input style={{textAlign: "center"}} className="form-control" placeholder='Username' name='username' value={this.username} onChange={(e)=> this.handleChangeUsername(e)}></input>
                <br></br>
                <input style={{textAlign: "center"}} className="form-control" placeholder='Password' name='password' value={this.password} onChange={(e)=> this.handleChangePassword(e)}></input>
                <br></br>
                <div style={{textAlign: "center"}}>
                    <button onClick={(e) => this.postData(e)} className="btn btn-success btn-md">Submit</button>
                </div>
            </div>
        );
    }
}

export default Login