import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import NovelRow from './NovelRow';

export default class Novels extends Component {

  constructor(props) {
    super(props)
    this.state = {
      customers: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8070/novel')
      .then(res => {
        this.setState({
          customers: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.customers.map((res, i) => {
      return <NovelRow obj={res} key={i} />;
    });
  }

  render() {
    return (
    <div>      
      <div className="container">
        <div className="table-wrapper container">
              <Table striped bordered hover>
                  <thead>
                      <tr>
                          <th>Book Name</th>
                          <th>Author</th>
                          <th>Download URL</th>
                          <th>Image Source</th>
                          <th>Downloads</th>
                          <th>Hearts</th>
                      </tr>
                  </thead>
                  <tbody>
                      {this.DataTable()}
                  </tbody>
              </Table><br/>
          </div>
      </div>
    </div>
    );
  }
}