import React from 'react';
import Articles from '../components/Article'

const axios = require('axios');

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'https://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

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