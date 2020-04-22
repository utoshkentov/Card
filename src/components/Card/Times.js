import React from "react";
import {Col, Tag, Modal} from "antd";

const Times = ({times}) => {
    const success = () => {
        Modal.success({
            content: 'Ok You have booked on this time',
        });
    }

    return (
        times.map(time => {
                return (
                    <Col xl={{span: 4, offset: 1}}
                         style={{width: '20px', height: '50px'}} key={time.id}>
                        <Tag color='#f50' onClick={success}>
                            vaqt : {time.time}
                        </Tag>
                    </Col>
                )
            }
        )
    )
}

export default Times;