import React from "react";

let App = class App extends React.Component {
  render() {
    return <Resume />;
  }
}

let Resume = React.createClass({
  render() {
    return (
      <div id="resume" className="resume">
        <ResumeHeader />
      </div>
    );
  }
});

let ResumeHeader = React.createClass({
  render() {
    return (
      <div>
        <div className="resume-header-info">
          <div className="row">
            <div className="row-cell-left">Curriculum Vitae</div>
            <div className="row-cell-right">7.11.2015</div>
          </div>
          <div className="row">
            <div className="row-cell-left">Simo-Pekka Koskinen</div>
          </div>
          <div className="row">
            <div className="row-cell-right">Savikatu 3 A16 20540 Turku | 0407204728 |</div>
            <div className="row-cell-right">simo.pekka.koskinen@gmail.com</div>
            <div className="row-cell-right">Syntymäpaikka -ja aika: 09.01.1986 Halikko</div>
            <div className="row-cell-right">github.com/Pasadena</div>
            <div className="row-cell-right">fi.linkedin.com/in/simopekkakoskinen</div>
          </div>

        </div>
        <div className="resume-profile-picture">
          <img src="profile_pic.jpg"/>
        </div>
      </div>
    );
  }
});

let ResumeBody = React.createClass({
  render() {
    <div>
      <ResumeSection header="Education">
        <HeadingRow leftContent="2006-2015" rightContent="Master of Science in Engineering, University of Turku"/>
        <DetailRow content="Major: Software engineering, Minor: business knowledge" />
        <DetailRow content="Thesis: Adopting automatic acceptance testing" />
        <HeadingRow leftContent="2002-2005" rightContent="Graduate, Halikon lukio"/>
      </ResumeSection>
    </div>
  }
}):

let ResumeSection = React.createClass({
  render() {
    <div>
      <div className="resume-section-header">
        {this.props.header}}
      </div>
      {this.props.children}
    </div>
  }
}):

let HeadingRow = React.createClass({
  render() {
    <div className="row row-header">
      <div className="row-cell-left">
        {this.props.leftContent}
      </div>
      <div className="row-cell-right">
        {this.props.rightContent}
      </div>
    </div>
  }
}):

let DetailRow = React.createClass({
  render() {
    <div className="row">
      <div className="row-cell-right">
        {this.props.content}
      </div>
    </div>
  }
}):

module.exports = App;
