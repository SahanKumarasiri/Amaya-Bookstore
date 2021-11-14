import React , {useState} from "react";
import "./Comment.css"
import UnitComment from "./UnitComment"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";


const Comment = ({id , data})=>{
    var m_names = new Array("January", "February", "March", 
                "April", "May", "June", "July",
                "August", "September", 
                "October", "November", "December");

    var today = new Date();
    var curr_date = today.getDate();
    var curr_month = today.getMonth();
    var curr_year = today.getFullYear();
    var hours = today.getHours();
    var min = today.getMinutes();

    today = m_names[curr_month] + " " + curr_date + "/ " + curr_year + "|" + hours + ":" + min;

    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [message , setMessage] = useState("");
    const date = today;
    const [loading, setLoading] = useState(false); //additional 
    const [isError, setIsError] = useState(false);

    const commentHandler = async (e)=>{
        e.preventDefault();

        setLoading(true);
        setIsError(false); //additional

        const config = {
            headers : {
                "Content-Type" : "application/json"
            }
        }

        try {
            const {data} = await axios.post("http://localhost:8070/comment/add" , {name , message , date , email , id} , config);
            toast("Comment Posted 😘")
            setLoading(false);
            setName("")
            setEmail("")
            setMessage("")

        } catch (error) {
            toast("Error Occured while posting")
            setLoading(false);
            setIsError(true);
            setTimeout(()=>{
            } , 5000); //5s
        }
    }
   
    
    return(
        <div>
            <div className="row">
                <div className="col-sm-5 col-md-6 col-12 pb-4">
                    <h3>Comments</h3>
                    <div id="comment">
                        <UnitComment id={id}/>
                    </div>
                </div>
                <div className="col-lg-4 col-md-5 col-sm-4 offset-md-1 offset-sm-1 col-12 mt-4">
                    <form id="algin-form" onSubmit={commentHandler} className="form">
                        <div className="form-group">
                            <center><h6 style={{color:"white"}}>Leave a comment for : <span style={{color:"yellow"}}>{data}</span></h6></center> <label for="message">Message</label> <textarea name="msg" id="" msg cols="30" rows="5" className="form-control" style={{backgroundColor: "none"}} required value={message} onChange={(e)=> setMessage(e.target.value)}></textarea>
                        </div>
                        <div className="form-group"> <label for="name">Name</label> <input type="text" name="name" id="fullname" className="form-control" required value={name} onChange={(e)=> setName(e.target.value)}/> </div>
                        <div className="form-group"> <label for="email">Email</label> <input type="email" name="email" id="email" className="form-control" required value={email} onChange={(e)=> setEmail(e.target.value)}/> </div>
                        <div className="form-group">
                            <p className="text-secondary">Note: We do not put your email anywhere</p>
                        </div>
                        {isError && <small className="mt-3 d-inline-block text-danger">Something went wrong. Please try again later.</small>}
                        {/*decision*/}
                        <div className="form-group"> <button type="submit" id="post" className="btn" disabled={loading}>{loading ? 'Posting...' : 'Post Comment'}</button> <ToastContainer style={{marginTop:"50px"}}/> </div>
                    </form>
                </div>
            </div>
    </div>
    )
}

export default Comment;