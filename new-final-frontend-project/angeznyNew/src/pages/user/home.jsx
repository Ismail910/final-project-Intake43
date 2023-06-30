import React from 'react'
import '../../styles/home.css'
import cuteGirlImage from '../../assets/images/cute-freelance-girl-using-laptop-sitting-floor-smiling.jpg'
import logo1 from '../../assets/images/istockphoto-1339778028-612x612.jpg'
import logo2 from '../../assets/images/procedures-project-line-icon-with-checklist-vector.jpg'
import project from '../../assets/images/download (1).jfif'
const Home = () => {
  return (
    <div>
      <section>
        <div className="container">
          <div className="row">
            <div className="d-flex  row">
              <div className="col-md-6 col-12 mx-5">
                <p className="text1">
                  Are you asking for a
                  <span className="text1Word">
                    {' '}
                    <br></br>freelancer ?
                  </span>
                </p>
                <p className="text2">
                  Explore thousands of jobs <br />
                  explore thousands of jobs
                  <br />
                  explore thousands of jobs
                </p>
                <div className="textDiv d-flex justify-content-center">
                  <p className="textWelcome">
                    <span className="text1Word">We</span>lome to our website
                  </p>
                  <button className="textbutton">Explore</button>
                </div>
              </div>
              <div className="col-md-5 col-12 imgDiv">
                <img
                  className="imgside"
                  src={cuteGirlImage}
                  alt="Girl in a jacket"
                  width="410"
                  height="450"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-5">
        <div className="container">
          <div className="row">
            <div className="d-flex  row">
              <div className="col-md-6 col-12 mx-4 projectSide">
                <img src={logo1} alt="logo1" className="logo1 m-5"></img>
                <img src={logo1} alt="logo1" className="logo2 mt-5"></img>
                <img src={logo2} alt="logo2" className="logo1 mb-5"></img>
                <p className="projectText">
                  P<span className="projectColor">roject</span>s
                </p>
                <img src={logo2} alt="logo2" className="logo2 mx-5"></img>

                <img src={logo1} alt="logo1" className="logo1 mb-5"></img>
                <img src={logo2} alt="logo2" className="logo2 mx-5"></img>
              </div>

              <div className="col-md-5 col-12 projectImg">
                <img src={project} className="imgProject"></img>
                <img src={project} className="imgProject"></img>
                <img src={project} className="imgProject"></img>
                <img src={project} className="imgProject"></img>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
