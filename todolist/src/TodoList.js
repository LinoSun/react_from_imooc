import React, { Component, Fragment } from 'react';

// function TodoList() {
class TodoList extends Component {
	// 构造函数，最先被执行，写法固定
	constructor(props) {
		super(props);
		// 定义数据,this是这个组件的状态
		this.state = {
			inputValue: "",
			list: []
		}
	}
	render() {
		return (
			// fragment相当于隐藏的div模块
			<Fragment>
				<div>
					<input
						value={this.state.inputValue}
						// 事件绑定的时候都是需要bind(this)进行操作的
						onChange={this.handleInputChange.bind(this)}
					/>
					<button onClick={this.handleBtnClick.bind(this)}>提交</button>
				</div>
				<ul>
					{
						// 数组都有一个map方法
						this.state.list.map((item, index) => {
							// 
							return <li
							// 通常标签都会绑定一个key，不绑定的话会报警告
								key={index}
								// 在这里添加onclick事件是点击进行删除
								// 绑定事件的同时进行参数传递
								onClick={this.handleItemDelete.bind(this,index)}
							>
								{item}
							</li>
						})
					}
				</ul>
			</Fragment>
		)
	}
	handleInputChange(e) {
		// 改变数据的话必须使用专门的方法this.setState进行操作，里面相当于一个字典
		this.setState({
			inputValue: e.target.value
		})
	}
	// 新增功能完成
	handleBtnClick() {
		this.setState({
			// ...tihs.state.list展开运算符，把之前的拿出来生成一个全新的数组
			list: [...this.state.list, this.state.inputValue],
			inputValue: ''
		})
	}

	handleItemDelete(index) {
		// 定义一个常量，作为list的拷贝，然后改变数组的切片位置
		const list = [...this.state.list];
		// 删除下标为index的选项，删除一个，相当于数组中的切片
		list.splice(index,1);
		// 任何状态的改变都是需要调用this.setState完成的
		this.setState({
			list:list
		})
		console.log(index)
	}
}
// 写组件之后必须导出组件
export default TodoList;