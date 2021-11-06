import "./App.css"
import { useEffect, useState } from "react";

import NavBar from "./Home/NavBar";

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
    <div className="container">
      <NavBar/>
       <>
      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          <i class="fa fa-arrow-circle-up" aria-hidden="true"></i>
        </button>
      )}
      {/* &#8679; is used to create the upward arrow */}
    </>
    </div>
  );
}

export default App;
