// import React from 'react'
// import otherWorkData from "./../data/otherWorks.json"
// import "./../styles/otherWork.css";

// const OtherWorks = () => {
//   return (
//     <section className='otherWorks sectionHead'>
//       <div className='otherContainer'>
//         <h3>Other Noteworthy Works</h3>
//         <div className='otherCollection'>
//           {otherWorkData.map((item, index) => (
//             <div className='otherContent' key={index}>
//               <div>
//                 <div className='otherContentHead'>
//                   <a href={item.Code} rel="noopener noreferrer" target="_blank"> <img src={require(`./../assets/images/otherWorks/${item.Image}`)} alt='Screenshot' /></a>
//                   <div className='headPart'>
//                     <h4><a href={item.Code} rel="noopener noreferrer" target="_blank">{item.Title}</a></h4>
//                     <div className='otherContentIcon'>
//                       <a href={item.Code} aria-label="GitHub Link" rel="noopener noreferrer" target="_blank">
//                         <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
//                           <title>GitHub</title>
//                           <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
//                         </svg>
//                       </a>
//                     </div>

//                   </div>
//                   <p>{item.Description}</p>
//                 </div>

//               </div>
//               <div className='used'>
//                 {item.Skills.map((skill, skillIndex) => (
//                   <li key={skillIndex}>{skill}</li>
//                 ))}
//               </div>

//             </div>
//           ))}
//         </div>
//       </div>
//     </section >
//   )
// }

// export default OtherWorks

import React from 'react';
import otherWorkData from "./../data/otherWorks.json";
import "./../styles/otherWork.css";

const OtherWorks = () => {
  return (
    <section className='otherWorks sectionHead'>
      <div className='otherContainer'>
        <h3>Other Noteworthy Works</h3>
        <div className='otherCollection'>
          {otherWorkData.map((item, index) => (
            <div className='otherContent' key={index}>
              <div>
                <div className='otherContentHead'>
                  {/* Render image only if present */}
                  {item.Image && (
                    <a href={item.Code} rel="noopener noreferrer" target="_blank">
                      <img
                        src={`/assets/images/otherWorks/${item.Image}`}
                        alt='Screenshot'
                      />
                    </a>
                  )}
                  <div className='headPart'>
                    <h4>
                      <a href={item.Code} rel="noopener noreferrer" target="_blank">
                        {item.Title}
                      </a>
                    </h4>
                    <div className='otherContentIcon'>
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
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37
                            3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54
                            6.44-7A5.44 5.44 0 0 0 20 4.77
                            5.07 5.07 0 0 0 19.91 1S18.73.65
                            16 2.48a13.38 13.38 0 0 0-7 0C6.27.65
                            5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44
                            5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61
                            6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                          </path>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <p>{item.Description}</p>
                </div>
              </div>
              <div className='used'>
                {item.Skills.map((skill, skillIndex) => (
                  <li key={skillIndex}>{skill}</li>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherWorks;
