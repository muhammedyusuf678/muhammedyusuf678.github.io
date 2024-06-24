import React, { Component } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: {},
      detailsModalShow: false,
      matches: window.matchMedia("(max-width: 768px)").matches,
    };
  }

  componentDidMount() {
    const handler = (e) => this.setState({ matches: e.matches });
    window.matchMedia("(max-width: 768px)").addEventListener("change", handler);
  }

  render() {
    const matches = this.state.matches;

    let detailsModalShow = (data) => {
      this.setState({ detailsModalShow: true, deps: data });
    };

    let detailsModalClose = () => this.setState({ detailsModalShow: false });
    if (this.props.resumeProjects && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.projects;
      var projects = this.props.resumeProjects.map(function (project) {
        return (
          <div
            className='col-sm-12 col-md-6 col-lg-4'
            key={project.title}
            style={{ cursor: "pointer" }}
          >
            <span className='portfolio-item d-block'>
              <div className='foto' onClick={() => detailsModalShow(project)}>
                <div>
                  <img
                    src={project.images[0]}
                    alt='projectImages'
                    height={matches ? "" : "230"}
                    style={{
                      marginBottom: 0,
                      paddingBottom: 0,
                      position: "relative",
                    }}
                  />

                  <span className='project-date'>{project.startDate}</span>
                  <span
                    className='learn-more'
                    style={{
                      marginTop: "2px",
                      textAlign: "right",
                      position: "absolute",
                      right: "6px",
                    }}
                  >
                    Learn More
                    <i
                      className='fas fa-expand-alt'
                      style={{ marginLeft: "5px" }}
                    ></i>
                  </span>
                  <br />
                  <p className='project-title-settings mt-3 mb-0'>
                    {project.title}
                  </p>
                </div>
              </div>
            </span>
          </div>
        );
      });
    }

    return (
      <section id='portfolio'>
        <div className='col-md-12'>
          <h1 className='section-title' style={{ color: "white" }}>
            <span>{sectionName}</span>
          </h1>
          <div className='col-md-12 mx-auto'>
            <div className='row mx-auto'>{projects}</div>
          </div>
          <ProjectDetailsModal
            show={this.state.detailsModalShow}
            onHide={detailsModalClose}
            data={this.state.deps}
          />
        </div>
      </section>
    );
  }
}

export default Projects;
