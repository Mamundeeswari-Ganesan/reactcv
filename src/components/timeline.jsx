import React, { Component } from "react";

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pin-outline" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          <a href="#">Work at M&S</a> <span>2022 Sept - 2024 April</span>
                        </h2>
                        <p>
                          Frontend engineer working for marksandspencers.com where have implemented a number of feature.
                        </p>
                      </div>
                    </div>
                  </article>
                <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-7">
                        <i className="icon-pin-outline" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          <a href="#">Work at Multiple Schools</a> <span>2013 - 2022 Aug</span>
                        </h2>
                        <p>
                          Worked in multiple school teaching computer science, math and robotics from key stage 5 to 11+
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pin-outline" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          <a href="#">Masters at Anna University</a> <span>2010 - 2013</span>
                        </h2>
                        <p>
                        I completed my under-graduation degree of BCA. Where i learned many programing language like C, C++ and Java.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInTop"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pin-outline" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          <a href="#">
                            Undergraduation at Bharathidasan University
                          </a>{" "}
                          <span>2007-2010</span>
                        </h2>
                        <p>
                          I completed my under-graduation degree of BCA. Where i learned many programing language like C, C++ and Java.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pin-outline" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          <a href="#">Higher Education</a>{" "}
                          <span>2005-2007</span>
                        </h2>
                        <p>
                          I have completed my higher secondary education with
                          major subjects as Physics,Chemistry, Maths & Computer
                          Science. During my school time, I have developed
                          interest in computer programming by introduction to C,
                          C++, Javascripts & HTML to build softwares.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry begin animate-box"
                    data-animate-effect="fadeInBottom"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none" />
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
