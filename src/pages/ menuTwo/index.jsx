import React, { createElement, Component } from 'react';

import { Input } from 'antd';
import VIew from '../../components/index.jsx'


const { Search } = Input;
class MenuTwo extends React.Component {
    state = {
        collapsed: false,
    };

    onSearch = (e) => {
        console.log(this.props);
        this.props.onChildData(e, "MenuTwo")
    }

    render() {
        return (
            <div>
                <VIew onSearch={((e)=>{
                    this.onSearch(e)
                })} type='MenuTwo'/>
            </div>
        );
    }
}



export default MenuTwo;