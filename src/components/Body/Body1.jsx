import React from 'react';

function Body1() {
  return (
    <>
      <div className="row my-5" style={{ marginTop: '150px', marginBottom: '50px' }}>
        <div className="col-md-6">
          <div className='row'>
            <div className='col-2'></div>

            <div className='col-8 shadow'>
              <p className='pt-5 px-5 text-center' style={{ fontSize: '13px' }}>
                Host engaging meetings that drive greater
                impact with features like PowerPoint Live, Microsoft Whiteboard, and AI-generated meeting notes.*
                Learn more
              </p>
              <button className="btn btn-primary ms-5 mb-3" style={{}}>Learn more</button>
            </div>

            <div className='col-2'></div>
          </div>
        </div>
        <div className="col-md-6">
          <img src="src\assets\Feature-Meet.avif" alt="no" className="img-fluid" />
        </div>
      </div>

      <div className='row mx-5'>
        <h2 className="text-center mb-5">See how companies across industries succeed with Teams</h2>

        <div className="col-md-6 shadow p-3 mb-3">
          <h5>Leading organizations rely on Teams to modernize their workplaces</h5>
          <p>Hear how L’Oréal, Johnson Controls, M&S, and United have built a culture of togetherness and improved business processes with Teams.</p>
          <a href="">Watch the video</a>
        </div>

        <div className="col-md-6 shadow p-3 mb-3">
          <h5>Leading organizations rely on Teams to modernize their workplaces</h5>
          <p>Hear how L’Oréal, Johnson Controls, M&S, and United have built a culture of togetherness and improved business processes with Teams.</p>
          <a href="">Watch the video</a>
        </div>
      </div>
    </>
  );
}

export default Body1;
