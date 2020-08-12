import React from 'react';
import Articles from '../components/Article'
import CustomForm from '../components/Form'

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
            <div>
                <Articles data={this.state.articles} />
                <br />
                <h2>Create an Article</h2>
                <CustomForm requestType="post" articleID={null} btnText="Create"/>
            </div>

        )
    }
}

export default ArticleList