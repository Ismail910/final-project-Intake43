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
import business from '../../assets/images/bussiness/bussiness-removebg-preview.png'
import Aos from 'aos';
import 'aos/dist/aos.css';

import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

import axios from 'axios';


const Home = () => {
  useEffect(()=>{
    Aos.init();
  },[]);


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

  //totalusers
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/user/count')
      .then(response => {
        console.log(response.data);
        setTotalUsers(response.data["countUser"]|| 0);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);


  return (
    <div>

      {/* <section className='SlidShow'>
      <section className='SlidShow' >
      <MDBCarousel  showIndicators>
      <MDBCarouselItem
        className='w-100 d-block imgSlidshow'
        itemId={1}
        src={bus1}
        alt='...'
      >
        <p className='FontSlidshow mb-5 text-white'>Company that specializes in providing software development services. These companies typically have a team of skilled programmers, developers, and engineers who work together to create and maintain software applications for clients.</p>
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block imgSlidshow'
        itemId={2}
        src={bus2}
        alt='...'
      >
        <p className='FontSlidshow mb-5 text-white'>The services offered by a programming company can vary depending on their expertise and focus areas. Some common services provided by programming companies include:</p>
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block imgSlidshow'
        itemId={3}
        src={bus3}
        alt='...'
      >
        <p className='FontSlidshow mb-5 text-white'>Building websites and web applications using programming languages like HTML, CSS, JavaScript, and frameworks like Laravel, Django, or Ruby on Rails.</p>
      </MDBCarouselItem>
    </MDBCarousel>

      </section> */}
      <section>
        <div className="container">
          <div className="row">
            <div className="d-flex  row justify-content-around">
              <div className="col-md-6 col-12 mb-3 textFirst mt-5 " data-aos="zoom-out-right">
                <p className="text1 ">
                  Are you asking for a
                  <span className="text1Word">
                   
                    <br></br>job ?
                  </span>
                </p>
                <p className="text2">
                  Explore thousands of jobs <br />
                  Explore thousands of jobs
                  <br />
                  Explore thousands of jobs
                </p>
                <div className="textDiv d-flex justify-content-center">
                  <p className="textWelcome">
                    <span className="text1Word">We</span>lome to our website
                  </p>
                  <button className="textbutton">Explore</button>
                </div>
              </div>
              <div className="col-md-5 col-12 imgDiv mt-5" data-aos="zoom-out-down">
                <img
                  className="imgside"
                  src={business}
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
            <div className="d-flex  row justify-content-around" data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
              <div className="col-lg-6 col-12  projectSide row d-flex justify-content-center" >
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

              <div className="col-lg-6 col-12 projectImg row "data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="500">
              
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
<div className="d-flex row justify-content-center" data-aos="zoom-in-up">
<div className="col-md-3 col-12 comDiv d-flex justify-content-center">

<div className='Analysis'>
<i class="fa-solid fa-earth-americas icons " style={{ fontSize: '6rem' }}></i>
<p className='fs-3 text-dark text-center'>Total countries</p>
{totalCountries} +

  </div>

</div>
<div className='colum col-1'  ></div>
<div className="col-md-3 col-12 comDiv d-flex justify-content-center">
<div className='Analysis'>
<i class="fa-solid fa-laptop  icons" style={{ fontSize: '6rem' }}></i>
<br></br>
<p className='fs-3 text-dark'>Total projects</p>
{totalProjects} +  
</div>
</div>

<div className='colum col-1'  ></div>
<div className="col-md-3 col-12 comDiv d-flex justify-content-center">
<div className='Analysis'>
<i class="fa-solid fa-users  icons" style={{ fontSize: '6rem' }}></i>
<br></br>
<p className='fs-3 text-dark'>Total users</p>
{totalUsers} +  
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
{/* <section className="comSection">
        <div className="container">
          <div className="row">
            <p className="ComText">Our communities</p>
            <div className="d-flex row justify-content-center">
              <div className="col-md-3 col-12 comDiv d-flex justify-content-center">
                <img src={flag1} className="comImage1"></img>
                <p className="commText">MOROCCO</p>
              </div>
              <div className="col-md-3 col-12 comDiv d-flex justify-content-center">
                <img src={flag2} className="comImage2 "></img>
                <p className="commText">SAUDI</p>
              </div>
              <div className="col-md-3 col-12 comDiv d-flex justify-content-center">
                <img src={flag3} className="comImage3"></img>
                <p className="commText">UNITED STATES</p>
              </div>
            </div>
          </div>
        </div>
      </section>



<section>
<div className='container'>
<div className='row'>
<div className="d-flex row justify-content-between">
<div className="col-md-5 col-12 comDiv d-flex justify-content-center">
<div>
<img src={event}></img>
<br></br>
<p className="ComText pt-5" style={{ color: ' black' }}>Count down</p>

</div>

</div>
<div className="col-md-5 col-12 comDiv d-flex justify-content-center">
<div>
<img src={event} className="mb-3 mt-4"></img>
<img src={event} className="mb-3"></img>
<img src={event}></img>

</div>
</div>

</div>

</div>
</div>

</section> */}