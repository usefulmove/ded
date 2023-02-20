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
      <Typography variant="h4" gutterBottom={true} color="secondary">
        {title}
      </Typography>
      <Divider />
      <br />
      <Typography variant="h5" align="left" gutterBottom={true}>
        {lead}
      </Typography>
      <List>
        {listItems.map((item, index) => (
          <>
            <ListItem key={index} alignItems="flex-start">
              <ListItemIcon>
                <Commit fontSize="small" color="primary" />
              </ListItemIcon>
              <Typography variant="h6">{item}</Typography>
            </ListItem>
          </>
        ))}
      </List>
    </div>
  );
}

export default TopicList;
