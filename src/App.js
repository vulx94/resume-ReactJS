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
                    <img className="profile" src="assets/images/2014-07-24 14.55.12.jpeg" alt="" />
                    <h1 className="name">{resume.name}</h1>
                    <h3 className="tagline">Full Stack Developer</h3>
                </div>

                <div className="contact-container container-block">
                    <ul className="list-unstyled contact-list">
                        <li className="email"><i className="fa fa-envelope"></i><a href="mailto: le.khoa2209@gmail.com">{resume.email}</a></li>
                        <li className="phone"><i className="fa fa-phone"></i><a href="tel:+84 933991839">{resume.phone}</a></li>
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
                        <li>French <span className="lang-desc">(Readable)</span></li>
                    </ul>
                </div>

                <div className="interests-container container-block">
                    <h2 className="container-block-title">Interests</h2>
                    <ul className="list-unstyled interests-list">
                        <li>Climbing</li>
                        <li>Snowboarding</li>
                        <li>Cooking</li>
                    </ul>
                </div>

            </div>

            <div className="main-wrapper">
                <section className="section summary-section">
                    <h2 className="section-title"><i className="fa fa-user"></i>Career Profile</h2>
                    <div className="summary">
                        <p>Summarise your career here lorem ipsum dolor sit amet, consectetuer adipiscing elit. You can <a href="http://themes.3rdwavemedia.com/website-templates/orbit-free-resume-cv-template-for-developers/" target="_blank">download this free resume/CV template here</a>. Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.</p>
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
