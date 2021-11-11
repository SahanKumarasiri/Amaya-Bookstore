import React , {useEffect} from "react";
import {Link} from "react-router-dom";
import "./NavBar.css"
import Featured from "./Featured"
import AdventureFeatured from "./AdventureFeatured"
import ProgrammingFeatured from "./ProgrammingFeatured"

const NavBar = () =>{
    
    var m_names = new Array("January", "February", "March", 
                "April", "May", "June", "July",
                "August", "September", 
                "October", "November", "December");

    var today = new Date();
    var curr_date = today.getDate();
    var curr_month = today.getMonth();
    var curr_year = today.getFullYear();

    today = m_names[curr_month] + " " + curr_date + "/ " + curr_year;

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
                            <li className="nav-item active">
                            <a className="nav-link" href="#"><i className="fa fa-book" aria-hidden="true"></i> Home </a>
                            </li>
                            <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">වර්ගීකරණය - Category</a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#"><i class="fa fa-check-square-o" aria-hidden="true"></i> නවකතා - Novels</a>
                                <a className="dropdown-item" href="#"><i class="fa fa-check-square-o" aria-hidden="true"></i> Programming Languages</a>
                                <a className="dropdown-item" href="#"><i class="fa fa-check-square-o" aria-hidden="true"></i> අභිරහස් කතා - Adventure/Horror</a>
                                <a className="dropdown-item" href="#"><i class="fa fa-check-square-o" aria-hidden="true"></i> සාමාන්‍ය පෙළ කෙටි සටහන් - Ordinary Level Notes</a>
                                <a className="dropdown-item" href="#"><i class="fa fa-check-square-o" aria-hidden="true"></i> උසස් පෙළ කෙටි සටහන් - Advanced Level Notes</a>
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
          
            <img src="https://media.giphy.com/media/1TgECF0mNVirC/giphy.gif" style={{float:"right" , width:"20%" , marginRight:"10px"}} className="img-thumbnail"/>

            <hr class="my-4"></hr>
            <center><h1 style={{fontFamily:"Copperplate, Papyrus, fantasy"}}>ප්‍රසිද්ධ පොත් - Most Popular Books</h1></center>
            <hr class="my-4"></hr>
            

            <section>
                <nav className="nav">
                    <ul className="ul">
                        <center>
                            <li className="li"><a class="active" href="#home">Home</a></li>
                            <li className="li"><a href="#news">නවකතා - Novels</a></li>
                            <li className="li"><a href="#contact">අභිරහස් කතා - Adventure Stories</a></li>
                            <li className="li"><a href="http://onlinesoftwaresolutions.000webhostapp.com/" target="_blank">Cracked Softwares</a></li>
                        </center>
                     </ul>
                </nav>
                
                <article>
                    <div className="card">
                        <div className="card-header">
                            Featured <i class="fa fa-bookmark-o" aria-hidden="true"></i>
                        </div>
                        <div className="card-body">
                            <center>
                                <h5 className="card-title">ලෝක පූජිත කතුවරු - World famous authors 📚✍️</h5>
                           
                                <p>
                                    <a href="https://bit.ly/300huVO" target="_blank"><img src="JK-Rowling.jpg" style={{width:"20%"}} className="zoom" title="JK Rowling"/></a>
                                    <a href="https://bit.ly/3qdQmOe" target="_blank"><img src="martin.jpg" style={{width:"20%"}} className="zoom" title="Martin Wickramasinghe"/></a>
                                    <a href="https://bit.ly/3kf3bnk" target="_blank"><img src="sibil.jpg" style={{width:"20%"}} className="zoom" title="Sibil Weththasinghe"/></a>
                                    <a href="https://bit.ly/3bMeVJp" target="_blank"><img src="steve.jpg" style={{width:"23%"}} className="zoom"title="Steve McConnell"/></a><br/>
                
                                </p>
                            </center>
                        </div>
                    </div><br/><br/>
                    <div style={{display:"inline-grid" , marginLeft:"5px"}}>
                            <Featured />
                    </div>
                    <div style={{display:"inline-grid" , marginLeft:"5px"}}>
                             <AdventureFeatured />
                    </div>
                    <div style={{display:"inline-grid" , marginLeft:"5px"}}>
                             <ProgrammingFeatured/>
                    </div>
                </article>
            </section>


          
        </div>
    )
}

export default NavBar;