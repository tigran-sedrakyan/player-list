import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Divider from "@material-ui/core/Divider";
import Tooltip from "@material-ui/core/Tooltip";

import CONSTANTS from "../../constants";
import messages from "../../messages";

const { listMessages } = messages;

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: "100%",
    padding: 0,
    backgroundColor: theme.palette.background.paper
  },
  listItemContainer: {
    lineHeight: 2
  },
  checkedIcon: {
    color: "green"
  }
}));

const CustomList = props => {
  const classes = useStyles();
  const { items, checkedItems, onItemActionClick } = props;

  return (
    <List dense className={classes.root}>
      <ListSubheader>{listMessages.listSubheaderMessage}</ListSubheader>
      {items.map((item, index) => {
        return (
          <div key={item.id}>
            <ListItem
              classes={{
                container: classes.listItemContainer
              }}
              button
            >
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar ${item.id}`}
                  src={
                    item.images
                      ? `${CONSTANTS.URLS.IMAGE_HOST}/${item.images.default.thumbs.web.w40h40.jpg}`
                      : ""
                  }
                />
              </ListItemAvatar>
              <ListItemText
                primary={item.nick_name}
                secondary={
                  item.first_name && item.last_name
                    ? `${item.first_name} ${item.last_name}`
                    : "-"
                }
              />
              <ListItemSecondaryAction>
                {checkedItems.includes(item.id) ? (
                  <Tooltip
                    title={listMessages.tooltipSavedMessage}
                    placement="left"
                    arrow
                  >
                    <IconButton onClick={() => onItemActionClick(item.id)}>
                      <CheckCircleIcon className={classes.checkedIcon} />
                    </IconButton>
                  </Tooltip>
                ) : (
                  <Tooltip
                    title={listMessages.tooltipSaveMessage}
                    placement="left"
                    arrow
                  >
                    <IconButton onClick={() => onItemActionClick(item.id)}>
                      <CheckCircleOutlineIcon />
                    </IconButton>
                  </Tooltip>
                )}
              </ListItemSecondaryAction>
            </ListItem>
            <Divider />
          </div>
        );
      })}
    </List>
  );
};

export default CustomList;
