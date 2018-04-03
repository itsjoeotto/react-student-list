import React, { Component } from 'react';

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

export default TableRow;