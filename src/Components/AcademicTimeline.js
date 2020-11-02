import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function AcademicTimeline() {
  return (
    <div class="container mt-5">
      <h1 className="mb-5">Academic Timeline</h1>
      <VerticalTimeline animate={false}>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2006 - 2018"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Birla High School</h3>
          <h4 className="vertical-timeline-element-subtitle">KG-12</h4>
          <p>I completed my schooling from BIRLA HIGH SCHOOL</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2018 - 2022"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">B.Tech</h3>

          <p>I will complete my B.tech in IT field</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default AcademicTimeline;
