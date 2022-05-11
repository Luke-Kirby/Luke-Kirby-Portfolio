import React, { useState } from "react";
import "./Timeline.scss";
import classnames from "classnames";
import BulletPoint from "../components/Cv/BulletPoint";
import SmoothCollapse from "../components/Cv/ExpandContainer";

function Timeline() {
  const [DropButtonSelf, invertSelf] = useState(false);
  const buttonClickSelf = () => {
    invertSelf(!DropButtonSelf);
  };

  const [DropButtonRosen, invertRosen] = useState(false);
  const buttonClickRosen = () => {
    invertRosen(!DropButtonRosen);
  };

  const [DropButtonMasters, invertMasters] = useState(false);
  const buttonClickMasters = () => {
    invertMasters(!DropButtonMasters);
  };

  const [DropButtonBachelors, invertBachelors] = useState(false);
  const buttonClickBachelors = () => {
    invertBachelors(!DropButtonBachelors);
  };
  const [DropButtonRunshaw, invertRunshaw] = useState(false);
  const buttonClickRunshaw = () => {
    invertRunshaw(!DropButtonRunshaw);
  };
  const [DropButtonParklands, invertParklands] = useState(false);
  const buttonClickParklands = () => {
    invertParklands(!DropButtonParklands);
  };
  return (
    <div className="page-container-cv">
      <div className={classnames("cv", "cv-text")}>
        <h1>
          <em>
            <u>Timeline</u>
          </em>
        </h1>
        <div className="cv-content-cotainer">
          <div className="side-link">
            <div className="side-link-bottom"></div>
          </div>
          <div className="timescale-content">
            <BulletPoint
              time="Present"
              label="Self Learning"
              onClick={buttonClickSelf}
              expand={DropButtonSelf}
            />
            {DropButtonSelf ? null : null}
            <div className="block-text">
              <SmoothCollapse expanded={DropButtonSelf}>
                <p
                  style={
                    {
                      //marginBottom: Bottommargin,
                      //visibility: Selfvisibility,
                      //transition: "margin-bottom 2s ease",
                      //overflow: overflow,
                    }
                  }
                >
                  I am seeking a career change from a Mechanical Engineer to a
                  Front-End Web Developer. Currently, I'm self learning
                  front-end web development (using online tools such as
                  Codecademy) with JavaScript and TypeScript (with React), Git,
                  HTML and CSS.
                </p>
              </SmoothCollapse>
            </div>

            <BulletPoint
              time="2022"
              label="ROSEN Group - Integrity Engineer"
              onClick={buttonClickRosen}
              expand={DropButtonRosen}
            />
            <div className="block-text">
              <SmoothCollapse expanded={DropButtonRosen}>
                <p>
                  Technical based role that provided integrity services for post
                  inline inspections of oil and gas pipelines. This consisted of
                  working with other engineers, data scientists and data
                  analysts to conduct integrity assessments / calculations and
                  produce detailed technical reports for clients. Job role
                  consisted of:
                </p>
                <ul>
                  <li>
                    Programming with VBA to develop in-house macros for
                    integrity assessment calculations. I led the development for
                    ROSEN's official in-house “Lamination Screening Assessment”
                    macros against industry recognised standards.
                  </li>
                  <li>
                    Use of CAD, FEA, Excel and other in-house software / macros
                    to conduct the relevant calculations and assessments. The
                    assessments determined the condition of the pipeline(s)
                    integrity and the results were reported to clients.
                  </li>
                  <li>
                    QA of level 1 engineering calculations, integrity
                    assessments and technical reports.
                  </li>
                  <li>
                    Close communication between co-workers and across teams to
                    manage project-based workloads to ensure deadlines are met.
                  </li>
                </ul>
              </SmoothCollapse>
            </div>
            <BulletPoint
              time="2018"
              label="Newcastle University - Masters Degree (2:1)"
              onClick={buttonClickMasters}
              expand={DropButtonMasters}
            />
            <div className="block-text">
              <SmoothCollapse expanded={DropButtonMasters}>
                <p style={{ marginLeft: "20px" }}>
                  Mechanical Design and Manufacturing Engineering (MEng).
                </p>
                <p>
                  <b>Modules:</b>
                </p>
                <ul>
                  <li>
                    Computational Modelling (including MATLAB, CAD and FEA)
                  </li>
                  <li>Robotics</li>
                  <li>Material Degredation and Component Life</li>
                  <li>Design for Mechanical Power Transmissions</li>
                  <li>Application of ThermoFluid Mechanics</li>
                  <li>Instrumentation and Drive Systems</li>
                  <li>Human Systems Integration</li>
                  <li>Structual Optimisation and Crashworthiness</li>
                </ul>
                <p>
                  <b>Projects:</b>
                </p>
                <p style={{ marginLeft: "20px" }}>
                  I have worked with the company Peacock Medical Group in the
                  Selective Laser Sintering (SLS) sector. This project involved
                  working with a team to analyse the 3D printing powder the
                  company uses and produce methods such that the powder quality
                  can be determined. This was predominantly a research and
                  experiment-based project that involved using imaging,
                  mechanical and thermal inspection methods within the
                  university's laboratories. Other companies I have visited or
                  completed projects for as a part of work experience modules
                  include Caterpillar, British Engines, Siemens and PDL
                  Solutions.
                </p>
              </SmoothCollapse>
            </div>
            <BulletPoint
              time="2017"
              label="Newcastle University - Bachelors Degree (2:1)"
              onClick={buttonClickBachelors}
              expand={DropButtonBachelors}
            />
            <div className="block-text">
              <SmoothCollapse expanded={DropButtonBachelors}>
                <p style={{ marginLeft: "20px" }}>
                  Mechanical Engineering (BEng).
                </p>
                <p>
                  <b>Modules:</b>
                </p>
                <ul>
                  <li>
                    Computational Modelling (including MATLAB, CAD and FEA)
                  </li>
                  <li>Engineering Mathematics and Statistical Data Analysis</li>
                  <li>Design and Manufacturing</li>
                  <li>Design for Industry</li>
                  <li>Mechanics and Structual Optimisation</li>
                  <li>Fluid Mechanics</li>
                  <li>Application of ThermoFluid Mechanics</li>
                  <li>Professional Skills</li>
                  <li>Electrical Engineering</li>
                  <li>AC Electrical Machines and Drives</li>
                  <li>Material Science</li>
                  <li>Accounting, Finance and Law for Engineers</li>
                </ul>
                <p>
                  <b>Projects:</b>
                </p>
                <p style={{ marginLeft: "20px" }}>
                  I completed a project for the company DeepOcean, who operate
                  in the oil and gas sector. Working closely with this client, I
                  have produced many design-based deliverables for DeepOcean,
                  such as product designs, CAD / FEA models and drawings,
                  costings, operational storyboards, ship deck layout drawings,
                  experimental prototypes, risk assessment and hazard
                  identification documents.
                </p>
              </SmoothCollapse>
            </div>
            <BulletPoint
              time="2014"
              label="Runshaw College"
              onClick={buttonClickRunshaw}
              expand={DropButtonRunshaw}
            />
            <div className="block-text">
              <SmoothCollapse expanded={DropButtonRunshaw}>
                <p>
                  <b>A-Levels:</b>
                </p>
                <ul>
                  <li>
                    Maths - <b>A</b>
                  </li>
                  <li>
                    Physics - <b>B</b>
                  </li>
                  <li>
                    3D Design - <b>B</b>
                  </li>
                </ul>
                <p>
                  <b>AS-Levels:</b>
                </p>
                <ul>
                  <li>
                    Further Maths - <b>A</b>
                  </li>
                  <li>
                    Computing - <b>C</b>
                  </li>
                </ul>
              </SmoothCollapse>
            </div>
            <BulletPoint
              time="2012"
              label="Parklands High School"
              onClick={buttonClickParklands}
              expand={DropButtonParklands}
            />
            <div className="block-text">
              <SmoothCollapse expanded={DropButtonParklands}>
                <p>
                  9 subjects including Maths and Physics: <b>A - C</b>
                </p>
              </SmoothCollapse>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
