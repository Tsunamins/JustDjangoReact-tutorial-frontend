import React from 'react';
import axios from 'axios';
//const axios = require('axios');
class CustomForm extends React.Component {

    state = {
        title: "",
        content: "",      
    }

    handleChange = event => {
        console.log(event.target.value)
        this.setState({
          [event.target.name]: event.target.value
        });
        console.log(this.state)
      }

    handleFormSubmit = (event, requestType, articleID) => {
        event.preventDefault()
        console.log(this.state)
        console.log(this.props)
        requestType = this.props.requestType
        articleID = this.props.articleID

        switch( requestType ) {
            case 'post':
                axios.post('http://127.0.0.1:8000/api/create/', {
                    title: this.state.title,
                    content: this.state.content
                })
                .then(resp => console.log(resp))
                .catch(err => console.log(err));
                break
            case 'put':
                axios.put(`http://127.0.0.1:8000/api/${articleID}/update/`, {
                    title: this.state.title,
                    content: this.state.content
                })
                .then(resp => console.log(resp))
                .catch(err => console.log(err));
                break
            default:
                console.log("No Request Type Given")

            //fetch version:
            // case 'post':
            //     fetch('http://127.0.0.1:8000/api/create/', {
            //         method:"POST",
            //         headers: {
            //             "Content-Type": "application/json"
            //         },
            //         body: JSON.stringify(this.state)
                    
            //     })
            //     .then(resp => resp.json())
            //     .then(data => console.log(data))
            //     break
            // case 'put':
            //     fetch(`http://127.0.0.1:8000/api/${articleID}/update/`, {
            //         method:"PATCH",
            //         headers: {
            //             "Content-Type": "application/json"
            //         },
            //         body: JSON.stringify(this.state)
            //     })
            //     .then(resp => resp.json())
            //     .then(data => console.log(data))
                
            //     break
            // default:
            //     console.log("No Request Type Given")

        }
    }



    render(){
    return (
        <div>
            <form onSubmit={this.handleFormSubmit}>
                <input name="title" type='text' placeholder="Put a Title here" value={this.state.title} onChange={this.handleChange}></input>
                <input name="content" type='text' placeholder="Enter content..." value={this.state.content} onChange={this.handleChange}></input>
                <input className="button" type="submit"></input>

            </form>
   
        </div>
    );
        
    };
}


export default CustomForm
