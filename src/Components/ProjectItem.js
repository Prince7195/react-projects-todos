import React from 'react';
import PropTypes from 'prop-types';

class ProjectItem extends React.Component {

    deleteProject() {
        // console.log(this.props.project);
        this.props.onDelete(this.props.project.id);
    }

    render() {
        return (
            <li className="Project">
               <strong>{this.props.project.title}</strong> - {this.props.project.category} <a href="#" onClick={this.deleteProject.bind(this)}>x</a>
            </li>
        );
    }
}

ProjectItem.propTypes = {
    projects: PropTypes.object,
    onDelete: PropTypes.func
}

export default ProjectItem;