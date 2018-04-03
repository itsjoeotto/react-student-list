import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './StudentList.css';
import TableRow from '../TableRow/TableRow';
import StudentDetails from '../StudentDetails/StudentDetails';

class StudentList extends Component {
    render() {
        return (
            <div>
                <table className={(!this.props.studentDetails.showDetails) ? "student-list" : "student-list-with-details"}>
                    <tbody>
                        <tr>
                            <td>User Name</td>
                            <td><br/></td>
                            <td><br/></td>
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
                        <tr>
                            <td><br/></td>
                            <td><br/></td>
                            <td><br/></td>
                        </tr>
                    </tbody>
                </table>
                {(this.props.studentDetails.showDetails) ?
                 <StudentDetails className="details" studentDetails={this.props.studentDetails}/> :
                 null }
            </div>
        );
    }
}

StudentList.propTypes = {
    studentList: PropTypes.array,
    studentDetails: PropTypes.object,
    deleteStudent: PropTypes.func,
    getDetails: PropTypes.func,
}

export default StudentList