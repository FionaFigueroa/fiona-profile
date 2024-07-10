import "./Portfolio.css";
import Navbar from "./Navbar";
import calcuImage2 from "./img/Calcu (2).png";
import fiona0218 from "./img/fiona3.png";

const Portfolio = () => {
  return (
    <>
      <Navbar />
      <div id="portfolio-info" className="bg-dark bg-gradient">
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col">
              <h1 className="fw-bold display-1 text-center mt-5 pt-5 text-white">
                Projects 
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div id="portfolio" className="container mt-5 p-5 bg-dark">
        <div className="row mt-5">
          <div className="col-md-6 portfolio-item">
            <div className="card">
              <img className="card-img-top" src={calcuImage2} alt="Calculator Project"/>
              <div className="card-body">
                <h4 className="card-title text-white">Calculator Project</h4>
              </div>
            </div>
          </div>
          <div className="col-md-6 portfolio-item">
            <div className="card">
              <img className="card-img-top" src={fiona0218} alt="My React Project"/>
              <div className="card-body">
                <h4 className="card-title text-white">My React Project</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
