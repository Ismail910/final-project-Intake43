// import React from 'react'
import React, { useState,useEffect } from 'react';
import '../../styles/home.css'
import cuteGirlImage from '../../assets/images/cute-freelance-girl-using-laptop-sitting-floor-smiling.jpg'
import logo1 from '../../assets/images/istockphoto-1339778028-612x612.jpg'
import logo2 from '../../assets/images/procedures-project-line-icon-with-checklist-vector.jpg'
import project from '../../assets/images/download (1).jfif'
import flag1 from '../../assets/images/download (2).png'
import flag2 from '../../assets/images/download.png'
import flag3 from '../../assets/images/flag-3d-round-250.png'
import bus1 from '../../assets/images/bussiness/bus5.jpeg'
import bus2 from '../../assets/images/bussiness/bus3.png'
import bus3 from '../../assets/images/bussiness/bus4.jpg'
import event from '../../assets/images/images.png'
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

import axios from 'axios';


const Home = () => {
  const [totalCountries, setTotalCountries] = useState(0);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/user/countCountry')
      .then(response => {
        console.log(response.data['countryCount']);
        setTotalCountries(response.data['countryCount'] || 0);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);


  // totalprojects

  const [totalProjects, setTotalProjects] = useState(0);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/projects/count')
      .then(response => {
        console.log(response.data);
        setTotalProjects(response.data['countProject'] || 0);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);



  return (
    <div>
      <section className='SlidShow'>
      <MDBCarousel showControls showIndicators>
      <MDBCarouselItem
        className='w-100 d-block imgSlidshow'
        itemId={1}
        src={bus1}
        alt='...'
      >
        <h5 className='slidShowTitle'>First slide label</h5>
        <p className='FontSlidshow'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block imgSlidshow'
        itemId={2}
        src={bus2}
        alt='...'
      >
        <h5 className='slidShowTitle'>Second slide label</h5>
        <p className='FontSlidshow'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block imgSlidshow'
        itemId={3}
        src={bus3}
        alt='...'
      >
        <h5 className='slidShowTitle'>Third slide label</h5>
        <p className='FontSlidshow'>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </MDBCarouselItem>
    </MDBCarousel>

      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="d-flex  row justify-content-around">
              <div className="col-md-6 col-12 mb-3 textFirst mt-5 ">
                <p className="text1 ">
                  Are you asking for a
                  <span className="text1Word">
                   
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
              <div className="col-md-5 col-12 imgDiv mt-5">
                <img
                  className="imgside"
                  src={cuteGirlImage}
                  alt="Girl in a jacket"
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
            <div className="d-flex  row justify-content-around">
              <div className="col-lg-6 col-12  projectSide row d-flex justify-content-center">
                <div className="col-12 d-flex justify-content-center">
                  <img src={logo1} alt="logo1" className="logo1 m-5"></img>
                  <img src={logo1} alt="logo1" className="logo2 mt-5"></img>
                  <img src={logo2} alt="logo2" className="logo1 mb-5"></img>
                </div>
                <div className="col-12 d-flex justify-content-center">
                <p className="projectText">
                  P<span className="projectColor">roject</span>s
                </p>
                </div>
                <div className="col-12 d-flex justify-content-center ">
                <img src={logo2} alt="logo2" className="logo2 mx-3"></img>
                <img src={logo1} alt="logo1" className="logo1 mb-5"></img>
                <img src={logo2} alt="logo2" className="logo2 mx-3"></img>
                </div>
              </div>

              <div className="col-lg-6 col-12 projectImg row">
              
                <img src={project} className="imgProject col-md-5 col-12"></img>
                <img src={project} className="imgProject col-md-5 col-12"></img>
                <img src={project} className="imgProject col-md-5 col-12"></img>
                <img src={project} className="imgProject col-md-5 col-12"></img>
              </div>
            </div>
          </div>
        </div>
      </section>

      

<section>
<div className='container'>
<div className='row'>
<p className="ComText pt-5" style={{ color: ' black' }}>Statistics</p>
<div className="d-flex row justify-content-center">
<div className="col-md-5 col-12 comDiv d-flex justify-content-center">

<div className='Analysis'>
<i class="fa-solid fa-earth-americas icons " style={{ fontSize: '6rem' }}></i>
<br></br>{totalCountries} +
  </div>
</div>
<div className='colum col-1'  ></div>
<div className="col-md-4 col-12 comDiv d-flex justify-content-center">
<div className='Analysis'>
<i class="fa-solid fa-laptop  icons" style={{ fontSize: '6rem' }}></i>
<br></br>
{totalProjects} +  
</div>
</div>

</div>

</div>
</div>
</section>



    </div>
  )
}

export default Home
// <section className="comSection">
//         <div className="container">
//           <div className="row">
//             <p className="ComText">Our communities</p>
//             <div className="d-flex row justify-content-center">
//               <div className="col-md-3 col-12 comDiv d-flex justify-content-center">
//                 <img src={flag1} className="comImage1"></img>
//                 <p className="commText">MOROCCO</p>
//               </div>
//               <div className="col-md-3 col-12 comDiv d-flex justify-content-center">
//                 <img src={flag2} className="comImage2 "></img>
//                 <p className="commText">SAUDI</p>
//               </div>
//               <div className="col-md-3 col-12 comDiv d-flex justify-content-center">
//                 <img src={flag3} className="comImage3"></img>
//                 <p className="commText">UNITED STATES</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>



// <section>
// <div className='container'>
// <div className='row'>
// <div className="d-flex row justify-content-between">
// <div className="col-md-5 col-12 comDiv d-flex justify-content-center">
// <div>
// <img src={event}></img>
// <br></br>
// <p className="ComText pt-5" style={{ color: ' black' }}>Count down</p>

// </div>

// </div>
// <div className="col-md-5 col-12 comDiv d-flex justify-content-center">
// <div>
// <img src={event} className="mb-3 mt-4"></img>
// <img src={event} className="mb-3"></img>
// <img src={event}></img>

// </div>
// </div>

// </div>

// </div>
// </div>

// </section>