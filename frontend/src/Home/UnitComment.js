import React from "react";

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
        return element.name.toLowerCase().includes(query.toLowerCase());
      });

      return {
        query,
        filteredData
      };
    });
  };

  getData = () => {
    fetch(`http://localhost:8070/comment`)
      .then(response => response.json())
      .then(data => {
        const { query } = this.state;
        const filteredData = data.filter(element => {
            if(element.id === this.props.id){
                return(
                    element._id.toLowerCase().includes(query.toLowerCase()) >= 0 ||
                    element.name.toLowerCase().includes(query.toLowerCase()) >= 0 ||
                    element.message.toLowerCase().includes(query.toLowerCase()) >= 0 ||
                    element.email.toLowerCase().includes(query.toLowerCase()) >= 0 ||
                    element.date.toLowerCase().includes(query.toLowerCase()) >= 0 ||
                    element.id.toLowerCase().includes(query.toLowerCase()) >= 0     
                  )
            }
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
        <div>
           
            <div style={{ width:"auto" , height:"auto"  , maxWidth:"auto"}}>
        
                <center>
                    <div>
                        {this.state.filteredData.length === 0 ? (
                                        <div className="alert alert-danger" style={{marginLeft:""}}>
                                            <center>
                                                No comments yet
                                            </center>
                                        </div>
                                    ): (this.state.filteredData.map(i => 
                        <div className="comment mt-4 text-justify float-left"> <img src="https://i.imgur.com/yTFUilP.jpg" alt="" className="rounded-circle" width="40" height="40" />
                            <h6> {i.name}</h6> <span style={{fontSize:"10px"}}>- {i.date}</span> <br />
                            <p>{i.message}</p>
                        </div>
                        ))}
                    </div>
                </center>
        
            </div>
              
        </div>
    
    );
  }
}