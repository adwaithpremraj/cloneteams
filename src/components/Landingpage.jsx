import React from 'react';
import HeroTeamImage from '../assets/Hero1.avif';
import './Landingpge.css'
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';


function Landingpage() {
  return (
    <>
  <div className="microsoftheding">
  <Image src={HeroTeamImage} fluid className='microsoftheding1' />
    <div className='microlist'>
      <h4 className="Microsofttext">The new Microsoft Teams is now available</h4>
      <p className="Microsofttextp">Collaborate more effectively with a faster, simpler,
      <br />
      smarter, and more flexible Teams.</p>
      <Button   variant="primary" className='Microsofttextbtn'>Download Now</Button>
      <Button variant="outline-primary ms-3">Learn about the new Microsoft Teams</Button>{' '}
  </div>

  </div>
    </>
  );
}

export default Landingpage;