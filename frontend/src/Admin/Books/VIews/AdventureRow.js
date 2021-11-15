import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default class AdventureRow extends Component {

    constructor(props) {
        super(props);
        this.deleteCustomer = this.deleteCustomer.bind(this);
    }

    deleteCustomer() {
        axios.delete('http://localhost:8070/adventure/delete/' + this.props.obj._id)
            .then((res) => {
                toast("Success! Adventure Deleted 😘")
                alert("Deleted")
            }).catch((error) => {
                console.log(error)
            })
            
    }

    render() {
        return (
            <tr>
                <td style={{color:"gray"}}>{this.props.obj.bookName}</td>
                <td style={{color:"gray"}}>{this.props.obj.author}</td>
                <td style={{color:"gray"}}>{this.props.obj.bookURL}</td>
                <td style={{color:"gray"}}><img src={this.props.obj.bookImage} style={{width:"200px" , height:"300px"}}/></td>
                <td style={{color:"gray"}}>{this.props.obj.downloads}</td>
                <td style={{color:"gray"}}>{this.props.obj.hearts}</td>
    
                <td style={{width:"250px"}}>
                    
                        <Button size="sm" onClick={this.deleteCustomer} variant="danger"><i class="fa fa-window-close" aria-hidden="true" ></i> Delete</Button>
                    
                </td>
                <ToastContainer style={{marginTop:"50px"}}/>
            </tr>
        );
    }
}