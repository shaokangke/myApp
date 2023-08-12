import React, { Component } from 'react';
import { Input, Col, Row, Form, Button, Dropdown, Menu, Select, Tag, DatePicker, Space,Table } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import './index.css';
const { Option } = Select;

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

class FirstStep extends Component {
    state = {
        selectedClient: '', // 保存选中的客户
        selectedRegion: '',
        selectedCity: '',
        selectedClients: [],
        selectedCities: [],
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

    render() {
        const { selectedClient, selectedRegion, selectedCity, selectedClients, selectedCities } = this.state;

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
            },
          ];           
        return (
            <div>
                <div className="dashed-box">
                    <div className="dashed-line"></div>
                    <div className="center-text">
                        <div className='num'>1</div>协议主体
                    </div>
                    <div className="dashed-line"></div>
                </div>
                <div className='firstBox'>
                    <div className='fitstContent'>
                        <Row className='rowSpecial'>
                            <Col span={12}>
                                <Form
                                    name="basic"
                                    wrapperCol={{
                                        span: 16,
                                    }}
                                    initialValues={{
                                        remember: true,
                                    }}
                                    onFinish
                                >
                                    <Form.Item
                                        label="协议客户"
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
                                                选择客户
                                            </Button>
                                        </Dropdown>
                                        {selectedClient}
                                    </Form.Item>
                                </Form>
                            </Col>
                            <Col span={12}>
                                <Form
                                    name="basic"
                                    wrapperCol={{
                                        span: 16,
                                    }}
                                    initialValues={{
                                        remember: true,
                                    }}
                                    onFinish
                                >
                                    <Form.Item
                                        label="协议状态"
                                        name="status"
                                    >
                                        <Select
                                            defaultValue="正常"
                                            style={{
                                                width: 120,
                                            }}
                                            onChange={this.handleChange}
                                            options={[
                                                {
                                                    value: '1',
                                                    label: '正常',
                                                },
                                                {
                                                    value: '2',
                                                    label: '异常',
                                                },
                                            ]}
                                        />
                                    </Form.Item>
                                </Form>
                            </Col>
                        </Row>

                        <Row className='rowSpecial'>
                            <Col span={12}>
                                <Form
                                    name="basic"
                                    wrapperCol={{
                                        span: 16,
                                    }}
                                    initialValues={{
                                        remember: true,
                                    }}
                                    onFinish
                                >
                                    <Form.Item
                                        label="购进指标"
                                        name="status"
                                    >
                                        <Select
                                            defaultValue="金额"
                                            style={{
                                                width: 120,
                                            }}
                                            onChange={this.handleChange}
                                            options={[
                                                {
                                                    value: '1',
                                                    label: '金额',
                                                },
                                                {
                                                    value: '2',
                                                    label: '数量',
                                                },
                                            ]}
                                        />
                                        <Input placeholder="输入金额/数量" style={{ width: 200, marginLeft: '10px' }} />
                                    </Form.Item>
                                </Form>
                            </Col>
                            <Col span={12}>
                                <Form
                                    name="basic"
                                    wrapperCol={{
                                        span: 16,
                                    }}
                                    initialValues={{
                                        remember: true,
                                    }}
                                    onFinish
                                >
                                    <Form.Item
                                        label="纯销指标："
                                        name="username"
                                    >
                                        <Select
                                            defaultValue="金额"
                                            style={{
                                                width: 120,
                                            }}
                                            onChange={this.handleChange}
                                            options={[
                                                {
                                                    value: '1',
                                                    label: '金额',
                                                },
                                                {
                                                    value: '2',
                                                    label: '数量',
                                                },
                                            ]}
                                        />
                                        <Input placeholder="输入金额/数量" style={{ width: 200, marginLeft: '10px' }} />

                                    </Form.Item>
                                </Form>
                            </Col>
                        </Row>

                        <Row className='rowSpecial'>
                            <Col span={12}>
                                <Form
                                    name="basic"
                                    wrapperCol={{
                                        span: 16,
                                    }}
                                    initialValues={{
                                        remember: true,
                                    }}
                                    onFinish
                                >
                                    <Form.Item
                                        label="销售区域"
                                        name="region"
                                    >
                                        <Dropdown
                                            overlay={citys}
                                            placement="bottomLeft"
                                            arrow
                                        >
                                            <Button style={{ marginRight: "10px" }}>
                                                选择区域
                                            </Button>
                                        </Dropdown>
                                        {selectedCities.map((city, index) => (
                                            <div key={index} style={{ display: 'inline-block', marginRight: '8px' }}>
                                                {city}
                                                <Button
                                                    type="link"
                                                    size="small"
                                                    icon={<CloseCircleOutlined />}
                                                    onClick={() => this.handleRemoveCityAtIndex(index)}
                                                />
                                            </div>
                                        ))}
                                    </Form.Item>
                                </Form>
                            </Col>
                            <Col span={12}>

                                <Form
                                    name="basic"
                                    wrapperCol={{
                                        span: 16,
                                    }}
                                    initialValues={{
                                        remember: true,
                                    }}
                                    onFinish
                                >
                                    <Form.Item
                                        label="签订时间"
                                        name="time"
                                    >
                                        <Space direction="vertical" size={12}>
                                            <DatePicker showTime onChange={this.onChange} onOk={this.onOk} />
                                        </Space>
                                    </Form.Item>
                                </Form>
                            </Col>
                        </Row>

                        <Row className='rowSpecial'>
                            <Col span={12}>
                                <Form
                                    name="basic"
                                    wrapperCol={{
                                        span: 16,
                                    }}
                                    initialValues={{
                                        remember: true,
                                    }}
                                    onFinish
                                >
                                    <Form.Item
                                        label="购进渠道"
                                        name="region"
                                    >
                                        <Select
                                            defaultValue="指定渠道"
                                            style={{
                                                width: 120,
                                            }}
                                            onChange={this.handleChange}
                                            options={[
                                                {
                                                    value: '1',
                                                    label: '指定渠道',
                                                },
                                                {
                                                    value: '2',
                                                    label: '内部渠道',
                                                },
                                            ]}
                                        />
                                        <Dropdown
                                            overlay={citys}
                                            placement="bottomLeft"
                                            arrow
                                        >
                                            <Button style={{ marginRight: "10px",marginLeft:'10px' }}>
                                                指定渠道
                                            </Button>
                                        </Dropdown>
                                        {selectedCities.map((city, index) => (
                                            <div key={index} style={{ display: 'inline-block', marginRight: '8px' }}>
                                                {city}
                                                <Button
                                                    type="link"
                                                    size="small"
                                                    icon={<CloseCircleOutlined />}
                                                    onClick={() => this.handleRemoveCityAtIndex(index)}
                                                />
                                            </div>
                                        ))}
                                    </Form.Item>
                                </Form>
                            </Col>

                        </Row>
                        <div style={{marginLeft:'70px'}}>
                        <Table  dataSource={dataSource} columns={columns} size='small'  pagination={false}/>
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default FirstStep;
