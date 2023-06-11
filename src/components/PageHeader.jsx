import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const PageHeader = () => {
  const envelope = <FontAwesomeIcon icon={faEnvelope} />
  const linkedIn = <FontAwesomeIcon icon={faLinkedin} />
  const git = <FontAwesomeIcon icon={faGithub} />


  return(
    <>
    <div className='header' id='myHeader'>
      <h1>Chris Frey<h1 class="blinky" >|</h1>
      </h1>
      <h3 className="subHead">Web Developer and Software Engineer</h3>
      <h5>I build things for people, and the web.</h5>

      <ul className="contact">
        <li className="contactButton"><a className="button" href="mailto:chris.frey@hey.com">{envelope}</a></li>
        <li className="contactButton"><a className="button" href="https://www.linkedin.com/in/chris-l-frey/" target='_blank'>{linkedIn}</a></li>
        <li className="contactButton"><a className="button" href="https://github.com/Chris-Frey" target='_blank'>{git}</a></li>
        <div className="technicalSkillsButton">
          <li className="contactButton"><a className="button" href="">Technical Skills</a></li>
        </div>
        {/* <li className="contactButton"><a className="button" href="">Projects</a></li> */}
      </ul>
    </div>
    </>
  )

}

export default PageHeader