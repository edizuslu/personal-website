import React, { Component } from "react";
import Avatar from "react-avatar";

class About extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var profilepic = "images/" + this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
        <div className="row">
          <div className="three columns"></div>
          <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>{bio}</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                <a href="https://edizuslu.herokuapp.com/">Ediz Uslu</a>
                  <br />
                  <a href="edizusluu@gmail.com">edizusluu@gmail.com</a>
                  <br />
                  <a href="https://www.linkedin.com/in/ediz-uslu-93a88312b/">LinkedIn</a>
                  <br />
                  <a href="https://github.com/edizuslu">Github</a>
                  <br />
                  <a href="https://www.hackerrank.com/edizusluu?hr_r=1">HackerRank</a>     
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href={resumeDownload} className="button">
                    <i className="fa fa-download"></i>Download Resume
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
