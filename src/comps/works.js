// import React from 'react';
// import workData from "./../data/works.json"
// import "./../styles/work.css";

// const Works = () => {
//   return (
//     <section id='works' className='works sectionHead'>
//       <div className='workContainer'>
//         <h1>My Works</h1>
//         {workData.map((item, index) => (
//           <div className='fullContainer' key={index}>
//             <div className="workContent" >
//               <h3><a href={item.Website} rel="noopener noreferrer" target="_blank">{item.Title}</a></h3>
//               <p>{item.Description}</p>
//               <div>
//                 <div className='stack'>
//                   {item.Skills.map((skill, skillIndex) => (
//                     <li key={skillIndex}>{skill}</li>
//                   ))}
//                 </div>
//                 <div className='worksIcon'>
//                   <a href={item.Code} aria-label="GitHub Link" rel="noopener noreferrer" target="_blank">
//                     <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
//                       <title>GitHub</title>
//                       <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
//                     </svg>
//                   </a>
//                 </div>
//               </div>
//             </div>
//             <div className='imgContainer'>
//               <a href={item.Code} rel="noopener noreferrer" target="_blank"> <img src={require(`./../assets/images/${item.Image}`)} alt='Screenshot' /></a>
//             </div>
//           </div>
//         ))}
//       </div>


//     </section>
//   )
// }

// export default Works

import React from 'react';
import workData from "./../data/works.json";
import "./../styles/work.css";

const Works = () => {
  return (
    <section id='works' className='works sectionHead'>
      <div className='workContainer'>
        <h1>My Works</h1>
        {workData.map((item, index) => (
          <div className='fullContainer' key={index}>
            <div className="workContent">
              <h3>
                <a href={item.Website || item.Code} rel="noopener noreferrer" target="_blank">
                  {item.Title}
                </a>
              </h3>
              <p>{item.Description}</p>
              <div>
                <div className='stack'>
                  {item.Skills.map((skill, skillIndex) => (
                    <li key={skillIndex}>{skill}</li>
                  ))}
                </div>
                <div className='worksIcon'>
                  <a
                    href={item.Code}
                    aria-label="GitHub Link"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-github"
                    >
                      <title>GitHub</title>
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61
                        c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77
                        5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38
                        13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07
                        5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5
                        3.78c0 5.42 3.3 6.61 6.44 7A3.37
                        3.37 0 0 0 9 18.13V22">
                      </path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Render image only if the Image field is not empty */}
            {item.Image && (
              <div className='imgContainer'>
                <a href={item.Code} rel="noopener noreferrer" target="_blank">
                  <img
                    src={`/assets/images/${item.Image}`}
                    alt='Screenshot'
                  />
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
