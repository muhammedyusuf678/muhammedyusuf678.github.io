import React, { Component } from "react";

class Footer extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var networks = this.props.sharedBasicInfo.social.map(function (network) {
        return (
          <span key={network.name} className='m-4'>
            <a href={network.url} target='_blank' rel='noopener noreferrer'>
              <i className={network.class}></i>
            </a>
          </span>
        );
      });
    }

    return (
      <footer>
        <div className='col-md-12'>
          <a
            className='btn btn-light btn-lg mt-5'
            href='./resume/cv-muhammed-dada-d.pdf'
            target='new'
            style={{ color: "black" }}
          >
            <i className='fas fa-download mr-3'></i>
            <span>Download Resume</span>
          </a>
          <p className='mt-4'>
            <b>Let's Connect!</b>
          </p>
          <div className='social-links'>{networks}</div>
          <div className='copyright py-4 text-center'>
            <div className='container'>
              <small>
                <b>E-mail:</b> muhammed.yusuf.dada@gmail.com
                <br />
                Copyright &copy;{" "}
                {this.props.sharedBasicInfo
                  ? this.props.sharedBasicInfo.name
                  : "???"}
              </small>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
