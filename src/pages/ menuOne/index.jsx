import React, { Component } from 'react';
import { Input, Col, Row, Form, Button, Dropdown, Menu, Select, Tag, DatePicker, Space, Table } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import './index.css';
import FirstStep from '../../components/first';
const { Option } = Select;
const { TextArea } = Input;
const items = [
    {
        key: '1',
        label: '上海正也医药公司',
    },
    {
        key: '2',
        label: '上海正也医药公司A',
    },
    {
        key: '3',
        label: '上海正也医药公司B',
    },
];

const city = [
    {
        key: '1',
        label: '上海',
    },
    {
        key: '2',
        label: '北京',
    },
    {
        key: '3',
        label: '浙江',
    },
];

class MenuOne extends Component {
    state = {
        selectedClient: '', // 保存选中的客户
        selectedRegion: '',
        selectedCity: '',
        selectedClients: [],
        selectedCities: [],
        numbers: [1],
        newNumber: 1,
        agreements: [1],
        newAgreement: 1,
        selectedIndex: null,
        rowData: Array(7).fill(''),
        flag: 0
    };

    handleCityChange = (value) => {
        const { selectedCities } = this.state;
        if (!selectedCities.includes(value)) {
            this.setState({
                selectedCities: [...selectedCities, value],
                selectedCity: '',
            });
        }
    };

    handleMenuClick = (e) => {
        const selectedClient = items.find(item => item.key === e.key)?.label;
        if (selectedClient) {
            this.setState({
                selectedClient,
            });
        }
    };

    handleCityClick = (e) => {
        const selectedCity = city.find(item => item.key === e.key)?.label;
        if (selectedCity) {
            this.setState({
                selectedCities: [selectedCity], // Replace the array with a single selected city
            });
        }
    };

    handleRemoveCityAtIndex = (index) => {
        const { selectedCities } = this.state;
        const updatedCities = selectedCities.filter((_, i) => i !== index);
        this.setState({
            selectedCities: updatedCities,
        });
    };

    handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    onChange = (value, dateString) => {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
    };
    onOk = (value) => {
        console.log('onOk: ', value);
    };
    handleAddNumber = () => {
        this.setState(prevState => ({
            numbers: [...prevState.numbers, prevState.newNumber],
            newNumber: prevState.newNumber + 1,
        }));
    };
    handleAddAgreement = () => {
        this.setState(prevState => ({
            agreements: [...prevState.agreements, prevState.newAgreement],
            newAgreement: prevState.newAgreement + 1,
        }));
    };

    handleDeleteNumber = (index) => {
        this.setState(prevState => ({
            numbers: prevState.numbers.filter((_, i) => i !== index),
            selectedIndex: null,
        }));
    };
    handleDeleteAgreement = (index) => {
        this.setState(prevState => ({
            agreements: prevState.agreements.filter((_, i) => i !== index),
            selectedIndex: null,
        }));
    };


    handleTable = (flag) => {
        this.setState({ flag })
    }


    render() {
        const { selectedClient, selectedRegion, selectedCity, selectedClients, selectedCities, flag } = this.state;

        const menu = (
            <Menu onClick={this.handleMenuClick}>
                {items.map(item => (
                    <Menu.Item key={item.key}>{item.label}</Menu.Item>
                ))}
            </Menu>
        );

        const citys = (
            <Menu onClick={this.handleCityClick}>
                {city.map(item => (
                    <Menu.Item key={item.key}>{item.label}</Menu.Item>
                ))}
            </Menu>
        );

        const { RangePicker } = DatePicker;

        const dataSource = [
            {
                key: '1',
                name: '胡彦斌',
                age: 32,
                address: '西湖区湖底公园1号',
            },
            {
                key: '2',
                name: '胡彦祖',
                age: 42,
                address: '西湖区湖底公园1号',
            },
        ];

        const columns = [
            {
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: '年龄',
                dataIndex: 'age',
                key: 'age',
            },
            {
                title: '住址',
                dataIndex: 'address',
                key: 'address',
                render: (_, recordIndex) => (
                    <Input
                        placeholder='请输入'

                    />
                ),
            },
        ];
        const columns2 = [
            {
                title: '协议价（元）',
                dataIndex: 'address',
                key: 'address',
                render: (_, recordIndex) => (
                    <Input
                        placeholder='请输入'

                    />
                ),
            },
            {
                title: '票折（元）',
                dataIndex: 'address',
                key: 'address',
                render: (_, recordIndex) => (
                    <Input
                        placeholder='请输入'
                    />
                ),
            },
            {
                title: '购进指标量（大单位）',
                dataIndex: 'address',
                key: 'address',
                render: (_, recordIndex) => (
                    <Input
                        placeholder='请输入'

                    />
                ),
            },
            {
                title: '购进指标量（小单位）',
                dataIndex: 'address',
                key: 'address',
                render: (_, recordIndex) => (
                    <Input
                        placeholder='请输入'
                    />
                ),
            },
            {
                title: '购进金额（万元）',
                dataIndex: 'address',
                key: 'address',
                render: (_, recordIndex) => (
                    <Input
                        placeholder='请输入'
                    />
                ),
            },
            {
                title: '纯销指标量（小单位）',
                dataIndex: 'address',
                key: 'address',
                render: (_, recordIndex) => (
                    <Input
                        placeholder='请输入'

                    />
                ),
            },
            {
                title: '纯销指标金额（万元）',
                dataIndex: 'address',
                key: 'address',
                render: (_, recordIndex) => (
                    <Input
                        placeholder='请输入'
                    />
                ),
            },

        ]

        const data = [{ key: 0 }]; // 单行数据
        return (
            <div>
                <FirstStep />
                <div className="dashed-box">
                    <div className="dashed-line"></div>
                    <div className="center-text">
                        <div className='num'>2</div>产品政策
                    </div>
                    <div className="dashed-line"></div>
                </div>
                <div className='label'>
                    <Button onClick={this.handleAddNumber} style={{ marginRight: '20px' }} type="primary">添加产品</Button>
                    <div className='money'>购进总指标（万元）：<span className='count'>¥152.65</span></div>
                    <div className='money'>指标按季度分解（万元）：<span className='count'>【Q1】¥12.5</span>,<span className='count'>【Q2】¥12.5</span>，<span className='count'>【Q3】¥12.5</span>，<span className='count'>【Q4】¥12.5</span></div>
                    <div className='money'>纯销总指标（万元）：<span className='count'>¥152.65</span></div>
                </div>

                {this.state.numbers.map((number, index) => {
                    return <div className='todoList'>
                        <Form
                            name="basic"
                            wrapperCol={{
                                span: 40,
                            }}
                            initialValues={{
                                remember: true,
                            }}
                            onFinish
                        >
                            <Form.Item
                                label="产品"
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your username!',
                                    },
                                ]}
                            >
                                <Dropdown
                                    overlay={menu}
                                    placement="bottomLeft"
                                    arrow
                                >
                                    <Button style={{ marginRight: "10px" }}>
                                        选择产品
                                    </Button>
                                </Dropdown>
                                {selectedClient}
                            </Form.Item>
                        </Form>
                        <div style={{ marginLeft: '60px' }}>

                            <Form.Item
                                label="协议效期"
                                name="time"
                            >
                                <Space direction="vertical" size={12}>
                                    <DatePicker showTime onChange={this.onChange} onOk={this.onOk} />
                                </Space>
                            </Form.Item>
                        </div>
                        <div className="delBt">
                            <Button onClick={() => this.handleDeleteNumber(index)} type="primary" danger>
                                删除
                            </Button>
                        </div>
                    </div>
                })}
                <div className='secondTable'>
                    <div className="tableContent">
                        <Table
                            columns={columns2}
                            dataSource={data}
                            pagination={false}
                        />
                        <Table
                            style={{ marginTop: '10px' }}
                            columns={columns2}
                            dataSource={data}
                            pagination={false}
                        />
                    </div>
                </div>
                <div className="dashed-box">
                    <div className="dashed-line"></div>
                    <div className="center-text">
                        <div className='num'>3</div>补充协议
                    </div>
                    <div className="dashed-line"></div>
                </div>

                <div className="agreementBox">
                    <div style={{ display: 'flex' }}>
                        {this.state.agreements.map((number, index) => {
                            return <div key={index} onClick={() => this.handleTable(index)} className={flag === index ? "agreement special" : 'agreement'}>补充协议{index + 1}</div>
                        })}
                    </div>
                    <div className="">
                        <Button onClick={() => this.handleAddAgreement()} style={{ marginRight: '20px' }} type="primary">新增</Button>
                    </div>
                </div>
                <div className="agreementsBox">
                    <div className="action">
                        <div className="">协议内容：</div>
                        <Button onClick={() => this.handleDeleteAgreement(flag)} type="primary" danger>
                            删除
                        </Button>
                    </div>
                    <div className="textArea">
                    <TextArea rows={4} />
                    </div>
                </div>
                <div className="save">
                    <Button size={"large"} type="primary">保存</Button>

                </div>
            </div>
        );
    }
}

export default MenuOne;



