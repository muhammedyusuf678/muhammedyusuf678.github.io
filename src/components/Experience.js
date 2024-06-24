import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";
import ExperienceDetailsModal from "./ExperienceDetailsModal";

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: {},
      detailsModalShow: false,
    };
  }

  render() {
    let detailsModalShow = (data) => {
      this.setState({ detailsModalShow: true, deps: data });
    };

    let detailsModalClose = () => this.setState({ detailsModalShow: false });

    if (this.props.resumeExperience && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.experience;
      var works = this.props.resumeExperience.map(function (work, i) {
        const technologies = work.technologies;
        const mainTechnologies = work.mainTech;

        var mainTech = mainTechnologies.map((technology, i) => {
          return (
            <Badge pill className='main-badge mr-2 mb-2' key={i}>
              {technology}
            </Badge>
          );
        });
        var tech = technologies.map((technology, i) => {
          return (
            <Badge pill className='experience-badge mr-2 mb-2' key={i}>
              {technology}
            </Badge>
          );
        });
        return (
          <VerticalTimelineElement
            className='vertical-timeline-element--work'
            date={work.years}
            iconStyle={{
              background: "#AE944F",
              color: "#fff",
              textAlign: "center",
            }}
            style={{ cursor: "pointer" }}
            icon={<i className='fa fa-hammer experience-icon'></i>}
            key={i}
            onTimelineElementClick={() => detailsModalShow(work)}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <div style={{ fmarginBottom: "4px" }}>{mainTech}</div>

              <div style={{ marginBottom: "4px", textAlign: "right" }}>
                Learn More
                <i
                  className='fas fa-expand-alt'
                  style={{ marginLeft: "5px" }}
                ></i>
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <h3
                  className='vertical-timeline-element-title'
                  style={{ textAlign: "left", float: "none" }}
                >
                  {work.title}
                </h3>
                <h4
                  className='vertical-timeline-element-subtitle'
                  style={{ textAlign: "left", color: "darkblue" }}
                >
                  {work.company}
                </h4>
              </div>
              <div>
                <img
                  src={work.company_logo}
                  alt='company logo'
                  height='30'
                  style={{
                    marginBottom: 0,
                    paddingBottom: 0,
                    position: "relative",
                  }}
                />
              </div>
            </div>

            <div style={{ textAlign: "left", marginTop: "15px" }}>{tech}</div>
          </VerticalTimelineElement>
        );
      });
    }

    return (
      <section id='resume' className='pb-5'>
        <div className='col-md-12 mx-auto'>
          <div className='col-md-12'>
            <h1 className='section-title' style={{ color: "black" }}>
              <span className='text-black' style={{ textAlign: "center" }}>
                {sectionName}
              </span>
            </h1>
          </div>
        </div>
        <div className='col-md-8 mx-auto'>
          <VerticalTimeline>
            {works}

            {/* Default element */}
            <VerticalTimelineElement
              iconStyle={{
                background: "#AE944F",
                color: "#fff",
                textAlign: "center",
              }}
              icon={
                <i className='fas fa-hourglass-start mx-auto experience-icon'></i>
              }
            />
          </VerticalTimeline>
        </div>

        <ExperienceDetailsModal
          show={this.state.detailsModalShow}
          onHide={detailsModalClose}
          data={this.state.deps}
        />
      </section>
    );
  }
}

export default Experience;
