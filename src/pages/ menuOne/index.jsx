import React, { createElement, Component } from 'react';

import { Input } from 'antd';
import VIew from '../../components/index.jsx'


const { Search } = Input;
class MenuOne extends React.Component {
    state = {
        collapsed: false,
    };

    onSearch = (e) => {
        console.log(this.props);
        this.props.onChildData(e, "MenuOne")
    }

    render() {
        return (
            <div>
                <VIew onSearch={((e)=>{
                    this.onSearch(e)
                })} type='MenuOne'/>
            </div>
        );
    }
}



export default MenuOne;