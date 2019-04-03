//UI组件

import React from 'react';
import {Row, Col, Input, Button, List} from "antd";

const  TodoListUi = (props)=>(

		<div>
			<Row>
				<Col span={12}>
					<Input
						onChange={props.handInputChange}
						value={props.inputValue}
					/>
				</Col>
				<Col span={12}>
					<Button
						type="primary"
						onClick={props.handSubmie}
					>点击</Button>
				</Col>
			</Row>
			<Row>
				<Col span={24}>
					<List
						bordered
						dataSource={props.list}
						renderItem={(item, index) => (
							<List.Item
								onClick={()=>{props.handItemDelete(index)}}
							>
								{item}
							</List.Item>)
						}
					/>
				</Col>
			</Row>
		</div>
)


export default TodoListUi;
