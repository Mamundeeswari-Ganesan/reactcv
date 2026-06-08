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
                        I am a Software Engineer and Digital Transformation Specialist with {(new Date().getFullYear()) - 2022}+ years of software engineering experience across backend and frontend systems. I focus on building scalable services, automation workflows, and reliable delivery pipelines using Python, AWS, and modern engineering practices.
                      </p>
                      <p>
                        I have worked across media and retail technology, contributing to cloud-native platforms, microservices, REST APIs, CI/CD, and test automation. My recent work includes media supply chain and fulfillment initiatives, where I have helped reduce manual intervention and improve operational efficiency through practical engineering solutions.
                      </p>
                      <p>
                        I was nominated for the Apollo Inspiration Award and
                        received the Pure Excellence Award for technical
                        contributions. I also enjoy prototyping innovation ideas,
                        including LLM-based content discovery concepts.
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
                      I build responsive applications with React, Next.js,
                      TypeScript, and modern UI practices, delivering
                      consistent experiences across desktop and mobile.
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
                    <h3>Backend & Cloud</h3>
                    <p>
                      I design and implement backend services using Python,
                      Java, Spring Boot, and AWS, with strong focus on
                      microservices architecture, integration, and reliability.
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
                    <h3>Quality & Delivery</h3>
                    <p>
                      I apply Agile delivery, CI/CD, code quality gates,
                      and testing strategies including unit and end-to-end
                      testing to ship stable production software.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                <div className="about-desc" style={{ marginTop: "10px" }}>
                  <span className="heading-meta">Technical Skills</span>
                  <h2 className="colorlib-heading">Core Stack</h2>
                  <p>
                    <strong>Languages & Frameworks:</strong> Python, Java,
                    JavaScript, TypeScript, React, Next.js, Spring Boot,
                    Spring Cloud Contract
                  </p>
                  <p>
                    <strong>Cloud & Tools:</strong> AWS, SDVI Rally, GraphQL,
                    MongoDB, Git, GitHub Actions, CI/CD, New Relic
                  </p>
                  <p>
                    <strong>Engineering Practices:</strong> Microservices
                    architecture, REST APIs, system integration, unit testing,
                    end-to-end testing, code coverage, Agile delivery,
                    cross-functional collaboration
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
