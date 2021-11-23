import * as React from 'react';
import { useState } from 'react';
import { Input, Button } from '@douyinfe/semi-ui';
import { StateProps } from '../Provider';

interface IProps {
    addTodo: (todo: StateProps) => void;
}

const TodoInput: React.FC<IProps> = ({ addTodo }) => {
    const [inputValue, setInputValue] = useState('');

    const changeInputHandle = (value: string) => {
        setInputValue(value)
    }

    const clickHandle = () => {
        if (inputValue === '') {
            return
        }    
        addTodo({
            id: new Date().getTime(),
            text: inputValue,
            checked: false
        })
        setInputValue('')
    }

    return (
        <div 
            className="todo-input" 
            style={{
                width: '600px',
                display: 'flex',
                justifyContent: 'center'
            }}
        >
            <Input 
                style={{marginRight: '10px'}} 
                placeholder="Please input ..."
                onChange={changeInputHandle}
                value={inputValue}
            />
            <Button onClick={clickHandle} theme="solid" type="primary">Add</Button>
        </div>
    )
}

export default TodoInput;