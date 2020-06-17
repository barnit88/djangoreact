import React from 'react';


import { Card, Button } from 'antd';

import axios from 'axios';
import CustomForm from '../components/Form';


class ArticleDetail extends React.Component {

    state = {
        article : {}
    }

    componentDidMount() {
        const ID = this.props.match.params.articleID; //getting id form url 
        axios.get(`http://127.0.0.1:8000/api/${ID}`) //passing value dinamically in url
            .then(res =>{
                this.setState({
                    article: res.data
                });
            })
         
    }
    handleDelete = (event) => {
        const ID = this.props.match.params.articleID;
        axios.delete(`http://127.0.0.1:8000/api/${ID}`);
        this.props.history.push('/');
        this.forceUpdate();
    }

    render() {
        return(
            <div>
                <Card title = {this.state.article.title} >
                    <p style = {{ color: 'rgb(207, 174, 12)',fontFamily: ('cursive' ,'Calligrapher') ,fontSize: '16px' }}>{this.state.article.description}</p>
                    <p> {this.state.article.content}</p>
                </Card>
                <br />
                <CustomForm 
                requestType ="put"
                articleID = {this.props.match.params.articleID}
                btnText = "Update"/>
                <form onSubmitCapture = {this.handleDelete}>
                    <Button type ="danger" htmlType ="submit">Delete</Button>
                </form>
            </div>
        )
    }
}

export default ArticleDetail;