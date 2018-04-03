import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FollowersList from '../FollowersList/FollowersList';
import './StudentDetails.css';

class StudentDetails extends Component {
    render() {
        const details = this.props.studentDetails.data;

        return (
            <div>
                <img src={details.avatar_url} alt="profile pic" />
                <p>{details.login}</p>
                <a target="_blank" href={details.html_url}>GitHub Profile</a>
                <FollowersList studentDetails={this.props.studentDetails} />
            </div>
        )
    }
}

StudentDetails.propTypes = {
    studentDetails: PropTypes.object

}

export default StudentDetails;