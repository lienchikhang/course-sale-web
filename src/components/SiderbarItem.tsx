import React from "react";
import AddRoadIcon from "@mui/icons-material/AddRoad";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import { ISideItem } from "../interfaces/siderbarItem.interface";
import { useNavigate } from "react-router-dom";

const SiderbarItem: React.FC<ISideItem> = ({
  action,
  activeTab,
  setActiveTab,
}) => {
  const navigate = useNavigate();
  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    setActiveTab({ active: e.target.id });
    localStorage.setItem("actTab", JSON.stringify({ active: e.target.id }));
    navigate(`${e.target.id === "home" ? "" : e.target.id}`);
  };
  return (
    <div
      className={`siderbarItem ${
        activeTab?.active == action.icon ? "active" : ""
      }`}
    >
      <label htmlFor={action.icon}>
        <span>
          {action.icon == "home" && <OtherHousesIcon />}
          {action.icon == "roadmap" && <AddRoadIcon />}
          {action.icon == "posts" && <DynamicFeedIcon />}
        </span>
        <span>{action.text}</span>
      </label>
      <input
        type="radio"
        name="side"
        checked={activeTab?.active == action.icon ? true : false}
        id={action.icon}
        onChange={handleClick}
      />
    </div>
  );
};

export default SiderbarItem;
