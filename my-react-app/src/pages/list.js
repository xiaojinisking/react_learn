import React,{Component} from 'react';

class NumberList extends Component{
	render() {
		var numlist = [1,2,3];
		var doublearr = numlist.map((item)=>item*2)

		console.log(typeof doublearr);

		const number = this.props.numbers;
		const listItem = number.map((number,index)=>(
			<li key={index}>{number}</li>
		));
		console.log('元素集合',listItem);
		console.log('数组类型', listItem instanceof Array);

		return (
			<div>
				<ul>
					{listItem}
				</ul>
				<div>
					{numlist}
				</div>
			</div>

		)
	}
}

export default NumberList;