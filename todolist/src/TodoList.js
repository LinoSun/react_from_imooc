import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';
import './style.css'

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
		// this指向的绑定统一放在页面的顶部组件初始化的时候
		this.handleItemDelete = this.handleItemDelete.bind(this);
		this.handleBtnClick = this.handleBtnClick.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}
	render() {
		return (
			// fragment相当于隐藏的div模块，其实react里面的一个组件
			<Fragment>
				{/* jsx语法注释是这么写的
				可以写多行注释*/}
				<div>
					{/* label标签中的for关键字替换成htmlFor */}
					<label htmlFor="insertArea">输入内容</label>
					<input
						id="insertArea"
						className='input'
						value={this.state.inputValue}
						// 事件绑定的时候都是需要bind(this)进行操作的
						onChange={this.handleInputChange}
					/>
					<button onClick={this.handleBtnClick}>提交</button>
				</div>
				<ul>
					{this.getTodoItem()}
				</ul>
			</Fragment>
		)
	}
	getTodoItem() {
		// 数组都有一个map方法
		return this.state.list.map((item, index) => {
			// 
			return (
				// key一定要写在循环的最外层
				<TodoItem
					key={index}
					content={item}
					index={index}
					// 传递方法的时候需要在方法之后绑定bind(this) 来改写this的指向
					deleteItem={this.handleItemDelete} />
			)
		})
	}

	handleInputChange(e) {
		// 改变数据的话必须使用专门的方法this.setState进行操作，里面相当于一个字典
		const value = e.target.value;
		// this.setState( () => ({}) )语法
		this.setState(() => ({
			inputValue: value
		}));
	}

	// 新增功能完成
	handleBtnClick() {
		// 传入prevState是为了避免错误改变state的状态
		this.setState((prevState) => ({
			list: [...prevState.list, prevState.inputValue],
			inputValue: ''
		}));
	}

	handleItemDelete(index) {

		this.setState((prevState) => {
			// 定义一个常量，作为list的拷贝，然后改变数组的切片位置
			const list = [...prevState.list];
			// 删除下标为index的选项，删除一个，相当于数组中的切片
			list.splice(index, 1);
			// 因为写了不止是简单的函数，所以去掉了最外围的括号，然后加上return
			return { list }
		});
	}
}
// 写组件之后必须导出组件
export default TodoList;