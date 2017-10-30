import React from 'react';
import './App.css';
import uuid from 'uuid';
import $ from 'jquery';
import Projects from './Components/Projects'
import AddProject from './Components/AddProject';
import ToDos from './Components/ToDos';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      projects: [],
      todos: []
    }
  }

  getToDos() {
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({todos: data}, function() {
          console.log(this.state);
        });
      }.bind(this),
      error: function(xhx, status, err) {
        console.log(err);
      }
    })
  }

  getProjects() {
    this.setState({
      projects: [
        {
          id: uuid.v4(),
          title: 'Business Website',
          category: 'Web Design'
        },
        {
          id: uuid.v4(),
          title: 'Social App',
          category: 'Mobile Development'
        },
        {
          id: uuid.v4(),
          title: 'Ecommerce Shopping Cart',
          category: 'Web Development'
        }
      ]
    });
  }

  // on page load 
  // life cycle method
  componentWillMount() {
    this.getProjects();
    this.getToDos();
  }

  componentDidMount() {
    this.getToDos();
  }
  

  handleAddProject(newProject) {
    let projects = this.state.projects;
    projects.push(newProject);
    this.setState({projects: projects});
  }
  
  handleDeleteProject(id) {
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({projects: projects});
  }

  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)}/>
        <Projects onDelete={this.handleDeleteProject.bind(this)} projects={this.state.projects}/>
        <hr/>
        <ToDos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
