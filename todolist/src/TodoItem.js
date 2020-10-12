import React, { Component } from 'react';

class TodoItem extends Component {
	constructor(props) {
		super(props);
		// 放在这个地方不放在div里面是为了提高性能
		// 修改this
		this.handleClick = this.handleClick.bind(this);
	}
	render() {
		const {content} = this.props;
		return (
			<div onClick={this.handleClick}>
				{content}
			</div>
		)
	}
	handleClick() {
		const {deleteItem,index} = this.props;
		deleteItem(index);
	}
}

export default TodoItem;
