import React, {Component} from 'react';
import logo from './logo.svg';
import 'primereact/resources/themes/nova-colored/theme.css';
import 'primereact/resources/primereact.css';
import {InputText} from 'primereact/inputtext';
import { Button } from 'primereact/button';
import './Login.css';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      value2: '',
      value3: ''
    };
    console.log(this)
  }
  go = () => {
    //alert('Fire')
    this.props.push('/in/home')
  }
  render(){
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <span className="p-float-label">
                <InputText
                  id="in"
                  className="log-input"
                  value={this.state.value}
                  onChange={ 
                    (e) => 
                      this.setState({value: e.target.value})
                  }
                />
                <label htmlFor="in" className="input-label">Username</label>
            </span>
            <br/>
            <span className="p-float-label">
                <InputText
                  id="in"
                  className="log-input"
                  value={this.state.value}
                  onChange={ 
                    (e) => 
                      this.setState({value: e.target.value})
                  }
                />
                <label htmlFor="in" className="input-label">Password</label>
            </span>
            <br/>
                <Button
                  label="Login"
                  className="p-button-raised logbutton"
                  onClick={ this.go }
                />
          </header>
        </div>
      );
  }
}

export default Login;