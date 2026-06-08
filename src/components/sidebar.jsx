import React, { Component } from "react";

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <button
            type="button"
            className="js-colorlib-nav-toggle colorlib-nav-toggle"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
            aria-label="Toggle navigation"
          >
            <i aria-hidden="true" />
          </button>
          <aside
            id="colorlib-aside"
            className="border js-fullheight"
          >
            <div className="text-center">
              <div
                className="author-img"
                style={{ backgroundImage: "url(images/author.png)" }}
              />
              <h1 id="colorlib-logo">
                <a href="index.html">Mamundeeswari Ganesan</a>
              </h1>
              <span className="email">
                <i className="icon-mail" />
                mamundeeswariganesan@gmail.com
              </span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active">
                    <a href="#colorlib-hero" data-nav-section="home">
                      Introduction
                    </a>
                  </li>
                  <li>
                    <a href="#colorlib-about" data-nav-section="about">
                      About
                    </a>
                  </li>
                  {/* <li>
                    <a href="#" data-nav-section="projects">
                      Projects
                    </a>
                  </li>*/}
                  <li>
                    <a href="https://www.linkedin.com/in/mamundeeswari-ganesan/" target="_blank" rel="noopener noreferrer">
                      Blog
                    </a>
                  </li> 
                  <li>
                    <a href="#colorlib-timeline" data-nav-section="timeline">
                      Timeline
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li>
                  <a
                    href="https://www.instagram.com/madhu_rasmi_vibes/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram profile"
                  >
                    <i className="icon-instagram" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/mamundeeswari-ganesan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profile"
                  >
                    <i className="icon-linkedin2" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Mamundeeswari-Ganesan"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile"
                  >
                    <i className="icon-github" />
                  </a>
                </li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p>
                <small>
                  Made with <i className="icon-code" aria-hidden="true" />
                  <br />
                  Thanks{" "}
                  <a
                    href="https://colorlib.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Colorlib
                  </a>{" "}
                  for inspiration
                </small>
              </p>
            </div>
          </aside>
        </div>
      </div>
    );
  }
}
