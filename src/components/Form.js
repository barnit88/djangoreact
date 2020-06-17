import React from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';


class CustomForm extends React.Component {


    handleFormSubmit = (event , requestType , articleID) =>{
       
        const title = event.target.elements.title.value;
        const description = event.target.elements.description.value;
        const content = event.target.elements.content.value;
        
        switch( requestType ){
            case 'post':
                    axios.post('http://127.0.0.1:8000/api/',{
                    title: title,
                    description:  description,
                    content: content
                })
                .then(res => console.log(res))
                .catch(error => console.error(error));
                break;

            case 'put':
                    axios.put(`http://127.0.0.1:8000/api/${articleID}/`,{
                    title: title,
                    description:  description,
                    content: content
                })
                .then(res => console.log(res))
                .catch(error => console.error(error));
                break;
            
            default:
                alert("Hello");
                break;
        }
        window.location.reload(true);
        
    }

    render() {
       
          
        return (
        <div>
            <Form  onSubmitCapture = {(event) => this.handleFormSubmit( //making it anonomous function so that it can take parameeters
                event,
                this.props.requestType,
                this.props.articleID  )}>
                <Form.Item label="Title" >
                    <Input name= 'title' placeholder = "Title HEre" />
                </Form.Item>
                <Form.Item label="Description">
                    <Input name= 'description' placeholder="Description Here" />
                </Form.Item>
                <Form.Item label="Content">
                    <Input name= 'content' placeholder="Content Here" />
                </Form.Item>
                <Form.Item >
                    <Button type="primary" htmlType ="submit">{this.props.btnText}</Button>
                </Form.Item>
            </Form>
        </div>
        );
    }
}

export default CustomForm;