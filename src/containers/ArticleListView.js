import React from 'react';
import Articles from '../components/Article'

const axios = require('axios');



class ArticleList extends React.Component {

    state = {
        articles: [],

    }

    // called everytime component mounted
    componentDidMount(){

        axios.get('http://127.0.0.1:8000/api/')
        .then(resp => {
            this.setState({
                articles: resp.data
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
            <Articles data={this.state.articles} />

        )
    }
}

export default ArticleList