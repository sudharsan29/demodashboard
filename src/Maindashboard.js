// // import React from 'react'
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Maindashboard.css';
// function Maindashboard()
//  {
// const [data, setData] = useState([]);
// const [dat, setDat] = useState([]);

//   useEffect(() => {
//     axios.get('https://jsonplaceholder.typicode.com/posts')
//       .then(response => {
//         setData(response.data);
//         setDat(response.data)
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }, []);

//   const dataCount = data.length;

//   return (
//     <div>

// <div className="prayogana">
//         <div className="textborder">
//           Today
//         </div>
//         </div>
//         <span className="texted12">
//               <div className="badge2">{dataCount}</div>
//             </span>
 
      
    
//             <div className="container1">
//   <div className="items">
//     {dat.map(item => (
//       <div key={item.id} className="stackitem1">
//         <div className="content1">
//           <div className="text">
//             <div className="title1">{item.title}</div>
//             <div className="subtitle1">
//               {item.body}
//             </div>
//           </div>
//         </div>
//       </div>
//     ))}
//   </div>
//   <button className="button2" onClick={""}>
//     View All
//   </button>
// </div>


             
        
  
//     </div>
//   )
// }

// export default Maindashboard

import React from 'react'

function Maindashboard() {
  return (
    <div>Maindashboard</div>
  )
}

export default Maindashboard