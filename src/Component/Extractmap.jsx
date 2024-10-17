// import React from "react";
// import Extract from "./Extract";
// import Albums from "./Albums"; 
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';
// function Extractmap() {
//     const itemsPerSlide = 8; 
//     const slides = [];
//     for (let i = 0; i < Albums.length; i += itemsPerSlide) {
//         slides.push(Albums.slice(i, i + itemsPerSlide));
//     }
//     return (
//         <>
//             <Carousel>
//                 {
//                     slides.map((slide, index) => (
//                         <div key={index} id="divdiv">
//                             {
//                                 slide.map((y, idx) => (
//                                     <Extract 
//                                         key={idx} 
//                                         im={y.image} 
//                                         bt={y.follows}  
//                                         pp={y.title} 
//                                     />
//                                 ))
//                             }
//                         </div>
//                     ))
//                 }
//             </Carousel>
//         </>
//     );
// }

// export default Extractmap;

import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Extractmap()
{
    const[state,setstate]=useState([])
    useEffect(()=>
    {
        let api=fetch("https://qtify-backend-labs.crio.do/albums/top");
        api.then(res=>res.json()).then(val=>setstate(val))
        console.log(state)
    },[])
   
    return(
<Carousel>
<div id="img_divi">
           {
             state.slice(0,7).map(x=>{
                return (
                 <>
                <div className="card_id">
                <div >
                <img src={x.image} id="images_one" alt="" />
                <button className="button_img">{x.follows} Follows</button>
                </div>
                 <h5 className="cl">{x.title}</h5>
                </div>
                 </>
                )
     
             })
           }
        </div> 
        <div id="img_divi">
           {
             state.slice(7,14).map(x=>{
                return (
                 <>
                <div className="card_id">
                <div >
                <img src={x.image} id="images_one" alt="" />
                <button className="button_img">{x.follows} Follows </button>
                </div>
                 <h5 className="cl">{x.title}</h5>
                </div>
                 </>
                )
     
             })
           }
        </div> 

</Carousel>
    ) 
}
export default Extractmap
