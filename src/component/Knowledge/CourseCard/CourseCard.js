import React from "react";
import './CourseCard.css'

function CourseCard(props) {
    
  const cards = props.data.map((course,i) => {
    const Sclass = course.status==="LIVE"?"danger":course.status==="DRAFT"?"success":"secondary"
    return <div className="card course-card" key={i}>
      <div className="course-card-top">
        <div className="course-card-status">
          <span className="course-card-badge">
            <span className={"text-"+Sclass} style={{ fontWeight: "bold" }}>
              &#x2022;{" "}
            </span>
            {course.status}
          </span>
        </div>
        <img className="card-img-top h-100" src={course.img} alt="Card cap" />
      </div>
      <div className="card-body course-card-body">
        <h5 className="card-title" style={{ fontSize: "1rem" }}>
          {course.name}
        </h5>
        <div className="card-text course-card-body-text">
          <p>Last updated : {course.lastUpdated}</p>
        </div>
        <div className="card-disc d-flex">
          <p className="d-flex flex-row align-items-center pr-3">
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "1rem" }}
            >
              description
            </span>
            <span>Lessons : {course.lessions}</span>
          </p>
          <p className="d-flex flex-row align-items-center pr-3">
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "1rem" }}
            >
              timer
            </span>
            <span>minutes : {course.minutes}</span>
          </p>
        </div>
        <div className="card-tags" >
        {course.tags.map((tname, t) => {
          return (
              <span className="card-badge mr-2" key={t}>{tname}</span>
              );
            })}
            </div>
      </div>
    </div>;
  });
  return <>
  {cards}
  </>;
}

export default CourseCard;
