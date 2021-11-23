import * as React from 'react';
import { useState } from 'react';
import { Tabs, TabPane } from '@douyinfe/semi-ui';
import { TodoItem } from '../../components';
import { StateProps } from '../Provider';

interface IProps {
    todoList: StateProps[];
}

const TodoList: React.FC<IProps> = ({ todoList }) => {
    const todoListDom = todoList.map(item => <TodoItem key={item.id} todo={item} />)
    const activeListDom = todoList.map(item => {
        if(item.checked === false) {
            return item
        }
    })
    const doneListDom = todoList.map(item => {
        if(item.checked === true) {
            return item
        }
    })
    const renderDom = (tag: string) => {
        if (tag === 'All') {
            return todoListDom
        }
        if (tag === 'Active') {
            return activeListDom
        }
        if (tag === 'Done') {
            return doneListDom
        }
    }

    return (
        <div className="todo-list" style={{width: '600px', marginTop: '20px'}}>
            <Tabs>
                {
                    ['All', 'Active', 'Done'].map((item, key) => {
                        const itemKey = (key + 1).toString()
                        return <TabPane tab={item} itemKey={itemKey} key={itemKey}>
                            { todoListDom }
                        </TabPane>
                    })
                }
            </Tabs>
        </div>
    )
}

export default TodoList;