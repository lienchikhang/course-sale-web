import React from "react";
import "../../css/detailCourse.css";
import detailCourseConstants from "../../constants/detailCourse.constants";
import DoneIcon from "@mui/icons-material/Done";
import List from "@mui/material/List";
import DetailCollapse from "../DetailCollapse";

const DetailCoursePage: React.FC = () => {
  return (
    <div className="detailCourse">
      <div className="content">
        <div className="wrapper">
          <h1 className="content__title">{detailCourseConstants.title}</h1>
          <p className="content__desc">{detailCourseConstants.desc}</p>
          <h2 className="content__subTitle">Bạn sẽ học được gì?</h2>
          <div className="advantages">
            {detailCourseConstants.getting.map((get, index) => {
              return (
                <p className="advantages__item" key={index}>
                  <DoneIcon />
                  <span>{get}</span>
                </p>
              );
            })}
          </div>
          <div className="sticky-part">
            <h2 className="content__subTitle">Nội dung khóa học</h2>
            <div className="content__extend">
              <p>
                Thời lượng:{" "}
                <span>{detailCourseConstants.general.totalTime}</span>{" "}
              </p>
            </div>
          </div>
          <div className="content__parts">
            <List
              className="content__parts-list"
              sx={{
                width: "100%",
                bgcolor: "background.paper",
                position: "relative",
                overflow: "auto",
                maxHeight: 600,
                "& ul": { padding: 0 },
              }}
              subheader={<li />}
            >
              {detailCourseConstants.content.map((contentItem, index) => (
                <li key={`section-${contentItem.slug}`}>
                  <ul className="pr-2">
                    <DetailCollapse
                      key={index}
                      contentItem={contentItem}
                      index={index}
                    />
                  </ul>
                </li>
              ))}
            </List>
          </div>
        </div>
        <h2 className="content__subTitle">Yêu cầu</h2>
        <div className="required">
          {detailCourseConstants.required.map((req, index) => {
            return (
              <p className="required__item" key={index}>
                <DoneIcon />
                <span>{req}</span>
              </p>
            );
          })}
        </div>
      </div>
      <div className="general">
        <h2>Tesss</h2>
      </div>
    </div>
  );
};

export default DetailCoursePage;
