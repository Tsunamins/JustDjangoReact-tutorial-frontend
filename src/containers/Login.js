import React from 'react';
import { Form, Input, Button, Spin } from 'antd';
import { LoadingOutlined, UserOutlined, LockOutlined} from '@ant-design/icons';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actions from '../store/actions/auth';


//const FormItem = Form.Item;

//code related to loading spinners:
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;





class NormalLoginForm extends React.Component {
    // handleSubmit = (e) => {
    //   e.preventDefault();
    //   this.props.form.validateFields((err, values) => {
    //     if (!err) {
    //       this.props.onAuth(values.userName, values.password);
    //       this.props.history.push('/');
    //     }
    //   });
    // }
  
    state = {
        username: "",
        password: ""
      }
    
      handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
      }
    
      handleSubmit = event => {
        event.preventDefault()
        
  
        this.props.onAuth(this.state.username, this.state.password)
        this.props.history.push("/")
        this.setState({
              username: "",
              password: ""
        })
      }
      
  
      render() {
       
      return (
        <div className="SignUp">
          <form onSubmit={this.handleSubmit}>
              <input className="form" type="text" name="username"  placeholder="username" value={this.state.username} onChange={this.handleChange}></input>
              <input className="form" type="password" name="password"  placeholder="password" value={this.state.password} onChange={this.handleChange}></input>
              <input className="button" type="submit" value="Log In"></input>
  
          </form>
            <div>Or <NavLink 
            style={{marginRight: '10px'}} 
            to='/signup/'> signup
            </NavLink></div>
        </div> 
           
      )
  }
  }

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username, password) => dispatch(actions.authLogin(username, password)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NormalLoginForm)