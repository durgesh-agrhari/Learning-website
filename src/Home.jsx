import React from "react";
import {Link} from 'react-router-dom'
import web from '../src/Images/11.png'
import Comman from "./Comman";
const Home = () => {
  return(
    <>
    <Comman
        name = "Grow your bussiness with" 
        imgsrc = {web} 
        visit = "/service" 
        btname = "Get Started" 
        />
    </>
  );
};
export default Home; //aur baki bhi ese use kar se es liye ese use karate hai 











// import React from "react";
// import {Link} from 'react-router-dom'
// import web from '../src/Images/11.png'
// const Home = () => {
//   return(
//     <>
//       <section id = "header" className="d-flex align-items-center">
//       <div class="container-fluid nav_vg">
//         <div className='row'>
//             <div className='col-10 mx-auto'>
//                 <div className="row">
//                 <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
//                     <h2>
//                         Grow your bussiness with <strong className="brand-name">Taleplacement</strong> 
//                     </h2>
//                     <h3 className="my-3">
//                         We are providing revelent content for fraser student.
//                     </h3>
//                     <div className="mt-3">
//                          <Link href = "" className="btn-get-started">
//                             Gert Started 
//                         </Link>
//                     </div>
//                 </div>

//                 <div className="col-md-6  order-1 order-lg-2 header-img  d-flex justify-content-center flex-column">
//                     <img src = {web} className="img-flud animated" alt="Home img " />
//                 </div>
//                 </div>
//             </div>
//         </div>    
//       </div>
//       </section>
//     </>
//   );
// };
// export default Home; //aur baki bhi ese use kar se es liye ese use karate hai 
