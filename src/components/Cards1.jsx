import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Card from 'react-bootstrap/Card';
import './Cards1.css'; // Import CSS file for styling
import image1 from '../assets/Audience1.avif';
import image2 from '../assets/Audience-2.avif';
import image3 from '../assets/Audience-3.avif';
import image4 from '../assets/Audience-4.avif';



function Cards1() {
  return (
    <>
      <div className="row mt-5 crds1">
        <div className="col-3"></div>
        <div className="col-6">
          <h1 className="text-center">More is possible with Teams</h1>
          <p>Simplify collaboration with Teams to level up your work, connect with others for greater impact, and scale your business to achieve more.</p>
        </div>
        <div className="col-3"></div>
      </div>

      <div className="row d-flex m-4 p-5">
        <div className="col-sm-6 col-md-3">
          <Card style={{ width: '18rem' }} className="m-4">
            <Card.Img variant="top" src={image1} />
            <Card.Body>
              <Card.Title> <a href="" style={{ fontSize:'15px'}}>Enterprise 
                <FontAwesomeIcon icon={faChevronRight} className="chevron-icon" /></a> </Card.Title>
            </Card.Body>
          </Card>
        </div>

        <div className="col-sm-6 col-md-3">
          <Card style={{ width: '18rem' }} className="m-4">
            <Card.Img variant="top" src={image2} />
            <Card.Body>
              <Card.Title> <a href="" style={{ fontSize:'15px'}}>Business 
                <FontAwesomeIcon icon={faChevronRight} className="chevron-icon" /></a> </Card.Title>
            </Card.Body>
          </Card>
        </div>

        <div className="col-sm-6 col-md-3">
          <Card style={{ width: '18rem' }} className="m-4">
            <Card.Img variant="top" src={image3} />
            <Card.Body>
              <Card.Title> <a href="" style={{ fontSize:'15px'}}>Home 
                <FontAwesomeIcon icon={faChevronRight} className="chevron-icon" /></a> </Card.Title>
            </Card.Body>
          </Card>
        </div>

        <div className="col-sm-6 col-md-3">
          <Card style={{ width: '18rem' }} className="m-4">
            <Card.Img variant="top" src={image4} />
            <Card.Body>
              <Card.Title> <a href="" style={{ fontSize:'15px'}}>Education
                <FontAwesomeIcon icon={faChevronRight} className="chevron-icon" /></a> </Card.Title>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Cards1;
