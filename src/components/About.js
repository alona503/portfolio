import React from 'react'

export default function About() {
  return (
    <div>
      <div className="top">
        <img className="avatar" src="avatar.jpg" alt="Avatar" />
        <div className="shortDescription">
          <h1>
            Alona budovoi
            <br />
            Web developer & QA Engineer.
          </h1>
          <br />
        </div>
      </div>
      <div className="bottom">
        <h1 className="leftTitle">Web Developer Journey</h1>
        <div className="rightDescription">
          <h3>Studied in 2020</h3>
          <p>SV College - FrontEnd Developer</p>
          <p>Udemy - Full Stack Developer</p>
          <h3>Employed at "Abilisense" as intership for FronrEnd Developer</h3>
          <h3>Skills</h3>
          <p>FrontEnd Developer : </p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Jquery</li>
            <li>JavaScript</li>
            <li>ReactJS</li>
            <li>React Hooks</li>
          </ul>
          <p>BackEnd Developer : </p>
          <ul>
            <li>NodeJS</li>
            <li>Express</li>
            <li>SQL</li>
            <li>MongoDB</li>
            <li>Rest API</li>
          </ul>
        </div>
        <div className="bottom ovride">
          <h1 className="leftTitle">QA Engineer Journey</h1>
          <div className="rightDescription">
            <h3>Studied in 2019</h3>
            <h3>Employed at "Inmanage"</h3>
            <p>SV College - Manual QA Testing Engineer</p>
            <h3>Skills</h3>
            <ul>
              <li>STD</li>
              <li>STP</li>
              <li>SRS</li>
              <li>DevTools</li>
              <li>Jira</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
