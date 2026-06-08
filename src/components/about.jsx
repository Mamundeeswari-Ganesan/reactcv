import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div>
        <section id="colorlib-about" className="colorlib-about" data-section="about">
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
                  <div className="skills-grid">
                    <div className="skill-group">
                      <h3 className="skill-group-title">
                        <i className="icon-code skill-group-icon" />
                        Languages & Frameworks
                      </h3>
                      <div className="skill-chip-list">
                        <span className="skill-chip">Python</span>
                        <span className="skill-chip">Java</span>
                        <span className="skill-chip">JavaScript</span>
                        <span className="skill-chip">TypeScript</span>
                        <span className="skill-chip">React</span>
                        <span className="skill-chip">Next.js</span>
                        <span className="skill-chip">Spring Boot</span>
                        <span className="skill-chip">Spring Cloud Contract</span>
                      </div>
                    </div>

                    <div className="skill-group">
                      <h3 className="skill-group-title">
                        <i className="icon-cloud-storage skill-group-icon" />
                        Cloud & Tools
                      </h3>
                      <div className="skill-chip-list">
                        <span className="skill-chip">AWS</span>
                        <span className="skill-chip">SDVI Rally</span>
                        <span className="skill-chip">GraphQL</span>
                        <span className="skill-chip">MongoDB</span>
                        <span className="skill-chip">Git</span>
                        <span className="skill-chip">GitHub Actions</span>
                        <span className="skill-chip">CI/CD</span>
                        <span className="skill-chip">New Relic</span>
                      </div>
                    </div>

                    <div className="skill-group">
                      <h3 className="skill-group-title">
                        <i className="icon-cog skill-group-icon" />
                        Engineering Practices
                      </h3>
                      <div className="skill-chip-list">
                        <span className="skill-chip">Microservices architecture</span>
                        <span className="skill-chip">REST APIs</span>
                        <span className="skill-chip">System integration</span>
                        <span className="skill-chip">Unit testing</span>
                        <span className="skill-chip">End-to-end testing</span>
                        <span className="skill-chip">Code coverage</span>
                        <span className="skill-chip">Agile delivery</span>
                        <span className="skill-chip">Cross-functional collaboration</span>
                      </div>
                    </div>
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
