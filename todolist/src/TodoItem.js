import React, {Component} from 'react';

class TodoItem extends Component{
	constructor(props){
		super(props);
		// 放在这个地方不放在div里面是为了提高性能
		this.handleClick = this.handleClick.bind(this);
	}
    render(){
		return <div onClick={this.handleClick}>{this.props.content}</div>
    }
    handleClick(){
        this.props.deleteItem(this.props.index);
    }
}

export default TodoItem;
