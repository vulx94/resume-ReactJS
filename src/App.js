import React, { Component } from 'react';
import resume from './resume.json';
// Components
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Skillsets from './Components/Skillsets';
import Educations from './Components/Educations';

import './App.css';

class App extends Component {
  render() {
    console.log(resume);
    return (
      <div className="App">
        <div className="wrapper">
            <div className="sidebar-wrapper">
                <div className="profile-container">
                    <img className="profile img-responsive" src="assets/images/18193412_692227404295741_7928961104724679772_o.jpg" alt="" />
                    <h1 className="name">{resume.name}</h1>
                    <h3 className="tagline">Fresher Front-End Developer</h3>
                </div>

                <div className="contact-container container-block">
                    <ul className="list-unstyled contact-list">
                        <li className="email"><i className="fa fa-envelope"></i><a href="mailto: vulx94@gmail.com">{resume.email}</a></li>
                        <li className="phone"><i className="fa fa-home"></i><a href={resume.addressURL}>{resume.address}</a></li>
                        <li className="phone"><i className="fa fa-phone"></i><a href="tel:+84 1215877891">{resume.phone}</a></li>
                        <li className="github"><i className="fa fa-github"></i><a href={resume.gitHubURL} target="_blank">{resume.gitHub}</a></li>
                        <li className="twitter"><i className="fa fa-facebook"></i><a href={resume.facebookURL} target="_blank">{resume.facebook}</a></li>
                    </ul>
                </div>

                <div className="education-container container-block">
                    <h2 className="container-block-title">Education</h2>
                    {resume.education.map((item,index) =>{
                      return(
                    <Educations {...item}/>
                    )
                    })}

                </div>

                <div className="languages-container container-block">
                    <h2 className="container-block-title">Languages</h2>
                    <ul className="list-unstyled interests-list">
                        <li>Vietnamese <span className="lang-desc">(Native)</span></li>
                        <li>English <span className="lang-desc">(Professional)</span></li>
                        </ul>
                </div>

                <div className="interests-container container-block">
                    <h2 className="container-block-title">Interests</h2>
                    <ul className="list-unstyled interests-list">
                        <li>Movies</li>
                        <li>Walking</li>
                        <li>DComic</li>
                    </ul>
                </div>

            </div>


            <div className="main-wrapper">
                <section className="section summary-section">
                    <h2 className="section-title"><i className="fa fa-user"></i>Qualifications Summary</h2>
                    <div className="summary">
                      <ul>
                        <li>Have a passion about web developper. </li>
                        <li>Always persue perfection and always finish the work on time. </li>
                        <li>Love to work with ReactJS to build beautiful and functional Web App.</li>
                        <li>Willing to learn and try my best to become a solid developper in the furture. </li>
                      </ul>
                    </div>
                </section>

                <section className="section summary-section">
                  <h2 className="section-title"><i className="fa fa-file"></i>Science</h2>
                  <div className="summary">
                       <ul>
                        <li>I want to attend "Aglie Software Development with Scrum" course in Axon Active which last from 7 November to 8 December 2016</li>
                        <li>I want to attend ReactJS course in codecampvn which last from  1 June  to 30 June 2017</li>
                        </ul>
                </div>
                    </section>

                <section className="section experiences-section">
                    <h2 className="section-title"><i className="fa fa-briefcase"></i>Experiences</h2>
                    {resume.experiences.map((item,index) => {
                      return(
                        <Experience {...item} />
                      )
                    })}
                </section>

                <section className="section projects-section">
                    <h2 className="section-title"><i className="fa fa-archive"></i>Projects</h2>
                    {resume.projects.map((item, index) => {
                      return(
                        <Projects {...item} />
                      )
                    })}

                </section>

                <section className="skills-section section">
                    <h2 className="section-title"><i className="fa fa-rocket"></i>Skills &amp; Proficiency</h2>
                    {resume.skills.map((item,index) => {
                      return (
                      <Skillsets {...item} />
                      )
                    })}
                </section>
            </div>
        </div>

        <footer className="footer">
        </footer>
      </div>
    );
  }
}

export default App;
