import React from 'react'
import '../../styles/home.css'
import cuteGirlImage from '../../assets/images/cute-freelance-girl-using-laptop-sitting-floor-smiling.jpg';

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
                  <span className="text1Word"> <br></br>freelancer ?</span>
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
                <img className='imgside'
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
    </div>
  )
}

export default Home
