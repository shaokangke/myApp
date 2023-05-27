
import React, { useState } from 'react';
import {
  PieChartOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { useNavigate, Routes, Route } from 'react-router-dom'

import MenuOne from './pages/ menuOne/index';
import MenuTwo from './pages/ menuTwo/index';
import MenuThree from './pages/ menuThree/index';
import MenuFour from './pages/ menuFour/index';
import Home from './pages/home/index'



const { Header, Content, Footer, Sider } = Layout;

// const getItem = (label, key, icon, children) => {
//   return {
//     key,
//     icon,
//     children,
//     label,
//   };
// }
// const items = [
//   // getItem('Option 2', 'MenuTwo', <PieChartOutlined />),//一级菜单
//   getItem('菜单1', '菜单1', <DesktopOutlined />, [
//     getItem('子菜单1', 'MenuOne'),
//     getItem('子菜单2', 'MenuTwo'),
//   ]),
//   getItem('菜单2', '菜单2', <PieChartOutlined />, [getItem('子菜单2-1', 'MenuThree'), getItem('子菜单 2-2', 'MenuFour')]),
// ];
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [title, setTitle] = useState('欢迎');
  const [items, setItems] = useState(
    [
      {
        label: '菜单1', key: '菜单1', icon: <PieChartOutlined />, children: [
          { label: '子菜单1', key: 'MenuOne' },
          { label: '子菜单2', key: 'MenuTwo' }
        ]
      },
      {
        label: '菜单2', key: '菜单2', icon: <PieChartOutlined />, children: [
          { label: '子菜单2-1', key: 'MenuThree' },
          { label: '子菜单2-2', key: 'MenuFour' }
        ]
      }
    ]
  )

  const navigate = useNavigate()

  const {
    token: { colorBgContainer },
  } = theme.useToken();



  const [childData, setChildData] = useState('');

  const handleChildData = (data, type) => {
    setChildData(data);

    const updatedItems = items.map((item) => {
      if (item.key === type) {
        return { ...item, label: data };
      } else if (item.children) {
        const updatedChildren = item.children.map((child) => {
          if (child.key === type) {
            return { ...child, label: data };
          }
          return child;
        });
        return { ...item, children: updatedChildren };
      }
      return item;
    });

    setItems(updatedItems);
  };


  const k = (params) => {
    switch (params) {
      case 'MenuOne':
        return '子菜单1-1';
      case 'MenuTwo':
        return '子菜单1-2';
      case 'MenuThree':
        return '子菜单2-1';
      case 'MenuFour':
        return '子菜单2-2';
      default:
        return ''; // 如果没有匹配的值，可以返回一个默认值或者抛出错误
    }
  };



  const onClick = (e) => {

    console.log(e);
    setTitle(`${e.keyPath[1]}${'-'}${k(e.keyPath[0])}`)
    navigate(e.key, { replace: true })
    localStorage.setItem('selectedMenu', e.keyPath[0]);

  }
  const selectedMenu = localStorage.getItem('selectedMenu');

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className='title' style={{ lineHeight: '64px', textAlign: "center", color: "#fff" }} >
          <span >我的后台</span>
        </div>
        <Menu selectedKeys={[selectedMenu]} theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} onClick={onClick} />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            paddingLeft: 30,
            background: colorBgContainer,
          }}
        >{title}</Header>
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: '75vh',
              background: colorBgContainer,
            }}
          >
            <Routes>
              <Route exact path="/MenuOne" element={<MenuOne onChildData={handleChildData} />} />
              <Route exact path="/MenuTwo" element={<MenuTwo onChildData={handleChildData} />} />
              <Route exact path="/MenuThree" element={<MenuThree onChildData={handleChildData} />} />
              <Route exact path="/MenuFour" element={<MenuFour onChildData={handleChildData} />} />
              <Route exact path="/" element={<Home />} />

            </Routes>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          感谢面试官的code Review
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;