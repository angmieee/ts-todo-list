import * as React from 'react';
import { useState, useContext } from 'react';
import { Context } from '../Provider';
import { TodoInput, TodoList } from '../../components';

const Todo = () => {
    const {addTodo, todoList} = useContext(Context)

    return (
        <div className="todo" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <TodoInput addTodo={addTodo} />
            <TodoList todoList={todoList} />
        </div>
    )
}

export default Todo;