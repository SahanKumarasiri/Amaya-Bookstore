import React from "react";

const Footer = ()=>{
    var m_names = new Array("January", "February", "March", 
                "April", "May", "June", "July",
                "August", "September", 
                "October", "November", "December");

    var today = new Date();
    var curr_year = today.getFullYear();

    today = curr_year;
    return(
        <div className="container">
                <footer class="bg-dark text-center text-white">
            <div className="container p-4 pb-0">
                <section className="">
                <form action="">
                    <div className="row d-flex justify-content-center">
                    <div className="col-auto">
                        <p className="pt-2">
                        <strong>Sign up for our newsletter</strong>
                        </p>
                    </div>
                    <div className="col-md-5 col-12">
                        <div className="form-outline form-white mb-4">
                        <input type="email" id="form5Example29" className="form-control" placeholder="example@gmail.com"/>
                        <label className="form-label" for="form5Example29">Email address</label>
                        </div>
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-outline-light mb-4">
                        Subscribe
                        </button>
                    </div>
                    </div>
                </form>
                </section>
            </div>
            <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                © {today} Copyright:
                <a className="text-white"> අමායා පොත් මැදුර</a>
            </div>
            </footer>
        </div>
    )
}

export default Footer;