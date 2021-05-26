import React from 'react'
import "./style.css"

export default function Work() {
    return (
        <div id="container2">
        <div id="work">
          <h2>Work</h2>
        </div>
        <div id="projects">
          {/* <!-- each project is wrapped with an A tag to link to github projects, the descriptions given for each linked project are not accurate and simply reflect the information we will be learning in this course--> */}
          <a href="https://te-pokedex-irl.herokuapp.com/" target="_blank">
            {/* <!-- each project references the project class for general formatting and then a secondary class for individual formatting --> */}
            <section className="project main-p">
              {/* <!-- creates a box of text to describe the project --> */}
              <div className="text-box">
                <h3>Pokedex IRL</h3>
                <p>Whos that Pokemon!</p>
              </div>
            </section>
          </a>
          <a
            href="https://igotyu.github.io/project-covid/"
            target="_blank"
          >
            <section className="project proj-2">
              <div className="text-box">
                <h3>Vaccine Locator</h3>
                <p>Find a vaccine!</p>
              </div>
            </section>
          </a>
          <a href="https://github.com/iGotYu/teamprofile-gen" target="_blank">
            <section className="project proj-3">
              <div className="text-box">
                <h3>Team Profile Generator</h3>
                <p>Check your team</p>
              </div>
            </section>
          </a>
          <a href="https://fitnesstrackeray.herokuapp.com/" target="_blank">
            <section className="project proj-4">
              <div className="text-box">
                <h3>Fitness Tracker</h3>
                <p>Track Your fitness!</p>
              </div>
            </section>
          </a>
          <a href="https://still-garden-58748.herokuapp.com/" target="_blank">
            <section className="project proj-5">
              <div className="text-box">
                <h3>Employee Directory</h3>
                <p>React App</p>
              </div>
            </section>
          </a>
        </div>
      </div>
    )
}