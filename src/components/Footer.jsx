import { faInstagram, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <>
    <hr />
    <div className="d-flex ms-5 my-5">
        <p>Follow Microsoft Teams </p>
        <div>
            <FontAwesomeIcon icon={faXTwitter} size="xl" className="ms-3" />
            <FontAwesomeIcon icon={faInstagram} size="xl" className="ms-3"  />
            <FontAwesomeIcon icon={faYoutube} size="xl" className="ms-3"  />
            <FontAwesomeIcon icon={faPencil} size="xl" className="ms-3" />
            
        </div>
    </div>


    <div className="row ms-5 footertable">
        <div className="col-md-2 col-sm-6">
            <h6  className="mt-5">What's new</h6>
            <p  className="mt-3 footerfontsize">Surface Laptop Studio 2</p>
            <p  className="mt-3 footerfontsize">Surface Laptop Go 3</p>
            <p  className="mt-3 footerfontsize">Surface Pro 9</p>
            <p  className="mt-3 footerfontsize">Surface Laptop 5 </p>

            <p  className="mt-3 footerfontsize">Copilot in Windows</p>
            <p  className="mt-3  footerfontsize">Microsoft Copilot</p>
            <p  className="mt-3 footerfontsize">Explore Microsoft products</p>
            <p  className="mt-3 footerfontsize">Windows 11 apps</p>

        </div>
        <div className="col-md-2 col-sm-6">

            <h6 className="mt-5">Microsoft Store</h6>
            <p  className="mt-3 footerfontsize">Account profile</p>
            <p  className="mt-3 footerfontsize">Download Center</p>
            <p  className="mt-3 footerfontsize">Microsoft Store support</p>
            <p  className="mt-3 footerfontsize">Returns</p>

            <p  className="mt-3 footerfontsize">Order tracking</p>
            <p  className="mt-3  footerfontsize">Certified Refurbished</p>
            <p  className="mt-3 footerfontsize">Microsoft Store Promise</p>
            <p  className="mt-3 footerfontsize">Flexible Payments</p>

        </div>
        <div className="col-md-2 col-sm-6">

            <h6 className="mt-5">Education</h6>
            <p  className="mt-3 footerfontsize">Microsoft in education</p>
            <p  className="mt-3 footerfontsize">Microsoft Cloud</p>
            <p  className="mt-3 footerfontsize">Microsoft Teams for Education</p>
            <p  className="mt-3 footerfontsize">Devices for education</p>

            <p  className="mt-3 footerfontsize">Microsoft Security</p>
            <p  className="mt-3  footerfontsize">Dynamics 365</p>
            <p  className="mt-3 footerfontsize">Flexible Payments</p>
            <p  className="mt-3 footerfontsize">Microsoft</p>

        </div>
        <div className="col-md-2 col-sm-6">

            <h6 className="mt-5">Business</h6>     
            <p  className="mt-3 footerfontsize">Microsoft 365</p>
            <p  className="mt-3 footerfontsize">Deals for students and parents  </p>
            <p  className="mt-3 footerfontsize">Microsoft</p>
            <p  className="mt-3 footerfontsize">Microsoft 365</p>

            <p  className="mt-3 footerfontsize">Microsoft Power Platform</p>
            <p  className="mt-3  footerfontsize">Microsoft in education</p>
            <p  className="mt-3 footerfontsize">Educator training and development</p>
            <p  className="mt-3 footerfontsize">How to buy for your school</p>

        </div>
        <div className="col-md-2 col-sm-6">

            <h6 className="mt-5">Company</h6>
            <p  className="mt-3 footerfontsize">Careers</p>
            <p  className="mt-3 footerfontsize">About Microsoft</p>
            <p  className="mt-3 footerfontsize">Company news</p>
            <p  className="mt-3 footerfontsize">Privacy at Microsoft</p>

            <p  className="mt-3 footerfontsize">Investors</p>
            <p  className="mt-3  footerfontsize">Diversity and inclusion</p>
            <p  className="mt-3 footerfontsize">Accessibility</p>
            <p  className="mt-3 footerfontsize">Sustainability</p>

        </div>


        <div className="col-md-2 col-sm-6">

            <h6 className="mt-5">Developr & IT</h6>
            <p  className="mt-3 footerfontsize">Azure</p>
            <p  className="mt-3 footerfontsize">Developer Center</p>
            <p  className="mt-3 footerfontsize">Documentation</p>
            <p  className="mt-3 footerfontsize">Microsoft Learn</p>

            <p  className="mt-3 footerfontsize">Microsoft Tech Community    </p>
            <p  className="mt-3  footerfontsize">Azure Marketplace</p>
            <p  className="mt-3 footerfontsize">AppSource</p>
            <p  className="mt-3 footerfontsize">Visual Studio</p>

        </div>
    </div>
    
    </>
  )
}

export default Footer