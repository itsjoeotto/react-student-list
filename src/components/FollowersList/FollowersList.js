import React, { Component } from 'react';
import './FollowersList.css';

class FollowersList extends Component {


    render() {
        return (
            <div>
                {(this.props.studentDetails.followers) ?
                    this.props.studentDetails.followers.map(follower => {
                        return (
                            <a target="_blank" href={follower.html_url} key={follower.login}>{follower.login}</a>
                        )
                    }) : null}
            </div>
        )
    }
}

export default FollowersList;