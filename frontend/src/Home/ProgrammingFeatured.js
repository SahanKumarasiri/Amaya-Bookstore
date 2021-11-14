import React from "react";
import "./NavBar.css"
import { Link } from "react-router-dom";
import crypto from "crypto"


export default class ProgrammingFeatured extends React.Component {
  state = {
    query: "",
    data: [],
    filteredData: []
  };

  handleInputChange = event => {
    const query = event.target.value;

    this.setState(prevState => {
      const filteredData = prevState.data.filter(element => {
        return element.name.toLowerCase().includes(query.toLowerCase());
      });

      return {
        query,
        filteredData
      };
    });
  };

  getData = () => {
    fetch(`http://localhost:8070/programming`)
      .then(response => response.json())
      .then(data => {
        const { query } = this.state;
        const filteredData = data.filter(element => {
          return(
            element._id.toLowerCase().includes(query.toLowerCase()) >= 0 ||
            element.bookName.toLowerCase().includes(query.toLowerCase()) >= 0 ||
            element.author.toLowerCase().includes(query.toLowerCase()) >= 0 ||
            element.bookURL.toLowerCase().includes(query.toLowerCase()) >= 0 ||
            element.bookImage.toLowerCase().includes(query.toLowerCase()) >= 0 ||
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

  componentWillMount() {
    this.getData();
  }

 
  render() {
    return (
      <div className="polaroid" style={{ width:"auto" , height:"auto"  , maxWidth:"auto"}}>
           
      <div>
          {this.state.filteredData.length === 0 ? (
                        <h1></h1>
                      ): (this.state.filteredData.map(i => 
          <p>
              <center>
                <div className="card border-primary mb-3" > 
                    <div className="card-body text-dark">
                      <img src={i.bookImage} border="0'" alt={i.bookName} className="img-thumbnail zoom" style={{width:"200px" , height:"300px"}}/>
                      
                      <p ><b>{i.bookName}</b></p>
                      <p className="badge badge-success">{i.author}</p><br/>
                      <span style={{float:"left"}} className="coloured"><i class="fa fa-heart" aria-hidden="true"></i> {i.hearts}</span>
                      <span style={{float:"right"}}><i class="fa fa-download" aria-hidden="true"></i> {i.downloads}</span>
                      <Link to= {`/view/${i._id}/${crypto.randomBytes(40).toString("hex")}/${i.bookName}/${i.author}/${encodeURIComponent(i.bookURL)}/${encodeURIComponent(i.bookImage)}/${i.downloads}/${i.hearts}/${i.category}/${"Programming Books"}/${encodeURIComponent("/programming")}`}><button className="btn btn-primary" style={{width:"100%"}}><i class="fa fa-eye" aria-hidden="true"></i> View</button></Link>
                    </div>
                
                </div>
              </center>

          </p>))}
      </div>
       
     </div>
    );
  }
}