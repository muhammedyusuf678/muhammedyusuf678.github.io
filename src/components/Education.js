import React, { Component } from "react";

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = { matches: window.matchMedia("(max-width: 768px)").matches };
  }

  componentDidMount() {
    const handler = (e) => this.setState({ matches: e.matches });
    window.matchMedia("(max-width: 768px)").addEventListener("change", handler);
  }
  render() {
    const matches = this.state.matches;
    if (this.props.resumeEducation && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.education;
      var educations = this.props.resumeEducation.map(function (education) {
        return (
          <div
            className='col-sm-6 col-md-6 col-lg-4'
            key={education.name}
            style={{ cursor: "pointer" }}
          >
            <span className='portfolio-item d-block'>
              <div className='foto'>
                <div>
                  <span className='education-date'>
                    {education.fromDate} - {education.toDate}
                  </span>
                  <img
                    src={education.country_flag}
                    alt=''
                    className='ml-3'
                    style={{
                      width: "30px",
                      textAlign: "right",
                      position: "absolute",
                      top: "6px",
                      right: "6px",
                    }}
                  />

                  <br />

                  <span
                    className='mt-3'
                    style={{
                      display: matches ? "inline-block" : "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div
                      className='mt-3 mr-5 ml-3 mb-3 no-shadow'
                      style={{ width: matches ? "" : "30%" }}
                    >
                      <img
                        className='d-block'
                        src={education.logo}
                        alt='university logo'
                        height='60'
                        style={{
                          marginBottom: 0,
                          paddingBottom: 0,
                          position: "relative",
                          width: "auto",
                          margin: "auto",
                          height: matches ? "" : "100px",
                        }}
                      ></img>
                    </div>

                    <span className='text-left mr-3'>
                      <p className='h2 mt-3'>{education.name}</p>
                      <p className='h4 mt-3' style={{ color: "darkblue" }}>
                        {education.degree}
                      </p>
                      <p className='mt-3' style={{ fontSize: "12px" }}>
                        {education.description}
                        <br />
                        <b>Core Courses:</b>
                        {education.core_courses.map((course, idx) => {
                          return (
                            <li key={idx}>
                              <span style={{ marginLeft: "-0.5em" }}>
                                {course}
                              </span>
                            </li>
                          );
                        })}
                      </p>
                    </span>
                  </span>
                </div>
              </div>
            </span>
          </div>
        );
      });
    }

    return (
      <section id='education'>
        <div className='col-md-12' style={{ justifyContent: "space-evenly" }}>
          <h1 className='section-title' style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className='col-md-12 mx-auto'>
            <div className='row mx-auto'>{educations}</div>
          </div>
        </div>
      </section>
    );
  }
}

export default Education;
