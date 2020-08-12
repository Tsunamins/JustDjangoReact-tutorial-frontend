import React from 'react';
import { Card } from 'antd';
import CustomForm from '../components/Form'

import axios from 'axios';



class ArticleDetail extends React.Component {

    state = {
        article: {},

    }

    // called everytime component mounted
    componentDidMount(){
        const articleID = this.props.match.params.articleID;

        axios.get(`http://127.0.0.1:8000/api/${articleID}`)
        .then(resp => {
            this.setState({
                article: resp.data
            });
            console.log(resp.data);
        } )

        // fetch equivalent, would need to add in setState:
        // fetch('http://127.0.0.1:8000/api/')
        // .then(resp => resp.json())
        // .then(data => console.log(data))
    }

    handleDelete = event => {
        event.preventDefault();
        const articleID = this.props.match.params.articleID;
        // axios.defaults.headers = {
        //   "Content-Type": "application/json",
        //   Authorization: `Token ${this.props.token}`
        // };

        axios.delete(`http://127.0.0.1:8000/api/${articleID}/delete/`)
        .then(res => {
          if (res.status === 204) {
            this.props.history.push(`/`);

            //fetch version:
        //  fetch(`http://127.0.0.1:8000/api/${articleID}/delete/`, {
        //      method: "DELETE"          
        //  })
         }
         
          
        })
      };

    render(){
        return(
           <div> 
                <Card title={this.state.article.title}>
                    <p>{this.state.article.content}</p>
                </Card>
                <CustomForm {...this.props}
                           
                            requestType="put"
                            articleID={this.props.match.params.articleID}
                            btnText="Update"/>

                 <form onSubmit={this.handleDelete}>
                    <label>Delete this article </label>
                    <input type="submit" value="Delete"></input>
                 </form>
            </div>
        )
    }
}

export default ArticleDetail