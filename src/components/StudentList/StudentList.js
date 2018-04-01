import React, { Component } from 'react';
import './StudentList.css';
import TableRow from '../TableRow/TableRow';
import StudentDetails from '../StudentDetails/StudentDetails';

class StudentList extends Component {
    render() {
        return (
            <div>
                <table className="student-list">
                    <tbody>
                        <tr>
                            <td>User Name</td>
                        </tr>

                        {this.props.studentList.map(student => {
                            return (
                                <TableRow key={student._id}
                                    github={student.github}
                                    userId={student._id}
                                    deleteStudent={this.props.deleteStudent}
                                    getDetails={this.props.getDetails} />
                            );
                        })}
                    </tbody>
                </table>
                {(this.props.studentDetails.showDetails) ?
                 <StudentDetails studentDetails={this.props.studentDetails}/> :
                 null }
            </div>
        );
    }
}

export default StudentList