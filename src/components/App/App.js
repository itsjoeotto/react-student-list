import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import StudentForm from '../StudentForm/StudentForm';
import StudentList from '../StudentList/StudentList';


class App extends Component {
    // Keep track of the student list
    state = {
      studentList: [],
      studentDetails: {
        showDetails: false,
        data: {},
        followers: []
      }
    };

  // This function is called by the StudentForm when the submit button is pressed
  addStudent = newStudent => {
    // POST your data here
    axios.post('http://localhost:5000/students', newStudent)
      .then(res => {
        let studentWithId = res.data;
        this.setState({
          studentList: [...this.state.studentList, studentWithId]
        });
      })
      .catch(err => {
        console.log('post err', err);
      })
  }

  getStudents = () => {
    axios.get('http://localhost:5000/students')
      .then(res => {
        this.setState({studentList: res.data});
      })
      .catch(err => {
        console.log('err', err);
      });
  }

  deleteStudent = id => {
    axios.delete(`http://localhost:5000/students/${id}`)
      .then(res => {
        //ominous...
        let remainingStudents = this.state.studentList.filter(index => index._id !== id);
        this.setState({studentList: remainingStudents});
      })
      .catch(err => {
        console.log('delete err', err);
      })
  }

  getDetails = student => {
    axios.get(`https://api.github.com/users/${student}?access_token=913f20e25e454b699cbf7b4d5f3ae7fd516cafc4`)
      .then(res => {
        let newDetails = {
          showDetails: true,
          data: res.data,
          followers: []
        }
        this.setState({studentDetails: newDetails});
        return axios.get(res.data.followers_url)
      })
      .then(res => {
        let details = {...this.state.studentDetails, followers: res.data};
        this.setState({studentDetails: details});
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidMount = () => {
    this.getStudents();
  }
 
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">GitHub Student List</h1>
        </header>
        <br/>
        <StudentForm addStudent={this.addStudent}/>
        <StudentList studentList={this.state.studentList} 
          deleteStudent={this.deleteStudent} 
          studentDetails={this.state.studentDetails}
          getDetails={this.getDetails}/>
      </div>
    );
  }
}

export default App;