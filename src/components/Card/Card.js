import React from 'react'
import {Card, Col, Rate, Row, Tabs, Tag, Typography} from 'antd';
import {Link} from "react-router-dom";
import {VideoCameraOutlined} from '@ant-design/icons';
import Times from './Times';

const {Paragraph} = Typography
const {Title} = Typography;
const {TabPane} = Tabs;

const style = {
    card: {height: '68vh', margin: '10px 150px'},
    root: {height: '100%', margin: '0', padding: '0'},
    col: {marginLeft: '0', textAlign: 'left'}
}

const users = [
    {
        id: 1,
        name: 'Umrzoq',
        about: '79% пациентов рекомендует врача на основе 77 отзывов',
        job: 'dentist',
        price: '2000$',
        number: '+99899 857 78 40',
        img: 'https://media.istockphoto.com/photos/portrait-of-a-doctor-picture-id92347250?k=6&m=92347250&s=612x612&w=0&h=xEfKxSuZVFkrdM2uPORSRH-67737aR1ubaDJRQYvCNk='
    },
    {
        id: 2,
        name: 'Madina',
        about: '82% пациентов рекомендует врача на основе 231 отзыва',
        job: 'nurse',
        price: '1870$',
        number: '+99899 500 71 77',
        img: 'https://previews.123rf.com/images/mendelex/mendelex1503/mendelex150300014/37408485-confident-and-smiling-doctor-face-for-you-young-doctor-isolated-on-white-background.jpg'
    },
    {
        id: 3,
        name: 'Abror',
        about: '84% пациентов рекомендует врача на основе 265 отзывов',
        job: 'dentist',
        price: '1320$',
        number: '+99899 443 21 33',
        img: 'https://thumbs.dreamstime.com/z/doctor-face-experience-4979821.jpg'
    },
    {
        id: 4,
        name: 'Jahon',
        about: '80% пациентов рекомендует врача на основе 93 отзывов',
        job: 'antrodolok',
        price: '1450$',
        number: '+99899 442 46 88',
        img: 'https://image.freepik.com/free-photo/_23-2148075685.jpg'
    },
    {
        id: 5,
        name: 'Muhriddin',
        about: '89% пациентов рекомендует врача на основе 397 отзывов',
        job: 'dentist',
        price: '1200$',
        number: '+99899 198 01 23',
        img: 'https://image.freepik.com/free-photo/_23-2148168455.jpg'
    }
]

const times = [
    {
        id: 1,
        time: '10:00'
    },
    {
        id: 2,
        time: '11:00'
    },
    {
        id: 3,
        time: '12:00'
    },
    {
        id: 4,
        time: '13:00'
    },
    {
        id: 5,
        time: '14:00'
    },
    {
        id: 6,
        time: '15:00'
    },
    {
        id: 7,
        time: '16:00'
    },
    {
        id: 8,
        time: '17:00'
    },
    {
        id: 9,
        time: '18:00'
    },
    {
        id: 10,
        time: '19:00'
    }
]


const CardMain = () => {
    return (
        <>
            {
                users.map(user => {
                    return (
                        <Card style={style.card}>
                            <Row style={style.root}>
                                <Col style={style.col} xs={{span: 20, offset: 1}}
                                     sm={{span: 16, offset: 1}} md={{span: 12, offset: 2}} lg={{span: 8, offset: 2}}
                                     xl={{span: 6, offset: 2}}>

                                    <Card
                                        hoverable
                                        style={{width: '80%', margin: 0}}
                                        cover={
                                            <img
                                                alt="example"
                                                src={user.img}
                                                style={{width: '100%', height: '200px'}}
                                            />
                                        }>
                                        <Link to='/doctors/:id'>
                                            <Paragraph type='warning' copyable ellipsis={{rows: 3, expandable: true}}
                                                       style={{fontSize: '18px'}}>
                                                {user.about}
                                            </Paragraph>
                                        </Link>
                                        <Rate allowHalf defaultValue={5}/>
                                    </Card>
                                </Col>
                                <Col style={style.col} xs={{span: 2, offset: 2}} sm={{span: 4, offset: 2}}
                                     md={{span: 6, offset: 1}} lg={{span: 8, offset: 1}} xl={{span: 10, offset: 1}}>
                                    <Paragraph style={{fontSize: '22px', padding: 0, margin: 0}}>{user.job}</Paragraph>
                                    <Title level={2} style={{padding: '10px 0', margin: 0}}>{user.name}</Title>
                                    <Row>
                                        <Col>
                                            <Title level={2}>{user.price}</Title>
                                        </Col>
                                        <Col>
                                            <Tag color="#cd201f">-10% discount</Tag>
                                        </Col>
                                    </Row>
                                    <Link to='/live_video'>
                                        <Tag
                                            style={{
                                                marginTop: '10px',
                                                width: '130px',
                                                height: '50px',
                                                textAlign: 'center',
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}
                                            visible
                                            color='magenta'
                                            icon={<VideoCameraOutlined/>}
                                        >
                                            <Title level={4} style={{color: 'magenta'}}>
                                                Live Chat
                                            </Title>
                                        </Tag>
                                    </Link>
                                    <Paragraph copyable style={{fontSize: '18px', marginTop: '100px'}}>
                                        Phone Number: {user.number}
                                    </Paragraph>
                                    <Paragraph style={{fontSize: '20px'}}>
                                        Address: Tashkent Chilanzar, One Medical center
                                    </Paragraph>
                                </Col>
                                <Col style={style.col} xs={{span: 2, offset: 2}} sm={{span: 4, offset: 2}}
                                     md={{span: 6, offset: 1}} lg={{span: 8, offset: 1}} xl={{span: 8, offset: 1}}>
                                    <Title level={4}>
                                        Book your time
                                    </Title>
                                    <Tabs defaultActiveKey="1" type="card" size='small'>
                                        <TabPane tab="22-aprel" key="1">
                                            <Row style={{margin: 0}}>
                                                <Times times={times} />
                                            </Row>
                                        </TabPane>
                                        <TabPane tab="23-aprel" key="2">
                                            <Row style={{margin: 0}}>
                                                <Times times={times} />
                                            </Row>
                                        </TabPane>
                                        <TabPane tab="24-aprel" key="3">
                                            <Row style={{margin: 0}}>
                                                <Times times={times} />
                                            </Row>
                                        </TabPane>
                                    </Tabs>
                                </Col>
                            </Row>
                        </Card>
                    )
                })
            }
        </>
    )
}

export default CardMain;
