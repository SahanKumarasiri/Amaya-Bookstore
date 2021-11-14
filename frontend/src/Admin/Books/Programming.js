import {useState , useEffect} from "react";
import axios from "axios";
import { TextField , Button} from "@material-ui/core";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Programing = ()=>{

    const [bookName , setBookName] = useState("");
    const [author , setAuthor] = useState("");
    const [bookURL , setBookURL] = useState("");
    const [bookImage , setBookImage] = useState("");
    const downloads = -1;
    const hearts = -1;
    const category = "programming";
    const [loading, setLoading] = useState(false); //additional 
    const [isError, setIsError] = useState(false);

    const novelHandler = async (e)=>{
        e.preventDefault();

        setLoading(true);
        setIsError(false); //additional

        const config = {
            headers : {
                "Content-Type" : "application/json"
            }
        }

        try {
            const {data} = await axios.post("http://localhost:8070/programming/add" , {bookName , author , bookURL , bookImage , downloads , hearts , category} , config);
            toast("Success! Programming Book Added 😘")
            setLoading(false);

        } catch (error) {
            toast("Error! Programming not Added Duplicate Key Found: Book Name must be unique")
            setLoading(false);
            setIsError(true);
            setTimeout(()=>{
                
            } , 5000); //5s
        }
    }

    return(
        <div>
            <form onSubmit={novelHandler}>
                    <div className="card">
                        <div className="card-header">
                        ⚠️ This section is reserved only for the Admin ! 
                        </div>
                        <div className="card-body">
                            <center>
                                <h5 className="card-title">Add Programing Book</h5>
                                <TextField
                                    id="outlined-with-placeholder"
                                    label="Enter Book Name"
                                    placeholder="ex: example book"
                                    margin="normal"
                                    variant="outlined"                                  
                                    type="text"
                                    value={bookName}
                                    onChange={(e)=>setBookName(e.target.value)}
                                    required
                                /><br/>
                                <TextField
                                    id="outlined-with-placeholder"
                                    label="Enter Author"
                                    placeholder="ex: example author"
                                    margin="normal"
                                    variant="outlined"
                                    type="text"
                                    value={author}
                                    onChange={(e)=>setAuthor(e.target.value)}
                                    required
                                /><br/>
                                <TextField
                                    id="outlined-with-placeholder"
                                    label="Enter Download URL"
                                    margin="normal"
                                    variant="outlined"
                                    placeholder="URL"
                                    type="text"
                                    value={bookURL}
                                    onChange={(e)=>setBookURL(e.target.value)}
                                    required
                                /><br/>
                                <label class="form-label" for="customFile">Select a cover image</label><br/>
                                <TextField
                                    id="outlined-with-placeholder"
                                    label="URL of Photo"
                                    margin="normal"
                                    variant="outlined"
                                    placeholder="URL"
                                    type="text"
                                    value={bookImage}
                                    onChange={(e)=>setBookImage(e.target.value)}
                                    required
                                /><br/>
                                
                                {isError && <small className="mt-3 d-inline-block text-danger">Something went wrong. Please try again later.</small>}
                                    {/*decision*/}
                                <Button variant="contained" color="primary" type="submit"
                                 disabled={loading}>
                                    <i class="fa fa-upload" aria-hidden="true"></i> <h6 style={{marginLeft:"5px"}}> </h6> {loading ? 'Uploading...' : 'Upload'}  
                                </Button>
                                <ToastContainer style={{marginTop:"50px", position:"absolute"}}/>
                                
                            </center>
                        </div>
                    </div>
                </form>
        </div>
    )
    
}

export default Programing;