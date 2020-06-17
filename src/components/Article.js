import React from 'react';
import { List,  Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';


const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const Articles = (props) => {
    return(
        <List
        itemLayout="vertical"
        size="large"

        // Pagination code
        pagination={{
          onChange: page => {
            console.log(page);
          },
          pageSize: 4,
        }}
// upto here 


        dataSource={props.data}
               
        renderItem={item => (
          <List.Item
            key={item.title}
            actions={[
              <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
              <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
              <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
            ]}
            extra={
              <img
                width={272}
                alt="logo"
                src={item.image}
              />
            }
          >
            <List.Item.Meta
            
              title={<a href = {`/articles/${item.id}`}>{item.title}</a>}
              description={<p style={{color: 'rgb(207, 174, 12)',fontFamily: ('cursive' ,'Calligrapher') ,fontSize: '16px'}}>
                {item.body}</p>}
            />
            {item.content}
          </List.Item>
        )}
      />
    );

}


export default Articles;
