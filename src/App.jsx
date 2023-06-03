import React, { useState } from 'react'
import './App.css'
import './App-mobile.css'

const App = () => {
  return(
  <>
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

        <section className="pageLeft">
          <h1>Chris Frey</h1>
          <h3>Web Developer and Software Engineer</h3>
          <h5>I build things for people, and the web.</h5>

          <ul className="contact">
            <li><a href="mailto:chris.frey@hey.com" className="fa fa-at" style="color: #49ace9;"></a></li>
            <li><a href="https://github.com/Chris-Frey" target="_blank" className="fa fa-github" style="color: #49ace9;"></a></li>
            <li><a href="https://www.linkedin.com/in/chris-l-frey/" target="_blank" className="fa fa-linkedin" style="color: #49ace9;"></a></li>
          </ul>

          <h3>About Me</h3>
          <div className='aboutMe'>
            <p>Since I was a child I've been playing around with computers, and seeing what I could break. I took a detour through the <a className='word_highligh'>military</a>, and then got licensed the <a className='word_highligh'>Landscape Architecture</a> field, where I honed my leadership and critical thinking skills. I'm now knee deep in JavaScript, React, Ruby, and other technologies that affect how we use the world around us.</p>

            <p>My main focus at the moment is absorbing everything I can about software development, and use that knowledge to progress and improve technology while <a className='word_highlight'>positively affecting people's lives</a>.</p>


            <p>When I'm not living the code life, I spend time outdoors hiking,
              camping, and sometimes learning to salsa. I also spend a lot of time with my 13 year old dog, Kaylee.
            </p>
          </div>
        </section>

           <h3>Experience</h3>
            <section className="experienceDescription1">
              <div className="titleGroup">
                <p className="experienceDate">2016 - 2022</p>
                <div className="jobRole">
                  <p className="title"><a className="orange_highlight">Landscape Architect</a></p>
                  <p className="company">Kimley-Horn</p>
                </div>
               </div>
              <ul className="role-description">
                <li className='listItem'>Deliver well-crafted and detailed construction documents to public and private clients including Target, Amazon, JPMorgan-Chase, and Lifetime</li>

                </ul>
            </section>

            <section className="experienceDescription1">
              <div className="titleGroup">
                <p className="experienceDate">2016 - 2022</p>
                <div className="jobRole">
                  <p className="title"><a className="orange_highlight">Landscape Architect</a></p>
                  <p className="company">Kimley-Horn</p>
                </div>
               </div>
              <p className="role-description">Deliver well-crafted and detailed construction documents to public and private clients including Target, Amazon, JPMorgan-Chase, and Lifetime</p>
            </section>



    <section className="pageRight">
      <p className="projects">PROJECTS</p>
      <img className="projectPic" src="https://picsum.photos/400/200" />
      <p>Project 1</p>
      <img className="projectPic" src="https://picsum.photos/400/200" />
      <p>Project 2</p>
      <img className="projectPic" src="https://picsum.photos/400/200" />
      <p>Project 3</p>
    </section>
  </>
  )
}
export default App
