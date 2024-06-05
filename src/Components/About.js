import React from 'react';

const About = ({ data }) => {
  if (data) {
    var name = data.name;
    var profilepic = 'images/' + data.image;
    var bio = data.bio;
    var street = data.address.street;
    var country = data.address.country;
    var city = data.address.city;
    var state = data.address.state;
    var zip = data.address.zip;
    var phone = data.phone;
    var email = data.email;
    var resumeDownload_EN = data.resumedownload_EN;
    var resumeDownload_EN_Now = data.resumedownload_EN_Now;
    var resumeDownload_ES = data.resumedownload_ES;
    var resumeDownload_ES_Now = data.resumedownload_ES_Now;

    var networkWsp = data.socialWsp.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });
  }

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img className="profile-pic" src={profilepic} alt="Jm's Profile Pic" />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>

          <p>{bio}</p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{name}</span>
                <br />
                <span>
                  {street}
                  <br />
                  {city} {state} {country}, {zip}
                </span>
                <br />
                <span>{phone} </span>
                <span>{email}</span>
                <ul className="social">{networkWsp}</ul>

                <br />
              </p>
            </div>
            <div className="columns download">
              <div className="row">
                <p>
                  <a href={resumeDownload_EN_Now} className="button">
                    <i className="fa fa-download"></i>Download Resume EN
                  </a>
                </p>
                <p>
                  <a href={resumeDownload_EN} className="button">
                    <i className="fa fa-eye"></i>
                  </a>
                </p>
              </div>
              <div className="row">
                <p>
                  <a href={resumeDownload_ES_Now} className="button">
                    <i className="fa fa-download"></i>Download Resume ES
                  </a>
                </p>
                <p>
                  <a href={resumeDownload_ES} className="button">
                    <i className="fa fa-eye"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
