import React from "react";
import Carousel from "./Carousel";
import "swiper/css";
import "swiper/css/pagination";
import courseSectionConstants from "../constants/courses.constants";
import CourseSection from "./CourseSection";

const HomeTab: React.FC = () => {
  return (
    <div>
      <Carousel />
      <section className="py-8">
        {courseSectionConstants.map((course, index) => {
          return <CourseSection key={index} courseSection={course} />;
        })}
      </section>
    </div>
  );
};

export default HomeTab;
