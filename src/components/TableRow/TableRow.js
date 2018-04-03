import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TableRow extends Component {

    handleDetails = () => {
        this.props.getDetails(this.props.github);
        
    }

    handleDelete = () => {
        let id = this.props.userId;
        this.props.deleteStudent(id);
    }
    render() {
        return (
            <tr>
                <td >{this.props.github}</td>
                <td><button onClick={this.handleDetails} >Details</button></td>
                <td><button onClick={this.handleDelete}>Delete</button></td>
            </tr>
        );
    }
}

TableRow.propTypes = {
    github: PropTypes.string,
    userId: PropTypes.string,
    deleteStudent: PropTypes.func,
    getDetails: PropTypes.func
}

export default TableRow;