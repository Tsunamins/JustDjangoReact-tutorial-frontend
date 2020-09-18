import React from 'react';
import { Form, Input, Button } from 'antd';
import { LoadingOutlined, UserOutlined, LockOutlined, MailOutlined} from '@ant-design/icons';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actions from '../store/actions/auth';



class RegistrationForm extends React.Component {

//   handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('handle submit triggered')
//     this.props.form.validateFieldsAndScroll((err, values) => {
//       if (!err) {
//         this.props.onAuth(
//             values.username,
//             values.email,
//             values.password,
//             values.confirm
//         );
//         this.props.history.push('/');
//         this.setState({
//             username: "",
//             email: "",  
//             password: "",
//             confirm: "",
                
//           })
//       }
//     });
//   }

  state = {
    username: "",
    email: "",  
    password: "",
    confirm: "",
  
}

handleChange = event => {
  this.setState({
    [event.target.name]: event.target.value
  });
}

handleSubmit = event => {
  event.preventDefault()
  console.log(this.state)

  this.props.onAuth(
      this.state.username,
      this.state.email,
      this.state.password,
      this.state.confirm)
  this.props.history.push("/")
  this.setState({
    username: "",
    email: "",  
    password: "",
    confirm: "",
        
  })
}

render() {
    
return (
  <div className="SignUp">
    <form onSubmit={this.handleSubmit}>
        <input className="form" type="text" name="username"  placeholder="username" value={this.state.username} onChange={this.handleChange}></input>
        <input className="form" type="text" name="email"  placeholder="email" value={this.state.email} onChange={this.handleChange}></input>
        <br></br>
        <input className="form" type="password" name="password"  placeholder="password" value={this.state.password} onChange={this.handleChange}></input>
        <input className="form" type="password" name="confirm"  placeholder="confirm" value={this.state.confirm} onChange={this.handleChange}></input>
        <br></br>
        <input className="button" type="submit" value="Sign Up"></input>

    </form>
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
        onAuth: (username, email, password1, password2) => dispatch(actions.authSignup(username, email, password1, password2)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);