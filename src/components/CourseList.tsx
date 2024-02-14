import React from "react";
import { ICourseList } from "../interfaces/courseList.interface";
import "../css/courseList.css";

const CourseList: React.FC<ICourseList> = ({ endpoint }) => {
  return (
    <section className="courseList">
      <span>{endpoint}</span>
    </section>
  );
};

export default CourseList;
