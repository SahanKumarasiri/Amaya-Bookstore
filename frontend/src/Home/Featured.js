import axios from "axios";

const Featured = ({bookName , author , bookURL , bookImage , downloads})=>{
    const handleDownload = async ()=>{
      try {
          const {data} = await axios.put(`http://localhost:8070/novel/update/${author}` , {author , downloads} );

      } catch (error) {
          alert(error)
      }
      }
    return(
      <div class="card border-success mb-3" style={{maxWidth: "18rem" , display:"inline-block" , marginLeft:"10px" , width:"auto" , height:"auto"}}>
         <center>
            <img src={bookImage} border="0'" alt={bookName} className="img-thumbnail" style={{width:"200px" , height:"300px"}}/>
            <div class="card-header">{bookName}</div>
            <span><i class="fa fa-download" aria-hidden="true"></i> {downloads}</span>
              <div class="card-body text-success">
                <span>{author}</span><br/>
                <a href={bookURL}><button class="btn btn-danger" onClick={handleDownload}><i class="fa fa-download" aria-hidden="true"></i> Download</button></a>
            </div>
         </center>
      </div>
    )
}

export default Featured;