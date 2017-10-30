import React from 'react';
import PropTypes from 'prop-types';

class ToDoItem extends React.Component {

    render() {
        let status = this.props.todo.completed ? 'Completed' : 'Pending';
        return (
            <li className="ToDoItem">
               <strong>{this.props.todo.title}</strong> - {status}
            </li>
        );
    }
}

export default ToDoItem;