import React, { useEffect, useState } from "react";
import "../../css/learningPage.css";
import DetailCollapse from "../DetailCollapse";
import List from "@mui/material/List";
import detailCourseConstants from "../../constants/detailCourse.constants";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import learningPageConstants from "../../constants/learningPage.constants";
import Divider from "@mui/material/Divider";
import VideoPlayer from "../VideoPlayer";

const LearningPage: React.FC = () => {
  const [isPlay, setPlay] = useState(false);
  const handlePlay = () => {
    setPlay(true);
  };

  return (
    <section className="learningPage">
      <div className="content__right">
        <div className="video__wrapper">
          <div className="video__center">
            <div className="video__main">
              {!isPlay ? (
                <div
                  className="video__thumbnail"
                  style={{
                    backgroundImage:
                      "url(https://i.ytimg.com/vi/7ppRSaGT1uw/maxresdefault.jpg)",
                  }}
                >
                  <div className="video-react__play" onClick={handlePlay}>
                    <PlayArrowIcon />
                  </div>
                </div>
              ) : (
                <div id="player" className="video__thumbnail">
                  <iframe
                    className="learning__iframe"
                    src={`https://www.youtube.com/embed/PziYflu8cB8?si=n9yvVU_KzwgLQizy${
                      isPlay && "&autoplay=1"
                    }`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="learning__content">
          <div className="content__heading">
            <h1>{detailCourseConstants.title}</h1>
            <p>{detailCourseConstants.updateAt}</p>
          </div>
          <Divider />
          <div className="content__documents">
            {learningPageConstants.body.documents.map((doc, index) => {
              return <p key={index}>{doc}</p>;
            })}
          </div>
          <Divider />
          <div className="content__moreinfo">
            <p>{learningPageConstants.moreInfo.title}</p>
            <ul>
              {learningPageConstants.moreInfo.list.map((item, index) => {
                return (
                  <li key={index}>
                    <p>{item}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="content__left">
        <h1>Nội dung khóa học</h1>
        <div className="content__parts learning">
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
    </section>
  );
};

export default LearningPage;
