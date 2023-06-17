import {useEffect,useState} from 'react';
 
 
const Dashboard = () => {
   
   const[record,setRecord] = useState([])
 
   const getData = () =>
   {
       fetch('https://jsonplaceholder.typicode.com/users')
       .then(resposne=> resposne.json())
       .then(res=>setRecord(res))
   }
 
   useEffect(() => {
      getData();
   },)
    
 
    return (
    <div class="col main pt-5 mt-3">
        <p class="lead d-none d-sm-block">Add Employee Details and Records</p>
 
        <div class="alert alert-warning fade collapse" role="alert" id="myAlert">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">×</span>
                <span class="sr-only">Close</span>
            </button>
            <strong>Data and Records</strong> Learn more about employee
        </div>

        <hr/>
      
       
        <div class="row ">
            <div class="col-lg-7 col-md-6 col-sm-12">
              <h5 class="mt-3 mb-3 text-secondary">
               Check More Records of Employees
              </h5>
                <div class="table-responsive">
                    <table class="table table-striped">
                        <thead class="thead-light">
                            <tr>
                                <th>No</th>
                                <th>Label</th>
                                <th>Header</th>
                                <th>Column</th>
                                <th>Record Data</th>
                            </tr>
                        </thead>
                        <tbody>
                         {record.slice(0, 5).map((output)=>
                            <tr>
                                <td>{output.id}</td>
                                <td>{output.name}</td>
                                <td>{output.email}</td>
                                <td>{output.username}</td>
                                <td>{output.website}</td>
                                <td></td>
                            </tr>
                           )}
                        </tbody>
                    </table>
                </div>
            </div>
           
        </div>
       
        <a id="more"></a>
        <hr/>
        <h2 class="sub-header mt-5">Use card decks for equal height rows of cards</h2>
        <div class="mb-3">
            <div class="card-deck">
                <div class="card card-inverse card-success text-center">
                    <div class="card-body">
                        <blockquote class="card-blockquote">
                            <p>It's really good news that the new Bootstrap 4 now has support for CSS 3 flexbox.</p>
                            <footer>Makes flexible layouts <cite title="Source Title">Faster</cite></footer>
                        </blockquote>
                    </div>
                </div>
                <div class="card card-inverse card-danger text-center">
                    <div class="card-body">
                        <blockquote class="card-blockquote">
                            <p>The Bootstrap 3.x element that was called "Panel" before, is now called a "Card".</p>
                            <footer>All of this makes more <cite title="Source Title">Sense</cite></footer>
                        </blockquote>
                    </div>
                </div>

            </div>
        </div>
        
 
        <a id="flexbox"></a>
        <hr/>
        <h2 class="mt-5">Masonry-style grid columns</h2>
        <h6>with Bootstrap 4 flexbox</h6>
 
        <div class="card-columns mb-3">
            <div class="card">
                <img class="card-img-top img-fluid" src="//placehold.it/600x200/444/fff?text=..." alt="Card image cap"/>
                <div class="card-body">
                    <h4 class="card-title">New XL Grid Tier</h4>
                    <p class="card-text">With screens getting smaller, Bootstrap 4 introduces a new grid breakpoint with the col-xl-* classes. This extra tier extends the media query range all the way down to 576 px. Eventhough the new XL tier would make one think it’s been added to support extra large screens, it’s actually the opposite.</p>
                </div>
            </div>
        </div>
      
 
        <a id="layouts"></a>
     
    </div>
    )
}
 
export default Dashboard