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
          <sup>{"with Isomorphic React"} </sup>
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
          <div className="resume-header">7.11.2015</div>
          <div style={{height: '20px'}}></div>
          <div>Savikatu 3 A16 20540 Turku | 0407204728 |</div>
          <div className="italic"><a href="mailto:simo.pekka.koskinen@gmail.com">simo.pekka.koskinen@gmail.com</a></div>
          <div className="italic"><a href="http://github.com/Pasadena" target="_blank">github.com/Pasadena</a></div>
          <div className="italic"><a href="http://fi.linkedin.com/in/simopekkakoskinen" target="_blank"><span id="linkedin"></span>fi.linkedin.com/in/simopekkakoskinen</a></div>
        </ResumeHeadingColumn>
        <ResumeHeadingColumn headingClass="right-cell-header">
          <img id="profilePic" height="300" width="300"/>
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
          <HeadingRow leftContent="2006-2015" rightContent="Master of Science in Engineering, University of Turku"/>
          <DetailRow rowContent="Major: Software engineering, Minor: business knowledge" rowCellClass="row-cell right-cell"/>
          <DetailRow rowContent="Thesis: Adopting automatic acceptance testing" rowCellClass="row-cell right-cell"/>
          <HeadingRow leftContent="2002-2005" rightContent="Graduate, Halikon lukio"/>
        </ResumeSection>
        <ResumeSection header="Work History">
          <HeadingRow leftContent="2009/09-present" rightContent="Cerion Solutions Oy"/>
          <DetailRow rowContent="As a technical consultant I have designed, implemented and maintained several web-based budgeting and strategy planning applications and customer portals." rowCellClass="row-cell right-cell"/>
          <HeadingRow leftContent="2008/05-2008/8" rightContent="Nokia Oyj"/>
          <DetailRow rowContent="Assembly line worker" rowCellClass="row-cell right-cell"/>
          <HeadingRow leftContent="2007/07-2007/8" rightContent="Nokia Oyj"/>
          <DetailRow rowContent="Assembly line worker" rowCellClass="row-cell right-cell"/>
          <HeadingRow leftContent="2005/05-2006/8" rightContent="Nokia Oyj"/>
          <DetailRow rowContent="Assembly line worker" rowCellClass="row-cell right-cell"/>
        </ResumeSection>
        <ResumeSection header="Technical skills">
          <HeadingRow leftContent="Languages" rightContent=""/>
          <DetailRow rowContent="Java, Scala, Javascript, Coffeescript" rowCellClass="row-cell right-cell"/>
          <HeadingRow leftContent="Platforms" rightContent=""/>
          <DetailRow rowContent="Java EE, Node.js, Force.com" rowCellClass="row-cell right-cell"/>
          <HeadingRow leftContent="Front-end libraries" rightContent=""/>
          <DetailRow rowContent="React.js, Angular.js, Backbone.js" rowCellClass="row-cell right-cell"/>
          <HeadingRow leftContent="Back-end frameworks" rightContent=""/>
          <DetailRow rowContent="Play Framework, Tapestry 5, JSF 2" rowCellClass="row-cell right-cell"/>
          <HeadingRow leftContent="Test tools" rightContent=""/>
          <DetailRow rowContent="Cucumber, JUnit" rowCellClass="row-cell right-cell"/>
        </ResumeSection>
        <ResumeSection header="Languages">
          <DetailRow rowContent="Finnish - native proficiency" rowCellClass="row-cell left-cell"/>
          <DetailRow rowContent="English - professional working proficiency" rowCellClass="row-cell left-cell"/>
          <DetailRow rowContent="Swedish - limited proficiency" rowCellClass="row-cell left-cell"/>
          <DetailRow rowContent="German - elementary proficiency" rowCellClass="row-cell left-cell"/>
        </ResumeSection>
        <ResumeSection header="Certifications">
          <DetailRow rowContent="Functional Programming Principles in Scala - Coursera" rowCellClass="row-cell left-cell"/>
          <DetailRow rowContent="Principles of Reactive Programming - Coursera" rowCellClass="row-cell left-cell"/>
        </ResumeSection>
        <ResumeSection header="Volunteer experience">
          <HeadingRow leftContent="2010" rightContent="Vice-Chairman, Digit ry"/>
          <HeadingRow leftContent="2007-2009" rightContent="Director of Recreational Activities, Digit ry"/>
          <HeadingRow leftContent="2009-2014" rightContent="Organizer, Turku Agile Day"/>
        </ResumeSection>
        <ResumeSection header="Intrests">
          <TextAreaRow textAreaContent="In spare time I enjoy programming. I love to try out new technologies, work with small private applications and complete online courses and tutorials. I also enjoy sports. I used to play basketball, but nowadays I jog and play various team sports. In the winter I love to go snowboarding, either in Finland or abroad." />
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

let HeadingRow = React.createClass({
  render() {
    return (
      <div className="row row-header">
        <div className="row-cell left-cell">
          {this.props.leftContent}
        </div>
        <div className="row-cell right-cell">
          {this.props.rightContent}
        </div>
      </div>
    );
  }
});

let DetailRow = React.createClass({
  render() {
    return (
      <div className="row">
      <div className="row-cell left-cell"></div>
        <div className={this.props.rowCellClass}>
          {this.props.rowContent}
        </div>
      </div>
    );
  }
});

let TextAreaRow = React.createClass({
  render() {
    return (
      <div className="row">
        <pre>
          {this.props.textAreaContent}
        </pre>
      </div>
    );
  }
});

module.exports = App;
