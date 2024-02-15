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

const DetailCollapse: React.FC<IDetailCourseContentItem> = ({
  contentItem,
  index,
}) => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <>
        <ListSubheader className="!p-0">
          <ListItemButton className="item__strong" onClick={handleClick}>
            <div>
              <div className="item__strong-icon">
                {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </div>
              {index + 1}. {contentItem.entry}
            </div>
            <span>{contentItem.part.length} bài học</span>
          </ListItemButton>
        </ListSubheader>
      </>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {contentItem.part.map((item, index) => (
          <Box sx={{ padding: "0 10px 0 20px" }}>
            <ListItem className="item__child" key={`item-${item}-${index}`}>
              <div>
                <PlayCircleIcon />
                <ListItemText primary={` ${index + 1}. ${item.title}`} />
              </div>
              <span>{item.times}</span>
            </ListItem>
            <Divider />
          </Box>
        ))}
      </Collapse>
    </>
  );
};

export default DetailCollapse;
