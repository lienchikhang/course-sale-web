import React from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import learningPageConstants from "../constants/learningPage.constants";
import "../css/headerLearning.css";
import ProgressLearning from "./ProgressLearning";

const HeaderLearning: React.FC = () => {
  return (
    <header className="learning__header">
      <div className="learning__left">
        <button>
          <KeyboardArrowLeftIcon />
        </button>
        <img
          src={learningPageConstants.header.left.logo}
          alt={learningPageConstants.header.left.alt}
        />
        <h2>{learningPageConstants.header.left.slug}</h2>
      </div>
      <div className="learning__right">
        <div className="learning__status">
          <ProgressLearning />
          <p className="learning__totalpart">
            {learningPageConstants.header.right.totalPart}
          </p>
        </div>
        <p className="learning__introduce">
          {learningPageConstants.header.right.introduce}
        </p>
      </div>
    </header>
  );
};

export default HeaderLearning;
