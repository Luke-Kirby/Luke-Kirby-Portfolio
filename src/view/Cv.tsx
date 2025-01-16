import React, { useState } from "react";
import "./Cv.scss";
import classnames from "classnames";
import BulletPoint from "../components/Cv/BulletPoint";
import SmoothCollapse from "../components/Cv/ExpandContainer";

function Cv() {
  const [DropButtonTheia, invertTheia] = useState(false);
  const buttonClickTheia = () => {
    invertTheia(!DropButtonTheia);
  };

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

<div
        style={{
          background: `url('/images/blueBckrnd1.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
        className="CV-background"
      >

      <div className={classnames("cv", "cv-text")}>
        <h1>Timeline</h1>
        <div className="cv-content-cotainer">
          <div className="side-link">
            <div className="side-link-bottom"></div>
          </div>
          <div className="timescale-content">
            <BulletPoint
              time="2025"
              label="THEIA"
              onClick={buttonClickTheia}
              expand={DropButtonTheia}
            />
            <div className="block-text">
              <SmoothCollapse expanded={DropButtonTheia}>
                <div className="text-bubble-CV">
                  <p>
                    Manager and lead software developer of the Frontend team at &nbsp;
                     <a href="https://www.penspen.com/capabilities/technical-solutions/theia/">THEIA</a>
                    . I planned sprints, designed UI specifications and led my team to develop a tool that automates and assists the engineers to overcome the complex challenges that exist within the pipeline inspection industry.
                  </p>
                </div>
                <div style={{marginTop: '40px'}} className="text-bubble-CV">
                  <p>
                    The Frontend’s framework is Angular, which I am very familiar with. My job role included:
                  </p>
                  <ul>
                    <li><strong>Sprint Planning:</strong> Working with the product owner and CEO to agree and develop our Frontend codebase according to our clients needs. Careful planning, accurate time estimations and creation of functional specifications (such wireframes and API schemas) are all standard procedure for me before the start of a sprint. My industry expertise naturally positioned me as the client-facing representative for THEIA, where I’ve developed and maintained strong, lasting relationships with our clients.</li>
                    <li><strong>Management:</strong> At the start of every sprint, I ensure all developers in my team have clearly scoped tickets. Daily calls with my team maintain a high productivity whilst providing adequate support. I believe close communication is the key to strong teamwork.</li>
                    <li><strong>Software Development:</strong> Use of TypeScript, HTML and SCSS to develop complex engineering interfaces with much use of Angular’s library options. I connect these interfaces to Backend API endpoints. I have significantly reduced the required development time for many sprints during my time at THEIA through creation and use reusable Angular components. Optimisation and enforcement of clean, reusable code ensures high performance and good habits. Clean branch management and thorough checking during Pull Requests is a must.</li>
                    <li><strong>UI/UX Design:</strong> Consistently creating clear user-friendly wireframes and user-flows in Figma for both internal and external personnel. Avoiding overly complex designs and sticking to best practices ensures familiar, comprehensive interfaces that are easy to navigate. I wrote the official design guide for THEIA, ensuring brand guidelines are followed throughout.</li>
                    <li><strong>Engineering:</strong> My background in Mechanical Engineering gives me an extensive understanding of the technologies, assessments and overall industry knowledge involved in Pipeline Integrity. I frequently liaise with Engineers upon technical matters and maintain an up-to-date understanding of the codes / standards used within this industry. I regularly host workshops and lunch-&-learns to bridge the gap between engineering and software development. I believe mathematical modelling should be interchangeable with programming.</li>
                  </ul>
                </div>
                <div style={{marginTop: '40px'}} className="text-bubble-CV">
                  <p>I achieved the “Regional Leadership Team Quarterly Award” at Penspen in October 2023.</p>
                </div>
              </SmoothCollapse>
            </div>
            <BulletPoint
              time="2022 (July)"
              label="Volunteer Work"
              onClick={buttonClickSelf}
              expand={DropButtonSelf}
            />
            <div className="block-text">
              <SmoothCollapse expanded={DropButtonSelf}>
                <div className="text-bubble-CV">
                  <p>
                    I did some volunteer work for the non-profit organisation Planet Patrol
                     to help develop the Front-End of their{" "}
                    <a href="https://app.plasticpatrol.co.uk/#/">app</a> (React).
                    I communicated closely with the program's manager and
                    other software developers to create new features, resolve
                    issues and fix bugs.
                  </p>
                </div>
                <div style={{marginTop: '40px'}}  className="text-bubble-CV">
                  <p>
                    I helped to develop some of the Front-End functionality on a caravan park website,{" "}
                    <a href="https://www.guillerin.com/">Guillerin</a>. I had experience here using the Vue 
                    framework and developing a "booking" style website with multiple languages.
                  </p>
                </div>
              </SmoothCollapse>
            </div>
            <BulletPoint
              time="2022 (April)"
              label="ROSEN Group - Integrity Engineer"
              onClick={buttonClickRosen}
              expand={DropButtonRosen}
            />
            <div className="block-text">
              <SmoothCollapse expanded={DropButtonRosen}>
              <div className="text-bubble-CV">
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
              </div>
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
                <h4>
                  Mechanical Design and Manufacturing Engineering (MEng).
                </h4>
              <div className="text-bubble-CV">
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
              </div>
                <div style={{marginTop: '40px'}} className="text-bubble-CV">
                  <p>
                    <b>Projects:</b>
                  </p>
                  <p style={{ marginLeft: "20px", marginTop: "20px" }}>
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
                </div>
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
                <h4>
                  Mechanical Engineering (BEng).
                </h4>
                <div className="text-bubble-CV">
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
                </div>
                <div style={{marginTop: '40px'}} className="text-bubble-CV">
                <p>
                  <b>Projects:</b>
                </p>
                <p style={{ marginLeft: "20px", marginTop: "20px" }}>
                  I completed a project for the company DeepOcean, who operate
                  in the oil and gas sector. Working closely with this client, I
                  have produced many design-based deliverables for DeepOcean,
                  such as product designs, CAD / FEA models and drawings,
                  costings, operational storyboards, ship deck layout drawings,
                  experimental prototypes, risk assessment and hazard
                  identification documents.
                </p>
                </div>
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
                <h4>
                  A-Levels
                </h4>
                <div className="text-bubble-CV">
                  <ul style={{width: '150px', marginLeft: '0px'}}>
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
                </div>
                <h4>
                  AS-Levels
                </h4>
                <div className="text-bubble-CV">
                  <ul style={{width: '150px' ,marginLeft: '0px'}}>
                    <li>
                      Further Maths - <b>A</b>
                    </li>
                    <li>
                      Computing - <b>C</b>
                    </li>
                  </ul>
                </div>
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
              <div className="text-bubble-CV">
                <p>
                  9 subjects including Maths and Physics: <b>A - C</b>
                </p>
              </div>
              </SmoothCollapse>
            </div>
          </div>
        </div>
      </div>
    {/* <div className="page-container-cv">
    </div> */}

      </div>


  );
}

export default Cv;
