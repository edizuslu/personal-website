import React, { Component } from "react";
import Avatar from "react-avatar";

class Resume extends Component {
  render() {
    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function (education) {
        return (
          <div key={education.school}>
            <h3>{education.school}</h3>
            <p className="info">
              {education.degree} <span>&bull;</span>
              <em className="date">{education.graduated}</em>
            </p>
            <p>{education.description}</p>
          </div>
        );
      });
      var work = this.props.data.work.map(function (work) {
        console.log("Debug" + work.company);
        let moreDesc;
        if (work.company == "JotForm") {
          const video1 = <a href="https://www.youtube.com/watch?v=lV-T9uKOrCg&feature=youtu.be">Demo video</a>;
          const repo1 = <a href="https://github.com/edizuslu/JotForm-Voice">Project repository</a>;

          const video2 = <a href="https://www.youtube.com/watch?v=DAMnlGtL_Tg&feature=youtu.be">Demo video</a>;
          const repo2 = <a href="https://github.com/edizuslu/JotForm-Submission-Generator">Project repository</a>;
          
          moreDesc =(
            <>
            
            <li>JotForm Voice, a chrome extension which allows to fill forms including different type of form widgets by using
voice for users with disabilities. {video1} and {repo1} are published.</li>
            <li>Random Submission Generator, a developer tool web app developed for developing and testing processes of main
product of JotForm. {video2} and {repo2} are published.</li>

          <p>Experienced in web development by using React (JS, CSS, HTML, Redux state management, Hooks) for web application and
Vanilla Javascript, Webpack for Chrome extension. Improved clean code capabilities by using ESlint (Airbnb code standards)
in coding process</p>
            </>
            ); 
            
          
        }else if (work.company == "ESEN System & Integration"){
          moreDesc =(
            <>
            <p>Team member of voice recognition project of signal processing department</p>
            <li>Translated automatic segmentation and signal processing algorithms which developed with MATLAB, by
implementing in Python.</li>
            <li>Designed and managed project database in MySQL</li>
            <li>Developed database user interface which has features filtering, export/import operations and data preprocessing
in Java</li>
            <li>Contributed directly main product of project by integrating segmentation algorithms with product, adding new
front-end features, optimization with parallel computing methods and solving memory leak issues in Python</li>
<p>Experienced working in different parts of project such as database, integration, optimization and feature development
also weekly code reviews which improved me in code manufacturing processes and realize concurrency between team
members</p>
            </>
            ); 
        }else{
          const uniWebSite = <a href="https://www.etu.edu.tr/tr/haber/bilgisayar-muhendisligi-2017-18-yaz-donemi-one-cikan-ortak-egitim-deneyimleri">Computer Engineering Highlighted Intern</a>;
          moreDesc =(
            <>
            <p>Team member of mission planning software of an unmanned aerial vehicle project</p>
            <li>Applied and updated documented test procedures.</li>
            <li>Reported new maintainable issues and verified closed issues by using SVN and JIRA.</li>
            <li>Had the opportunity to participate in some formal phases of project test and evaluation processes, DryRun Process
(Qualification Test) and Acceptance Test.</li>
            <li>Developed performance monitoring tool for optimizing project services, using shell scripting</li>
            <li>Help feature of software is implemented in Java</li>
            <li>Improved documentation skills by preparing user manuals of software.</li>
<p>Experienced a lot of serious processes of software business such as DryRun, Acceptance Test. Learn and practiced AgileScrum methodology. </p>
<p>*This intern is selected as {uniWebSite} and published in university web site. It was so motivated
for my first internship.</p>

            </>
            ); 
        }       
        return (
          <div key={work.company}>
            <Avatar src={work.icon} size={50} round="10px" />
            <h3>{work.company}</h3>
            <p className="info">
              {work.title}
              <span>&bull;</span> <em className="date">{work.years}</em>
            </p>
            <p>{work.description}</p>
            {moreDesc}
          </div>
        );
      });
      var skills = this.props.data.skills.map(function (skills) {
        var className = "bar-expand " + skills.name.toLowerCase();
        return (
        <p><b>{skills.name}</b> = {skills.desc}</p>
        );
      });
    }

    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{education}</div>
            </div>
          </div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">{work}</div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <p>{skillmessage}</p>

            <div className="bars">
              <ul className="skills">{skills}</ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
