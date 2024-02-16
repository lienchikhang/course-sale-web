import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import Collapse from "@mui/material/Collapse";
import ListItemButton from "@mui/material/ListItemButton";
import { IDetailCourseContentItem } from "../interfaces/detailCourseContentItem.interface";
import Divider from "@mui/material/Divider";
import { Box } from "@mui/system";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useLocation } from "react-router-dom";
import AlbumIcon from "@mui/icons-material/Album";

const DetailCollapse: React.FC<IDetailCourseContentItem> = ({
  contentItem,
  index,
}) => {
  const [open, setOpen] = React.useState(true);
  const location = useLocation();
  const pathname = location.pathname.split("/")[1];

  console.log("location", pathname);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <>
        <ListSubheader className="!p-0">
          <ListItemButton className="item__strong" onClick={handleClick}>
            <div>
              <div
                className={`item__strong-icon ${
                  pathname === "learning" && "hidden"
                }`}
              >
                {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </div>
              {index + 1}. {contentItem.entry}
            </div>
            {pathname === "courses" && (
              <span>{contentItem.part.length} bài học</span>
            )}
            {pathname === "learning" && (
              <div className={`item__strong-icon`}>
                {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </div>
            )}
          </ListItemButton>
        </ListSubheader>
      </>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {contentItem.part.map((item, index) => (
          <Box sx={{ padding: "0 10px 10px 20px" }}>
            <ListItem
              className={`item__child ${pathname === "learning" && "learning"}`}
              key={`item-${item}-${index}`}
            >
              <div>
                {pathname === "courses" && <PlayCircleIcon />}
                <ListItemText primary={` ${index + 1}. ${item.title}`} />
              </div>
              <div className={`${pathname === "learning" && "div-learning"}`}>
                {pathname === "learning" && <AlbumIcon />}
                {
                  <span
                    className={`${pathname === "learning" && "span-learning"}`}
                  >
                    {item.times}
                  </span>
                }
              </div>
            </ListItem>
            <Divider />
          </Box>
        ))}
      </Collapse>
    </>
  );
};

export default DetailCollapse;
