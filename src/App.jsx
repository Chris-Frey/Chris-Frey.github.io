import React, { useState } from 'react'
import './App.css'
import './App-mobile.css'

const App = () => {
  return(
    <>

      <div className='body'>
        <section className="pageLeft">
          <h1>Chris Frey</h1>
          <h3>Web Developer and Software Engineer</h3>
          <h5>I build things for people, and the web.</h5>

          {/* <ul className="contact">
            <li><a href="mailto:chris.frey@hey.com" className="fa fa-at" style="color: #49ace9;"></a></li> */}
            {/* <li><a href="https://github.com/Chris-Frey" target="_blank" className="fa fa-github" style="color: #49ace9;"></a></li> */}
            {/* <li><a href="https://www.linkedin.com/in/chris-l-frey/" target="_blank" className="fa fa-linkedin" style="color: #49ace9;"></a></li> */}
          {/* </ul> */}

          <h3>About Me</h3>
          <div className='aboutMe'>
            <p>Since I was a child I've been playing around with computers, and seeing what I could break. I took a detour through the <a className='word_highlight'>military</a>, and then got licensed the <a className='word_highlight'>Landscape Architecture</a> field, where I honed my leadership and critical thinking skills. I'm now knee deep in JavaScript, React, Ruby, and other technologies that affect how we use the world around us.</p>

            <p>My main focus at the moment is absorbing everything I can about software development, and use that knowledge to progress and improve technology while <a className='word_highlight'>positively affecting people's lives</a>.</p>


            <p>When I'm not living the code life, I spend time outdoors hiking,
              camping, and sometimes learning to salsa. I also spend a lot of time with my 13 year old dog, Kaylee.
            </p>
          </div>


           <h3>Experience</h3>
            <section className="experienceDescription1">
              <div className="titleGroup">
                <p className="experienceDate">2016 - 2022</p>
                <div className="jobRole">
                  <p className="title"><strong>Landscape Architect</strong></p>
                  <p className="company">Kimley-Horn</p>
                </div>
               </div>
              <ul className="role-description">

                <li className='listItem'>Responsible for the financial stability and success for over 20 colleagues, including senior partners, overseeing tens of millions of dollars of income. Mentored colleagues on financial practices to improve performance both internally, and with clients.</li>

                <li className='listItem'>Mentored colleagues on financial practices to improve performance both internally, and with clients.</li>

                <li className='listItem'>Deliver well-crafted and detailed construction documents to public and private clients including Target, Amazon, JPMorgan-Chase, and Lifetime</li>
                </ul>
            </section>

            <section className="experienceDescription1">
              <div className="titleGroup">
                <p className="experienceDate">2002 - 2010</p>
                <div className="jobRole">
                  <p className="title"><strong>Marine Staff Sergeant</strong></p>
                  <p className="company">US Marine Corps</p>
                </div>
               </div>
               <ul className="role-description">

                <li className='listItem'>Served as a Marine Security Guard Detachment Commander. Senior military official in multiple countries charged with protecting classified information and American Embassies. </li>

                <li className='listItem'>Amphibious Assault Vehicle Crew Chief responsible for the safety and welfare of over 30 people in combat environments.</li>
              </ul>
            </section>


            <h3>Education</h3>
            <section className="experienceDescription1">
              <div className="titleGroup">
                <p className="experienceDate">2011 - 2015</p>
                <div className="jobRole">
                  <p className="title"><strong>Landscape Architecture</strong></p>
                  <p className="company">Penn State University</p>
                </div>
               </div>
              <ul className="role-description">

                <li className='listItem'>Focused non-program classes on outside perspectives and critical thinking, including learning basic Mandarin, South-east Asian history, and the science and economics of poverty.</li>

                <li className='listItem'>Multi-month summer study abroad program in Tanzania working with locals to create data records of, and improvements to, living, geographic, and environmental conditions</li>
              </ul>
            </section>

            <section className="experienceDescription1">
              <div className="titleGroup">
                <p className="experienceDate">2015 - 2015</p>
                <div className="jobRole">
                  <p className="title"><strong>Urban Design</strong></p>
                  <p className="company">University of Melbourne, AU</p>
                </div>
               </div>
              <ul className="role-description">

                <li className='listItem'>Semester abroad focusing on urban infrastructure an design, as it relates to human needs and interactions.</li>

                <li className='listItem'>Used Geographic information systems (GIS) to map accessibility of public transit, and design provide actionable recommendations to local government officials to improve service for users.</li>

              </ul>
            </section>
        </section>

        <section className="pageRight">
          <h3 className="projects">PROJECTS</h3>
          <p>Project 1</p>
          <img className="projectPic" src="https://picsum.photos/400/200" />
          <p>Project 2</p>
          <img className="projectPic" src="https://picsum.photos/400/200" />
          <p>Project 3</p>
          <img className="projectPic" src="https://picsum.photos/400/200" />

        </section>
      </div>
    </>
  )
}
export default App
