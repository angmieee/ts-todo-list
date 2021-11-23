import * as React from 'react';
import { useState, createContext } from 'react';

export interface StateProps {
    id: number;
    text: string;
    checked: boolean;
}

interface ContextProps {
    todoList: StateProps[];
    changeTodo: (id: number) => void;
    addTodo: (todo: StateProps) => void;
}

export const Context = createContext({} as ContextProps)

const Provider = (props: React.PropsWithChildren<{}>) => {
    const [todoList, setTodoList] = useState<StateProps[]>([]);

    const changeTodo = (id: number) => {
        const newTodoList = todoList.map(item => {
            if(id === item.id) {
                return Object.assign({}, item, {
                    checked: !item.checked
                })
            }
            return item
        })
        setTodoList(newTodoList)
    }

    const addTodo = (todo: StateProps) => {
        setTodoList([...todoList, todo])
    }

    return (
        <Context.Provider value={{
            todoList,
            changeTodo,
            addTodo
        }}>
            { props.children }
        </Context.Provider>
    )
}

export default Provider;