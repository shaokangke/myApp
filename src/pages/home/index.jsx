import React, { createElement, Component } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom'

import { Layout, Menu, Breadcrumb } from 'antd';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class Home extends React.Component {
    state = {
        collapsed: false,
    };


    render() {
        return (
            <div className="">
                <h1>首页</h1>
            </div>
        );
    }
}



export default Home;