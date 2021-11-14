import React  from "react";
import { useParams } from "react-router";
import {Link} from "react-router-dom";
import axios from "axios";
import "./NavBar.css"
import Comment from "./Comment"

const Item = () =>{
    
    var m_names = new Array("January", "February", "March", 
                "April", "May", "June", "July",
                "August", "September", 
                "October", "November", "December");

    var today = new Date();
    var curr_date = today.getDate();
    var curr_month = today.getMonth();
    var curr_year = today.getFullYear();

    today = m_names[curr_month] + " " + curr_date + "/ " + curr_year;

    const{ id , bookName , author , url , image , downloads , hearts , category , sitemap , route} = useParams();
    const Image = decodeURIComponent(image);
    const URL = decodeURIComponent(url);
    const ROUTE = decodeURIComponent(route);

    const handleDownload = async ()=>{
        try {
            const {data} = await axios.put(`http://localhost:8070/${category}/update/${id}` , {downloads} );
  
        } catch (error) {
            alert(error)
        }
    }

    const handleHeart = async ()=>{
        try {
            const {data} = await axios.put(`http://localhost:8070/${category}/heart/${id}` , {hearts} );
  
        } catch (error) {
            alert(error)
        }
    }

    const Increment = ()=>{
        document.getElementById("increment").innerHTML = Number(downloads) + 1 + ` <i class="fa fa-download" aria-hidden="true"></i>`;
    }

    const Heart = ()=>{
        document.getElementById("heart").innerHTML = Number(hearts) + 1 +` <i class="fa fa-heart coloured" aria-hidden="true"></i>`;
        document.getElementById("like").innerHTML = `<span class="alert alert-danger role="alert">You Liked ` + bookName + "</span>";
    }

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
                            <li className="nav-item">
                                <Link to="/login" className="nav-link">Admin</Link>
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
                <i class="fa fa-commenting-o" aria-hidden="true"></i> කියමන් - Sayings
                </div>
                <div class="card-body">
                    <marquee>
                        <span  style={{marginLeft:"10px"}}><i className="fa fa-bolt"></i> <span className="badge badge-success">කියවීම මිනිසා සම්පූර්ණ කරයි !</span><span className="badge badge-secondary" style={{color:"white"}}>Reading maketh a full man !</span></span>
                        <span  style={{marginLeft:"10px"}}><i className="fa fa-bolt"></i> <span className="badge badge-dark">ඔබ පොත් සොයා යන විට පොත් ඔබ සොයා එයි !</span><span className="badge badge-danger" style={{color:"white"}}>Books come to you when you search for them !</span></span>
                        <span  style={{marginLeft:"10px"}}><i className="fa fa-bolt"></i> <span className="badge badge-success">පාඨකයා මිය යාමට පෙර ජීවිත දහසක් ජීවත් වේ !</span><span className="badge badge-secondary" style={{color:"white"}}>A reader lives a thousand lives before he dies !</span></span>
                        <span  style={{marginLeft:"10px"}}><i className="fa fa-bolt"></i> <span className="badge badge-dark">මට එය අහිමි වේ යැයි මම බිය වන තුරු, මම කිසි විටෙකත් කියවීමට ප්‍රිය නොකළෙමි !</span><span className="badge badge-danger" style={{color:"white"}}>Until I feared I would lose it, I never loved to read !</span></span>
                        <span  style={{marginLeft:"10px"}}><i className="fa fa-bolt"></i> <span className="badge badge-success">ඔබට කවදාවත් මට ගැලපෙන තරම් විශාල තේ කෝප්පයක් හෝ පොතක් ලබා ගත නොහැක !</span><span className="badge badge-secondary" style={{color:"white"}}>You can never get a cup of tea large enough or a book long enough to suit me !</span></span>
                        <span  style={{marginLeft:"10px"}}><i className="fa fa-bolt"></i> <span className="badge badge-dark">පොත් නැති කාමරයක් ආත්මයක් නැති ශරීරයක් වැනිය !</span><span className="badge badge-danger" style={{color:"white"}}>A room without books is like a body without a soul !</span></span>
                    </marquee>
                </div>
            </div>

            <div style={{marginLeft:"15px"}}>
                <Link to="/"><span>Dashbord</span ></Link> <i class="fa fa-chevron-right" aria-hidden="true"></i> <Link to={ROUTE}><span>{sitemap}</span ></Link> <i class="fa fa-chevron-right" aria-hidden="true"></i> <span>{bookName}</span >
            </div>
            <img src="https://media.giphy.com/media/1TgECF0mNVirC/giphy.gif" style={{float:"right" , width:"20%" , marginRight:"10px"}} className="img-thumbnail"/>

            <hr class="my-4"></hr>
            <center><h1 style={{fontFamily:"Copperplate, Papyrus, fantasy"}}>{sitemap}</h1></center>
            <hr class="my-4"></hr>
            

            <section>
                <nav className="nav">
                    <ul className="ul">
                        <center>
                        <li className="li"><Link to="/">Home</Link></li>
                            <li className="li"><Link to="/novel">නවකතා - Novels</Link></li>
                            <li className="li"><Link to="/adventure">අභිරහස් කතා - Adventure Stories</Link></li>
                            <li className="li"><a href="http://onlinesoftwaresolutions.000webhostapp.com/" target="_blank">Cracked Softwares</a></li>
                        </center>
                     </ul>
                </nav>
                
                <article>
                   
                    <div>
                        <div class="card border-success mb-3 polaroid" style={{maxWidth: "30rem" , display:"block" , marginLeft:"auto" , marginRight:"auto"}}>
                            <center>
                                <img src={Image} border="0'" alt={Image} className="img-thumbnail" style={{width:"800px" , height:"600px"}}/>
                                <div class="card-header" id="like">{bookName}</div>
                                <span className="span" id="heart" onClick={() => { handleHeart(); Heart();}}>{hearts} <i class="fa fa-heart" aria-hidden="true"></i></span> 
                                <span id="increment">  {downloads} <i class="fa fa-download" aria-hidden="true"></i></span><br/>
                                <div class="card-body text-success">
                                    <span className="badge badge-success">{author}</span><br/><br/>
                                    <a href={URL} target="_blank"><button className="btn btn-danger" onClick={() => { handleDownload(); Increment();}}><i class="fa fa-download" aria-hidden="true"></i> Download</button></a>
                                </div>
                            </center>
                        </div>
                    </div>
                    <Comment id={id} data={bookName}/>
                </article>
            </section>


          
        </div>
    )
}

export default Item;