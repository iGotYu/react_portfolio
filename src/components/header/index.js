import React from 'react'
import "./style.css"

export default function Header() {
    return (
        <div id="header">
            <h1>Andrew Yu's Portfolio</h1>
      <nav className="navigation">
        <ul>
          <li><a href="#about-me">About Me</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#contact-me">Contact Me</a></li>
          <li><a href="#resume">Resume</a></li>
        </ul>
        </nav>
        </div>
    )
}