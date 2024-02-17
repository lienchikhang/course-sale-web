import React, { useEffect } from "react";
import "../../css/detailCourse.css";
import detailCourseConstants from "../../constants/detailCourse.constants";
import DoneIcon from "@mui/icons-material/Done";
import List from "@mui/material/List";
import DetailCollapse from "../DetailCollapse";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import ChargingStationIcon from "@mui/icons-material/ChargingStation";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import VideocamIcon from "@mui/icons-material/Videocam";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import { useDispatch } from "react-redux";
import { updateActivePage } from "../../redux/slices/page.slice";

const DetailCoursePage: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateActivePage('learning'));
  }, [])
  return (
    <div className="detailCourse">
      <div className="content">
        <div className="wrapper">
          <h1 className="content__title">{detailCourseConstants.title}</h1>
          <p className="content__desc">{detailCourseConstants.desc}</p>

          <div className="sub-general__wrapper">
            <div className="general__introduce">
              <img src={detailCourseConstants.general.thumbnail} alt="" />
              <PlayCircleIcon />
              <p>Xem giới thiệu khóa học</p>
            </div>
            <div className="general__register">
              <button>ĐĂNG KÝ HỌC</button>
            </div>
            <div className="general__detail">
              <p>
                <WorkspacePremiumIcon />
                <span>
                  Trình độ{" "}
                  <strong>
                    {detailCourseConstants.general.level == 1 && "cơ bản"}
                    {detailCourseConstants.general.level == 2 && "bình thường"}
                    {detailCourseConstants.general.level == 3 && "nâng cao"}
                  </strong>
                </span>
              </p>
              <p>
                <VideocamIcon />
                <span>
                  Tổng số{" "}
                  <strong>{detailCourseConstants.general.totalParts}</strong>{" "}
                  bài học
                </span>
              </p>
              <p>
                <AccessTimeFilledIcon />
                <span>
                  Thời lượng{" "}
                  <strong>{detailCourseConstants.general.totalTime}</strong>
                </span>
              </p>
              <p>
                <ChargingStationIcon />
                Học mọi lúc, mọi nơi
              </p>
            </div>
          </div>

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
        <div className="general__wrapper">
          <div className="general__introduce">
            <img src={detailCourseConstants.general.thumbnail} alt="" />
            <PlayCircleIcon />
            <p>Xem giới thiệu khóa học</p>
          </div>
          <div className="general__register">
            <button>ĐĂNG KÝ HỌC</button>
          </div>
          <div className="general__detail">
            <p>
              <WorkspacePremiumIcon />
              <span>
                Trình độ{" "}
                <strong>
                  {detailCourseConstants.general.level == 1 && "cơ bản"}
                  {detailCourseConstants.general.level == 2 && "bình thường"}
                  {detailCourseConstants.general.level == 3 && "nâng cao"}
                </strong>
              </span>
            </p>
            <p>
              <VideocamIcon />
              <span>
                Tổng số{" "}
                <strong>{detailCourseConstants.general.totalParts}</strong> bài
                học
              </span>
            </p>
            <p>
              <AccessTimeFilledIcon />
              <span>
                Thời lượng{" "}
                <strong>{detailCourseConstants.general.totalTime}</strong>
              </span>
            </p>
            <p>
              <ChargingStationIcon />
              Học mọi lúc, mọi nơi
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCoursePage;
