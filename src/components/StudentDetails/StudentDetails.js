import React, { Component } from 'react';

class StudentDetails extends Component {
    render() {
        console.log(this.props.studentDetails);
        const details = this.props.studentDetails.data;

        return (
            <div>
                <img src={details.avatar_url} alt="profile pic" />
                <p>{details.login}</p>
                <a href={details.html_url}>GitHub Profile</a>
            </div>
        )
    }
}

export default StudentDetails;