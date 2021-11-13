import { useEffect } from "react";
import { Link , useParams} from "react-router-dom";
import "../Home/NavBar.css";
import Devider from "./Devider";

const PrivateScreen = ({history} , props)=>{

    useEffect(()=>{
        if(!localStorage.getItem("authToken")){  //push a user if he already logged in
            history.push("/admin/:id/:name");
        }

    } , [history])  //dependency array

    const logoutHandler = ()=>{
        localStorage.removeItem("authToken");
        history.push("/login");
    }
    var m_names = new Array("January", "February", "March", 
    "April", "May", "June", "July",
    "August", "September", 
    "October", "November", "December");

    var today = new Date();
    var curr_date = today.getDate();
    var curr_month = today.getMonth();
    var curr_year = today.getFullYear();

    today = m_names[curr_month] + " " + curr_date + "/ " + curr_year;

    const { name } = useParams();
    return(
        <div id="header">
        <div className="topbar">
            <div className="container">
            <div className="row">
                <div className="col-sm-8">
                <ul>
                    <li><i className="fa fa-volume-control-phone" aria-hidden="true"></i> 0776135690</li>
                    <li>|</li>
                    <li><a href="mailto:" target="_blank"><i className="fa fa-envelope-o" aria-hidden="true"></i> kumarasirisahan@gmail.com</a></li>
                    <li>|</li>
                    <li><i className="fa fa-clock-o" aria-hidden="true"></i> 24/7 Hours Working</li>
                    <li><span style={{float:"right"}}>{today}</span></li>
                </ul>
                </div>
                <div className="col-sm-4">
                <ul className="social-icon">
                    <li className="followus-label">Follow Us:</li>
                    <li><a href="https://www.facebook.com/Sahan.R.Inc" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                    <li><a href="https://wa.link/yrxoew" target="_blank"><i className="fa fa-whatsapp" aria-hidden="true"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/sahankumarasiri" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                </ul>
                </div>
            </div>
            </div>
        </div>
        <header>
            <div className="container">
            <div className="row">
                <div className="col-12">
                <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="#"><img src="https://i.ibb.co/DYJXBy6/logo1.png" alt="logo" style={{width:"73%"}} className="img-thumbnail"/></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbartoggle" aria-controls="navbartoggle" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbartoggle">
                    <ul className="navbar-nav float-right">
                        <li className="nav-item">
                            <Link to="/" className="nav-link"><i className="fa fa-book" aria-hidden="true"></i> Home </Link>
                        </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">වර්ගීකරණය - Category</a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link className="dropdown-item" to="/novel"><i class="fa fa-check-square-o" aria-hidden="true"></i> නවකතා - Novels</Link>
                                <Link className="dropdown-item" to="/programming"><i class="fa fa-check-square-o" aria-hidden="true"></i> Programming Languages</Link>
                                <Link className="dropdown-item" to="/adventure"><i class="fa fa-check-square-o" aria-hidden="true"></i> අභිරහස් කතා - Adventure/Horror</Link>
                                <Link className="dropdown-item" to="/ol"><i class="fa fa-check-square-o" aria-hidden="true"></i> සාමාන්‍ය පෙළ කෙටි සටහන් - Ordinary Level Notes</Link>
                                <Link className="dropdown-item" to="/al"><i class="fa fa-check-square-o" aria-hidden="true"></i> උසස් පෙළ කෙටි සටහන් - Advanced Level Notes</Link>
                        </div>
                        </li>   
                        <li className="nav-item active">
                            <Link to="#" className="nav-link">Admin</Link>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Contact Us</a>
                        </li>               
                    </ul>
                    </div>
                </nav>
                </div>
            </div>
            </div>  
        </header>
        <div class="card">
            <div class="card-header">
            
            <ul class=" nav-flex-icons" style={{float:"right" , listStyleType:"none"}}>
                <li class="nav-item avatar dropdown">
                <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink-5" data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false">
                    <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg" class="rounded-circle z-depth-0 md-avatar" alt="avatar image"/>
                    <span>{name}</span>
                </a>
                <div class="dropdown-menu dropdown-menu-right dropdown-secondary" aria-labelledby="navbarDropdownMenuLink-5">
                    <a class="dropdown-item" href="https://github.com/SahanKumarasiri"><i class="fa fa-github" aria-hidden="true"></i> GitHub</a>
                    <a class="dropdown-item" href="#" onClick={logoutHandler}><i class="fa fa-sign-out" aria-hidden="true"></i> Logout</a>
                </div>
                </li>
            </ul>
        </div>
        </div>
        <div style={{marginLeft:"15px"}}>
                <Link to="/"><span>Dashbord</span ></Link> <i class="fa fa-chevron-right" aria-hidden="true"></i> <Link to="/login"><span>Admin Login</span ></Link> <i class="fa fa-chevron-right" aria-hidden="true"></i> <span>{name}</span >
            </div>
        <hr class="my-4"></hr>
        <center><h1 style={{fontFamily:"Copperplate, Papyrus, fantasy"}}>Welcome Admin</h1></center>
        <hr class="my-4"></hr>

        <section>
            <article className="article">
                <center>
                    <div className="container" style={{width:"100%"}}>
                        <Devider/>
                    </div>

                </center>
            </article>
        </section>


      
    </div>
        
    
          
    )

}

export default PrivateScreen;