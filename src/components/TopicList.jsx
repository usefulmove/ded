import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  Typography,
  Divider,
} from "@mui/material";
import { Commit } from "@mui/icons-material";

function TopicList({ title, lead, listItems }) {
  return (
    <div>
      <br />
      <Typography variant="h5" gutterBottom={true} color="secondary">
        {title}
      </Typography>
      <Divider />
      <br />
      <Typography
        variant="h6"
        align="left"
        gutterBottom={true}
        color="secondary"
      >
        {lead}
      </Typography>
      <List>
        {listItems.map((item, index) => (
          <>
            <ListItem key={index} alignItems="flex-start">
              <ListItemIcon>
                <Commit fontSize="small" color="primary" />
              </ListItemIcon>
              <Typography variant="h6" color="secondary">
                {item}
              </Typography>
            </ListItem>
          </>
        ))}
      </List>
    </div>
  );
}

export default TopicList;
