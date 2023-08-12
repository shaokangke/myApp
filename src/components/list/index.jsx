import React, { createElement, Component } from 'react';

import './index.css';
class Index extends React.Component {


    render() {
        return (
            <div className="app">
                <div className="column">
                    <div className="item">
                        <div className="box"></div>
                        <div className="text">首页</div>
                    </div>
                    <div className="item">
                        <div className="box"></div>
                        <div className="text">主数据</div>
                    </div>
                    <div className="item">
                        <div className="box"></div>
                        <div className="text">辖区管理</div>
                    </div>
                    <div className="item">
                        <div className="box"></div>
                        <div className="text">销讯通</div>
                    </div>
                </div>
            </div>
        );
    }
}



export default Index;