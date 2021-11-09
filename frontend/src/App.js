import "./App.css";
import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter as Router , Route , Switch } from "react-router-dom";

import NavBar from "./Home/NavBar";
import AdminLogin from "./Admin/Login";
import PrivateRoute from "./Admin/PrivateRoute";
import PrivateScreen from "./Admin/PrivateScreen";

function App() {
  // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };
  return (
    <Router>
        <div className="container">
            <main>
            
              <Switch>
                  <Route path="/admin/:id/:name" exact component={PrivateScreen} />
                  <Route path="/login" exact component={AdminLogin} />
                  <Route path="/" exact component={NavBar} />
              </Switch>
            </main>
           
            <>
            {showButton && (
              <button onClick={scrollToTop} className="back-to-top">
                <i class="fa fa-arrow-circle-up" aria-hidden="true"></i>
              </button>
            )}
            {/* &#8679; is used to create the upward arrow */}
          </>
          </div>
    </Router>
  );
}

export default App;
