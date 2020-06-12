import React, { Component } from 'react';

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';
import ItemStatusFilter from '../item-status-filter/item-status-filter';

export default class App extends Component {
  state = {
    todoData: [
      {label: 'Drink Coffee', important: false, id: 1},
      {label: 'Make Awesome App', important: true, id: 2},
      {label: 'Have a lunch', important: false, id: 3}
    ]
  }

  deleteItem = (id) => {
    this.setState(({todoData}) => {
      const index = todoData.findIndex(elem => elem.id === id);
      const newArr = [...todoData.slice(0, index), ...todoData.slice(index +1)];

      return {
        todoData: newArr
      }
    })
  }

  render() {

    const {todoData} = this.state;

    return (
      <>
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
            <SearchPanel />
            <ItemStatusFilter />
        </div>

        <TodoList todos={todoData} 
        onDeleted={this.deleteItem}/>
      </>
    )
  }
}