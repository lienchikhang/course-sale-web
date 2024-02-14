import React, { useState } from "react";
import { ICourseSection } from "../interfaces/courseSection.interface";
import "../css/courseSection.css";
import CourseList from "./CourseList";
import { useQuery } from "react-query";
import Fetching from "../classes/Fetching";
const fetch = new Fetching();

const CourseSection: React.FC<ICourseSection> = ({ courseSection }) => {
  const [courses, setCourses] = useState([]);
  // useQuery({
  //   queryKey: ["course-section"],
  //   queryFn: async () => {
  //     await fetch.getApi(`/${courseSection.endpoint}`);
  //   },
  //   retry: 3,
  //   onSuccess: (data: any) => {
  //     setCourses(data);
  //   },
  // });

  return (
    <section className="courseSection">
      <div className="courseSection__title">
        <h2>{courseSection.title}</h2>
        <span>Xem thêm</span>
      </div>
      <CourseList endpoint={courseSection.endpoint} />
    </section>
  );
};

export default CourseSection;
