import React from "react";
import {Link} from 'react-router-dom'
import web from '../src/Images/11.png'
const Comman = (props) => {
  return(
    <>
      <section id = "header" className="d-flex align-items-center">
      <div class="container-fluid">
        <div className='row'>
            <div className='col-10 mx-auto'>
                <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                    <h2>
                        {props.name} <strong className="brand-name">Taleplacement</strong> 
                    </h2>
                    <h3 className="my-3">
                        We are providing revelent content for fraser student.
                    </h3>
                    <div className="mt-3">
                         <Link to={props.visit} className="btn-get-started">
                            {props.btname}
                        </Link>
                    </div>
                </div>

                <div className="col-md-6  order-1 order-lg-2 header-img  d-flex justify-content-center flex-column">
                    <img src = {props.imgsrc} className="img-flud animated mt-3" alt="Home img " />
                </div>
                </div>
            </div>
        </div>    
      </div>
      </section>
    </>
  );
};
export default Comman; //aur baki bhi ese use kar se es liye ese use karate hai 
