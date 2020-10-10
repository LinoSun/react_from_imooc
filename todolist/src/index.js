import React from 'react';
import ReactDOM from 'react-dom';
// App就算是一个小的组件
import TodoList from './TodoList';

// jsx语法中，如果我们要使用自己创建的组件可以这么写<App />，首字母大写一般就是组件
ReactDOM.render(
  // <React.StrictMode>
    <TodoList />,
  //</React.StrictMode>
  document.getElementById('root')
);