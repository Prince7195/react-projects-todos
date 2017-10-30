import React from 'react';
import PropTypes from 'prop-types';
import ToDoItem from './ToDoItem';

class ToDos extends React.Component {  

    render() {
        let ToDoItems;
        if(this.props.todos) {
            ToDoItems = this.props.todos.map(todo => {
                return (
                    <ToDoItem key={todo.title} todo={todo}/>
                );
            });
        }
        return (
            <div className="ToDos">
                <h3>ToDos</h3>
               {ToDoItems}
            </div>
        );
    }
}

export default ToDos;