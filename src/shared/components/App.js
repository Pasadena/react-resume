import React from "react";

let App = class App extends React.Component {

  render() {
    return (
      <div className="container">
        <Header />
        <Resume />
        <Footer/>
      </div>
    );
  }
}

let Header = React.createClass({
  render() {
    return (
      <div className="header">
        <h1>
          My React Resume <br/>
          <sup>{"- with Isomorphic React"} </sup>
        </h1>
      </div>
    );
  }
});

let Resume = React.createClass({
  render() {
    return (
      <div id="resume" className="resume">
        <ResumeHeader />
        <ResumeBody />
      </div>
    );
  }
});

let ResumeHeader = React.createClass({
  render() {
    return (
      <ResumeHeading>
        <ResumeHeadingColumn headingClass="left-cell-header">
          <div className="resume-header">Curriculum Vitae</div>
          <div className="resume-owner">Simo-Pekka Koskinen</div>
        </ResumeHeadingColumn>
        <ResumeHeadingColumn headingClass="middle-cell-header">
          <div className="resume-header-date">9.12.2015</div>
          <div style={{height: '20px'}}></div>
          <div>Savikatu 3 A16 20540 Turku</div>
          <div>tel. 0407204728</div>
          <EmailCell />
          <IconCell imageId="linkedin" linkName="http://fi.linkedin.com/in/simopekkakoskinen" />
          <IconCell imageId="github" linkName="http://github.com/Pasadena" />
          <IconCell imageId="twitter" linkName="http://twitter.com/spkoskinen" />
        </ResumeHeadingColumn>
        <ResumeHeadingColumn headingClass="right-cell-header">
          <img id="profilePic" className="profile-picture"/>
        </ResumeHeadingColumn>
      </ResumeHeading>
    );
  }
});

let ResumeBody = React.createClass({
  render() {
    return (
      <div>
        <ResumeSection header="Education">
          <ResumeSectionRow leftContent="2006-2015" rightContent="Master of Science in Engineering, University of Turku" heading />
          <ResumeSectionRow rightContent="Major: Software engineering, Minor: business knowledge" rightCellClasses="small-font"/>
          <ResumeSectionRow rightContent="Thesis: Adopting automatic acceptance testing" rightCellClasses="small-font" />
          <ResumeSectionRow leftContent="2002-2005" rightContent="Graduate, Halikon lukio" heading/>
        </ResumeSection>
        <ResumeSection header="Work History">
          <ResumeSectionRow leftContent="2009/09-present" rightContent="Cerion Solutions Oy" heading />
          <ResumeSectionRow rightContent="As a technical consultant I have designed, implemented and maintained several web-based budgeting and strategy planning applications and customer portals." rightCellClasses="small-font"/>
          <ResumeSectionRow leftContent="2008/05-2008/8" rightContent="Nokia Oyj" heading />
          <ResumeSectionRow rightContent="Assembly line worker" rightCellClasses="small-font"/>
          <ResumeSectionRow leftContent="2007/05-2007/8" rightContent="Nokia Oyj" heading />
          <ResumeSectionRow rightContent="Assembly line worker" rightCellClasses="small-font" />
          <ResumeSectionRow leftContent="2005/05-2006/8" rightContent="Nokia Oyj" heading />
          <ResumeSectionRow rightContent="Assembly line worker" rightCellClasses="small-font" />
        </ResumeSection>
        <ResumeSection header="Technical skills">
          <ResumeSectionRow leftContent="Programming languages" rightContent="Java, Scala, Javascript, Coffeescript" leftCellClasses="row-header" />
          <ResumeSectionRow leftContent="Platforms" rightContent="Java EE, Node.js, Force.com" leftCellClasses="row-header" />
          <ResumeSectionRow leftContent="Front-end technologies" rightContent="HTML 5, CSS, LESS, React.js, Angular.js, Backbone.js" leftCellClasses="row-header" />
          <ResumeSectionRow leftContent="Back-end frameworks" rightContent="Play Framework, Tapestry 5, JSF 2" leftCellClasses="row-header" />
          <ResumeSectionRow leftContent="Test tools" rightContent="Cucumber, JUnit" leftCellClasses="row-header" />
          <ResumeSectionRow leftContent="Project build tools" rightContent="Maven, Ant, Ivy, Grunt, Webpack" leftCellClasses="row-header" />
          <ResumeSectionRow leftContent="Databases and DALs" rightContent="MSSQL Server, Oracle, PostgreSQL, Hibernate, Slick" leftCellClasses="row-header" />
          <ResumeSectionRow leftContent="Operating systems" rightContent="Windows, Linux (Ubuntu, CentOS)" leftCellClasses="row-header" />
          <ResumeSectionRow leftContent="Version Controls" rightContent="Git, Svn" leftCellClasses="row-header" />
        </ResumeSection>
        <ResumeSection header="Languages">
          <ResumeSectionRow leftContent="Finnish" rightContent="Native proficiency" leftCellClasses="row-header"/>
          <ResumeSectionRow leftContent="English" rightContent="Professional working proficiency" leftCellClasses="row-header"/>
          <ResumeSectionRow leftContent="Swedish" rightContent="Limited proficiency" leftCellClasses="row-header"/>
          <ResumeSectionRow leftContent="German" rightContent="Elementary proficiency" leftCellClasses="row-header"/>
        </ResumeSection>
        <ResumeSection header="Certifications">
          <SingleContentRow content="Functional Programming Principles in Scala - Coursera" />
          <SingleContentRow content="Principles of Reactive Programming - Coursera" />
        </ResumeSection>
        <ResumeSection header="Volunteer experience">
          <ResumeSectionRow leftContent="2009-2014" rightContent="Organizer, Turku Agile Day"/>
          <ResumeSectionRow leftContent="2010" rightContent="Vice-Chairman, Digit ry"/>
          <ResumeSectionRow leftContent="2007-2009" rightContent="Director of Recreational Activities, Digit ry"/>
          <ResumeSectionRow leftContent="2007-2009" rightContent="Student tutor, Digit ry"/>
        </ResumeSection>
        <ResumeSection header="Intrests">
          <SingleContentRow textArea content="In spare time I enjoy programming. I love to try out new technologies, work with small private applications and complete online courses and tutorials. I also enjoy sports. I used to play basketball, but nowadays I jog and play various team sports. In the winter I love to go snowboarding, either in Finland or abroad."/>
        </ResumeSection>
      </div>
    );
  }
});

let Footer = React.createClass({
    render() {
      return (
        <p className="credits">View Sources in <a href="https://github.com/Pasadena/react-resume" target="_blank">Github</a></p>
      );
    }
});

let ResumeHeading = React.createClass({
  render() {
    return (
      <div className="resume-heading-section">
        {this.props.children}
      </div>
    );
  }
});

let ResumeHeadingColumn = React.createClass({
  render() {
    let classes = this.props.headingClass + " resume-heading-column";
    return (
      <div className={classes}>
        {this.props.children}
      </div>
    );
  }
});

let IconCell = React.createClass({
    render() {
      return (
        <div className="italic url-row">
          <img id={this.props.imageId} height="20" width="20" className="some-icon" alt={this.props.linkName}/>
          <a href={this.props.linkName} target="_blank">{this.props.linkName}</a>
        </div>
      );
    }
});

let EmailCell = React.createClass({
    render() {
      return (
        <div className="italic url-row">
          <span className="glyphicon glyphicon-envelope some-icon" aria-hidden="true"></span>
          <a href="mailto:simo.pekka.koskinen@gmail.com">simo.pekka.koskinen@gmail.com</a>
        </div>
      );
    }
});

let ResumeSection = React.createClass({
  render() {
    return (
      <div className="resume-section">
        <div className="resume-section-header">
          {this.props.header}
        </div>
        {this.props.children}
      </div>
    );
  }
});

let ResumeSectionRow = React.createClass({
  render() {
    let rowClasses = this.props.heading ? "row row-header" : "row";
    let leftCellClasses = this.props.leftCellClasses ? `row-cell left-cell ${this.props.leftCellClasses}` : "row-cell left-cell";
    let rightCellClasses = this.props.rightCellClasses ? `row-cell right-cell ${this.props.rightCellClasses}` : "row-cell right-cell";
    return (
      <div className={rowClasses}>
        <div className={leftCellClasses}>
          <p>{this.props.leftContent}</p>
        </div>
        <div className={rightCellClasses}>
          <p>{this.props.rightContent}</p>
        </div>
      </div>
    );
  }
});

let SingleContentRow = React.createClass({
  render() {
    let content = this.props.textArea ? <pre>{this.props.content}</pre> : this.props.content;
    return (
      <div className="row">
          {content}
      </div>
    );
  }
});

module.exports = App;
