import React from 'react';
import { MDBInput, MDBCheckbox, MDBBtn ,MDBTextArea} from 'mdb-react-ui-kit';
import contact from '../assets/images/contact-us-banner_1200x_b5d96e9c-3ac4-4678-9aff-aba24ff2b0fc_1600x.webp'

import '../styles/contactUs.css'
const ContactUs = () => {
  return (
    <div>
    <section>
    <div className='container'>
    <div className='row justify-content-center p-5 '>
    

    <div className='col-7 contact-us'>
    <img src={contact} className='contactImg'></img>
    </div>


    <div className='col-4 contactForm'>
    <form id='form' className='' style={{ width: '100%', maxWidth: '300px' }}>
    <h2 className='d-flex justify-content-around p-5 align-items-center  fw-bolder'>Contact us</h2>

    <p className='labels'>Name: </p><MDBInput  v-model='name' wrapperClass='mb-4'  class="inputs"/>

    <p className='labels'>Email: </p> <MDBInput type='email' v-model='email' wrapperClass='mb-4' class="inputs" />

    <p className='labels'>Subject: </p>  <MDBInput  v-model='subject' wrapperClass='mb-4' class="inputs"/>

   

      

      <button  block   class="contactButton ">
        Send
      </button>
    </form>
    </div>
    
    </div>
    </div>
    </section>
      </div>
  )
}

export default ContactUs