import React from 'react'
import card2a from '../assets/card2a.jpg';
import card2b from '../assets/card2b.avif';

function Cards2() {
  return (
    <>
        <div className="row d-flex  mb-5">
            <h1 className="text-center m-5">Explore the latest Teams news</h1>

            <div className="col-lg-2 "></div>

            <div className="col-lg-3">
                <img src={card2a} alt="" height="300px" width="400px" />
                <h3 className='text-center'>Get ready for the future of work with Teams and Microsoft Copilot for Microsoft 365</h3>                    
                <p  style={{fontSize:'13px'}}>As the workplace evolves, empower your organization with next-generation AI capabilities in Tea
                  ms—the smart place to work. Run more effective meetings, get up to speed on conversations, organize key
                   points, and follow up with actions using Copilot in Teams.</p>
            </div>
            <div className="col-lg-1"></div>
            <div class="vl col-lg-1" style={{borderLeft:"03px solid"}}></div>

            <div className="col-lg-3">
                  <img src={card2b} alt="" height="300px"  width="400px"/> 
                  <h3 className='text-center'>Microsoft Mesh is now available</h3>   
                  <p style={{fontSize:'13px'}}>Connect your distributed workforce in new ways with Mesh—an immersive 3D space with customizable
                     avatars for virtual meetings and events. With the no-code editor, easily create tailored experiences 
                     that feel natural, elevate engagement, and empower teams.

Learn more</p>                
            </div>

            <div className="col-lg-2"></div>


        </div>
    </>
  )
}

export default Cards2