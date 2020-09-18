import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

// in the github code a class component is being used and thus uses this.props
// in the video he uses this func component so may need to keep in mind for some other purpose later
//i.e. for history or url :id references
const CustomLayout = (props) => {
  console.log(props)
    return (
  <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>

        {
          props.isAuthenticated ?
            <Menu.Item key="2">
              Logout
            </Menu.Item>
            :
            <Menu.Item key="2">
              <Link to="/login">Login</Link>
            </Menu.Item>

        }
        <Menu.Item key="1">
          <Link to="/">Posts</Link>
        </Menu.Item>
        
        
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item><Link to="/" >Home</Link></Breadcrumb.Item>
        <Breadcrumb.Item><Link to="/" >List</Link></Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">
          Content to go here so {props.children}
        </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
    );
}

export default CustomLayout
