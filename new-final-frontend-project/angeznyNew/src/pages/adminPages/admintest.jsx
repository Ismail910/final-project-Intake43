import React from 'react'
import Sidnave from './common/Sidnave';
import Dashboard from './common/Dashboard';

const Admintest = () => {
  return (
    <div>
        <div class="container-fluid" id="main">
         <div class="row row-offcanvas accordion-collapse">
           <Sidnave/>
           <Dashboard/>
     </div>
    </div>  
</div>  
);
}

export default Admintest