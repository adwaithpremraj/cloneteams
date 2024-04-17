import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { faBriefcase, faBuilding, faChevronRight, faGraduationCap, faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Body2() {
  return (
    <>
      <div className="container-fluid" style={{ marginTop: '100px', marginBottom: '50px' }}>
        <h2 className="text-center mb-4">Explore Teams tips and tricks</h2>
        <div className="row mx-auto">
          <div className="col-md-6 mb-4">
            <Card>
              <Card.Img variant="top" src="src\assets\TipsandTricks-TogetherEmojis.avif" />
              <Card.Body>
                <Card.Title>Keep chats playful with together emojis in Teams</Card.Title>
                <Card.Text>
                  Celebrate a job well done with coworkers using interactive together emojis that can high-five each other, clink glasses, and enjoy a slice of pizza.
                </Card.Text>
                <a href="" className="btn btn-primary">Read the story</a>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-6 mb-4">
            <Card>
              <Card.Img variant="top" src="src\assets\TipsandTricks-StayProductive.avif" />
              <Card.Body>
                <Card.Title>Stay productive with Microsoft Teams</Card.Title>
                <Card.Text>
                  Maximize your productivity by using various features in Microsoft Teams. Learn how to stay organized, collaborate effectively, and get things done efficiently.
                </Card.Text>
                <a href="" className="btn btn-primary">Read the story</a>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

      <div className="container-fluid " style={{ backgroundColor: "#5D5BD4", color: 'white' }}>
        <div className="row mx-auto py-5">
          <div className="col-md-6 d-flex flex-column align-items-center justify-content-center mb-4">
            <h3 className="text-center mb-3">Get started with Microsoft Teams today</h3>
            <div className='d-flex'>
              <Button variant="light" className='mx-2'>Sign up for free</Button>
              <Button variant="outline-light" className='mx-2'>Download</Button>
            </div>
          </div>

          <div className="col-md-6 d-flex flex-column align-items-center justify-content-center blueboxhome">
  <div className="row mb-3">
    <div className="col-auto">
      <FontAwesomeIcon icon={faHouse} size="3x" />
    </div>
    <div className="col">
      <div className="ms-3">
        <h5>Home</h5>
        <p>Learn more <FontAwesomeIcon icon={faChevronRight} className="ms-1" /></p>
      </div>
    </div>
  </div>

  <div className="row mb-3">
    <div className="col-auto">
      <FontAwesomeIcon icon={faBriefcase} size="3x" />
    </div>
    <div className="col">
      <div className="ms-3">
        <h5>Business</h5>
        <p>Learn more <FontAwesomeIcon icon={faChevronRight} className="ms-1" /></p>
      </div>
    </div>
  </div>

  <div className="row mb-3">
    <div className="col-auto">
      <FontAwesomeIcon icon={faBuilding} size="3x" />
    </div>
    <div className="col">
      <div className="ms-3">
        <h5>Enterprise</h5>
        <p>Learn more <FontAwesomeIcon icon={faChevronRight} className="ms-1" /></p>
      </div>
    </div>
  </div>

  <div className="row mb-3">
    <div className="col-auto">
      <FontAwesomeIcon icon={faGraduationCap} size="3x" />
    </div>
    <div className="col">
      <div className="ms-3">
        <h5>Education</h5>
        <p>Learn more <FontAwesomeIcon icon={faChevronRight} className="ms-1" /></p>
      </div>
    </div>
  </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Body2;
