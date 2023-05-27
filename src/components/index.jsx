import React, { createElement, Component } from 'react';

import { Input,Alert } from 'antd';


const { Search } = Input;
class View extends React.Component {
    state = {
        collapsed: false,
        showAlert: false

    };
    componentDidMount() {
        console.log(this.props);

    }

    onSearch = (e) => {

        if (e) {
            this.props.onSearch(e, this.props.type)
        } else {
            this.setState({ showAlert: true })
        }
    }

    render() {
        return (
            <div>
                {this.state.showAlert && (
                    <Alert
                        message="警告提示"
                        description="菜单名称不能为空"
                        type="warning"
                        showIcon
                        closable
                        onClose={this.handleAlertClose}
                    />
                )}
                <div style={{ width: '300px' }}>
                    <Search placeholder="设置菜单名称" onSearch={((e) => {
                        this.onSearch(e)
                    })} enterButton="保存" />
                </div>
            </div>
        );
    }
}



export default View;