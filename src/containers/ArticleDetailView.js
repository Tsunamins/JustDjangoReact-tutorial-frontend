import React from 'react';
import { Card } from 'antd';
const axios = require('axios');



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

    render(){
        return(
            
            <Card title={this.state.article.title}>
                <p>{this.state.article.content}</p>

            </Card>
        )
    }
}

export default ArticleDetail