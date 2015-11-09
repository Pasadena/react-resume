import React from "react";

let App = class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Resume />
        <Footer/>
      </div>
    );
  }
}

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
      <div>
        <div className="resume-header-info">
          <div className="row resume-header">
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
          <img id="profilePic" height="300" width="300"/>
        </div>
      </div>
    );
  }
});

let ResumeBody = React.createClass({
  render() {
    return (
      <div>
        <ResumeSection header="Education">
          <HeadingRow leftContent="2006-2015" rightContent="Master of Science in Engineering, University of Turku"/>
          <DetailRow rowContent="Major: Software engineering, Minor: business knowledge" rowCellClass="row-cell-right"/>
          <DetailRow rowContent="Thesis: Adopting automatic acceptance testing" rowCellClass="row-cell-right"/>
          <HeadingRow leftContent="2002-2005" rightContent="Graduate, Halikon lukio"/>
        </ResumeSection>
        <ResumeSection header="Work History">
          <HeadingRow leftContent="2009/09-present" rightContent="Cerion Solutions Oy"/>
          <DetailRow rowContent="As a technical consultant I have designed, implemented and maintained several web-based budgeting and strategy planning applications and customer portals." rowCellClass="row-cell-right"/>
          <HeadingRow leftContent="2008/05-2008/8" rightContent="Nokia Oyj"/>
          <DetailRow rowContent="Assembly line worker" rowCellClass="row-cell-right"/>
          <HeadingRow leftContent="2007/07-2007/8" rightContent="Nokia Oyj"/>
          <DetailRow rowContent="Assembly line worker" rowCellClass="row-cell-right"/>
          <HeadingRow leftContent="2005/05-2006/8" rightContent="Nokia Oyj"/>
          <DetailRow rowContent="Assembly line worker" rowCellClass="row-cell-right"/>
        </ResumeSection>
        <ResumeSection header="Technical skills">
          <HeadingRow leftContent="Languages" rightContent=""/>
          <DetailRow rowContent="Java, Scala, Javascript, Coffeescript" rowCellClass="row-cell-right"/>
          <HeadingRow leftContent="Platforms" rightContent=""/>
          <DetailRow rowContent="Java EE, Node.js, Force.com" rowCellClass="row-cell-right"/>
          <HeadingRow leftContent="Front-end libraries" rightContent=""/>
          <DetailRow rowContent="React.js, Angular.js, Backbone.js" rowCellClass="row-cell-right"/>
          <HeadingRow leftContent="Back-end frameworks" rightContent=""/>
          <DetailRow rowContent="Play Framework, Tapestry 5, JSF 2" rowCellClass="row-cell-right"/>
          <HeadingRow leftContent="Test tools" rightContent=""/>
          <DetailRow rowContent="Cucumber, JUnit" rowCellClass="row-cell-right"/>
        </ResumeSection>
        <ResumeSection header="Languages">
          <DetailRow rowContent="Finnish - native proficiency" rowCellClass="row-cell-left"/>
          <DetailRow rowContent="English - professional working proficiency" rowCellClass="row-cell-left"/>
          <DetailRow rowContent="Swedish - limited proficiency" rowCellClass="row-cell-left"/>
          <DetailRow rowContent="German - elementary proficiency" rowCellClass="row-cell-left"/>
        </ResumeSection>
        <ResumeSection header="Certifications">
          <DetailRow rowContent="Functional Programming Principles in Scala - Coursera" rowCellClass="row-cell-left"/>
          <DetailRow rowContent="Principles of Reactive Programming - Coursera" rowCellClass="row-cell-left"/>
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
        <div className="row-cell-left">
          {this.props.leftContent}
        </div>
        <div className="row-cell-right">
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
