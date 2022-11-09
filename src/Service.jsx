import React from "react";
import web from '../src/Images/aktu.png';
import Card  from "./Card";
import Sdata from "./Sdata";

const Service = () => {
  return(
    <>
        <div className="my-5">
            <h1 className="text-center" >Our Service </h1>
        </div>
        <div class="container-fluid md-5">
           <div className='row'>  
           {/* horgentel marging  */}
            <div className='col-10 mx-auto'>
                <div className="row gy-4" >
                    {/* jab ham javascript ka par write karate hai to {} ka use karate hqai  */}
                    {
                        Sdata.map((val,ind) => {
                            return <Card
                            imgsrc = {val.imgsrc}
                            title = {val.title}
                            />
                        })
                    }
                </div>
            </div>
            </div>
        </div>    
    </>
  );
};
export default Service; 
//aur baki bhi ese use kar se es liye ese use karate hai 


// {
//     Sdata.map((val,ind) => {
//         return <Card
//           imgsrc = {val.imgsrc}
//           title = {val.title}
//         />
//     })
// }



// <div className="col-md-4 col-10 mx-auto" >
// <div className="card">
// <img src={web} className="card-img-top" alt="..." />
// <div className="card-body">
//     <h5 className="card-title">Card title</h5>
//     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" className="btn btn-primary">Go somewhere</a>
// </div>
// </div>
// </div>

// <div className="col-md-4 col-10 mx-auto" >
// <div className="card">
// <img src={web} className="card-img-top" alt="..." />
// <div className="card-body">
//     <h5 className="card-title">Card title</h5>
//     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" className="btn btn-primary">Go somewhere</a>
// </div>
// </div>
// </div>

// <div className="col-md-4 col-10 mx-auto" >
// <div className="card">
// <img src={web} className="card-img-top" alt="..." />
// <div className="card-body">
//     <h5 className="card-title">Card title</h5>
//     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" className="btn btn-primary">Go somewhere</a>
// </div>
// </div>
// </div>