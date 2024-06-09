import React, { Component } from "react";
import GoogleAd from './google_ad';

export default class About extends Component {
  render() {
// create a style object that is applied
// to the div wrapping the adSense code
// no styling required - just leave style object empty
const style = {
  marginTop: '15px',
  marginBottom: '20px'
};

    

    return (
      <div>
        <section className="colorlib-about" data-section="about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="row row-bottom-padded-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="col-md-12">
                    <div className="about-desc">
                      <span className="heading-meta">About Me</span>
                      <h2 className="colorlib-heading">Who Am I?</h2>
                      <p>
                        I have {(new Date().getFullYear()) - 2022}+ years of IT experience. 
                        I am a frontend developer with react and nextJS experience. I work with visual studio code to develope web appliction which are mobile frendly view.
                      </p>
                      <p>
                        I have started reflecting my ideas through
                        websites/webpages, eventhough I have developed many
                        websites in my career this is new for me to express my
                        own thought through this media, if you have any
                        suggestion you can write me back.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="colorlib-about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">
                  Here are some of my expertise
                </h2>
              </div>
            </div>
            <div className="row row-pt-md">
              <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                  <span className="icon">
                    <i className="icon-globe" />
                  </span>
                  <div className="desc">
                    <h3>Web Development</h3>
                    <p>
                      I have developed websites in React and Next JS. This page
                      is developed using React. I use NPM to manage build and
                      package for web development.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                  <span className="icon">
                    <i className="icon-tag" />
                  </span>
                  <div className="desc">
                    <h3>Frameworks/Tools</h3>
                    <p>
                    Developed dynamic and responsive web applications using the React.js framework in JavaScript. I am proficient in writing automated tests and CI/CD pipelines using Jenkins and Groovy scripts. I have extensive experience with CSS for styling, and I have optimized performance and designed intuitive UI/UX interfaces.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                  <span className="icon">
                    <i className="icon-stopwatch" />
                  </span>
                  <div className="desc">
                    <h3>Hobby</h3>
                    <p>
                      Running is my passion! I am a half-marathon runner and participate in local parkruns on weekends. I have pollen allergies, so I minimize running during the summer. In winter, I typically run five days a week.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
