import React from "react";
import "../NavBar.css"
import { Link } from "react-router-dom";
import crypto from "crypto"


export default class Item extends React.Component {
  state = {
    query: "",
    data: [],
    filteredData: [],
    today:''
  };

  handleInputChange = event => {
    const query = event.target.value;

    this.setState(prevState => {
      const filteredData = prevState.data.filter(element => {
        return element.noteName.toLowerCase().includes(query.toLowerCase());
      });

      return {
        query,
        filteredData
      };
    });
  };

  getData = () => {
    fetch(`http://localhost:8070/ol`)
      .then(response => response.json())
      .then(data => {
        const { query } = this.state;
        const filteredData = data.filter(element => {
          return(
            element._id.toLowerCase().includes(query.toLowerCase()) >= 0 ||
            element.noteName.toLowerCase().includes(query.toLowerCase()) >= 0 ||
            element.author.toLowerCase().includes(query.toLowerCase()) >= 0 ||
            element.noteImage.toLowerCase().includes(query.toLowerCase()) >= 0 ||
            element.noteURL.toLowerCase().includes(query.toLowerCase()) >= 0 ||
            element.downloads.toLowerCase().includes(query.toLowerCase()) >= 0 ||
            element.hearts.toLowerCase().includes(query.toLowerCase()) >= 0 ||
            element.category.toLowerCase().includes(query.toLowerCase()) >= 0
          )
        });

        this.setState({
          data,
          filteredData
        });
      });
  };

  Date(){
    var m_names = new Array("January", "February", "March", 
    "April", "May", "June", "July",
    "August", "September", 
    "October", "November", "December");

    var today = new Date();
    var curr_date = today.getDate();
    var curr_month = today.getMonth();
    var curr_year = today.getFullYear();

    today = m_names[curr_month] + " " + curr_date + "/ " + curr_year;

    this.setState({
        today
    })

  }

  componentWillMount() {
    this.getData();
    this.Date();
  }

  
 
  render() {
    return (
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
                        <li><span style={{float:"right"}}>{this.state.today}</span></li>
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
                            <Link className="nav-link" to="/"><i className="fa fa-book" aria-hidden="true"></i> Home </Link>
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
                <Link to="/"><span>Dashbord</span ></Link> <i class="fa fa-chevron-right" aria-hidden="true"></i> <Link to="/ol"><span>සාමාන්‍ය පෙළ කෙටි සටහන් - Ordinary Level Notes</span ></Link>
            </div>
            <img src="https://media.giphy.com/media/1TgECF0mNVirC/giphy.gif" style={{float:"right" , width:"20%" , marginRight:"10px"}} className="img-thumbnail"/>

            <hr class="my-4"></hr>
            <center><h1 style={{fontFamily:"Copperplate, Papyrus, fantasy"}}>සාමාන්‍ය පෙළ කෙටි සටහන් - Ordinary Level Notes</h1></center>
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
                    <div class="input-group rounded">
                      <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" onChange={this.handleInputChange} value={this.state.query} />
                      <span class="input-group-text border-0" id="search-addon" style = {{float:"right"}}>
                        <i class="fa fa-search" aria-hidden="true"></i>
                      </span>
                    </div>
                    <br/>
                    <div style={{ width:"auto" , height:"auto"  , maxWidth:"auto"}}>
                
                        <center>
                            <div>
                                {this.state.filteredData.length === 0 ? (
                                                <div className="alert alert-danger" style={{marginLeft:""}}>
                                                    <center>The book is not here 
                                                    <img src="https://i.ibb.co/n6ympXY/notfound.jpg" style={{width:"10%"}}/></center>
                                                </div>
                                            ): (this.state.filteredData.map(i => 
                                <div style={{display:"inline-block" , padding: "10px 1px 10px 10px"}}>
                                    <center>
                                        <div className="card border-primary mb-3" > 
                                            <div className="card-body text-dark">
                                            <img src={i.noteImage} border="0'" alt={i.noteImage} className="img-thumbnail zoom" style={{width:"200px" , height:"300px"}}/>
                                            
                                            <p ><b>{i.noteName}</b></p>
                                            <p className="badge badge-success">{i.author}</p><br/>
                                            <span style={{float:"left"}} className="coloured"><i class="fa fa-heart" aria-hidden="true"></i> {i.hearts}</span>
                                            <span style={{float:"right"}}><i class="fa fa-download" aria-hidden="true"></i> {i.downloads}</span>
                                            <Link to= {`/view/${i._id}/${crypto.randomBytes(40).toString("hex")}/${i.noteName}/${i.author}/${encodeURIComponent(i.noteURL)}/${encodeURIComponent(i.noteImage)}/${i.downloads}/${i.hearts}/${i.category}/${"සාමාන්‍ය පෙළ කෙටි සටහන් - Ordinary Level Notes"}/${encodeURIComponent("/ol")}`}><button className="btn btn-primary" style={{width:"100%"}}><i class="fa fa-eye" aria-hidden="true"></i> View</button></Link>
                                            </div>
                                        
                                        </div>
                                    </center>

                                </div>))}
                            </div>
                        </center>
                
                    </div>
                </article>
            </section>
        </div>
    
    );
  }
}