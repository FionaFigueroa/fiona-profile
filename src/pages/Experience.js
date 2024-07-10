import "./Experience.css";
import Navbar from "./Navbar";
import fiona18 from "./img/experience 2.jpg";
import fiona19 from "./img/experience 3.jpg";
import fiona20 from "./img/experience1.jpg";

const Experience = () => {
  return (
    <>
      <Navbar />
      <div id="experience-info" className="bg-secondary bg-gradient">
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col">
              <h1 className="fw-bold display-1 text-center mt-3 pt-3">
                Experience Page
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="card box1 text-center shadow p-5">
          <h2>On-The-Job Training</h2>
          <hr />
          <div className="row">
            <div className="col-md-4">
              <img src={fiona18} className="img-fluid mb-3" alt="Experience 3" />
            </div>
            <div className="col-md-4">
              <img src={fiona19} className="img-fluid mb-3" alt="Experience 2" />
            </div>
            <div className="col-md-4">
              <img src={fiona20} className="img-fluid mb-3" alt="Experience 1" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};



export default Experience;
