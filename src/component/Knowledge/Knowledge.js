import React, { useContext, useMemo, useState } from "react";
import { CourseContext } from "../../context/courseProvider";
import CardFilters from "./CardFilters/CardFilters";
import CourseCard from "./CourseCard/CourseCard";
import "./Knowledge.css";

function Knowledge() {
  const {allCourse} = useContext(CourseContext);
  const [team,setTeam] = useState("Select team");
  const [filterStatus,setFilterStatus] = useState("ALL");
  const courseTeam = useMemo(()=>{
    if(team==="Select team") return allCourse;
    return allCourse.filter(course=>{
      return course.tags.some(
        tname=>{
          return tname===team
        }
      )
    })
  },[allCourse,team])
  const courseStatus= useMemo(()=>{
    if(filterStatus==="ALL") return courseTeam
    return courseTeam.filter(course=>{
      return course.status===filterStatus
  })
  },[courseTeam,filterStatus])
  return (
    <div className="w-100 bg-light px-5 py-4">
      <CardFilters team={team} setTeam={setTeam} filterStatus={filterStatus} setFilterStatus={setFilterStatus}/>
      <div className="row m-0 course-cards my-5">
        {courseStatus && <CourseCard data={courseStatus}/>}
      </div>
    </div>
  );
}

export default Knowledge;
