import React from "react";
import AddRoadIcon from "@mui/icons-material/AddRoad";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import { ISideItem } from "../interfaces/siderbarItem.interface";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IPageState } from "../interfaces/state.interface";
import { updateActivePage } from "../redux/slices/page.slice";

const SiderbarItem: React.FC<ISideItem> = ({
  action,
}) => {
  const { activePage } = useSelector((state: IPageState) => state.pages);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    //fix in mindmap
    dispatch(updateActivePage(e.target.id));
    navigate(`${e.target.id === "home" ? "" : e.target.id}`);
  };
  return (
    <div
      className={`siderbarItem ${activePage == action.icon ? "active" : ""
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
        checked={activePage == action.icon ? true : false}
        id={action.icon}
        onChange={handleClick}
      />
    </div>
  );
};

export default SiderbarItem;
