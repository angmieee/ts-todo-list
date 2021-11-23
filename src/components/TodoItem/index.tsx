import * as React from 'react';
import { useState, useContext } from 'react';
import { StateProps, Context } from '../Provider';
import { Checkbox, Typography } from '@douyinfe/semi-ui';

interface IProps {
    todo: StateProps;
}

const TodoItem = ({ todo }: IProps) => {
    const {changeTodo} = useContext(Context)

    const changeHandle = () => {
        changeTodo(todo.id)
    }

    return (
        <div className="todo-item">
            <Checkbox 
                checked={todo.checked}
                onChange={changeHandle}>
                <Typography.Text delete={todo.checked}>{todo.text}</Typography.Text>
            </Checkbox>
        </div>
    )
}

export default TodoItem;