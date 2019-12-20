import React from "react";

import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";

import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

import messages from "../../messages";

const { appBarMessages } = messages;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  },
  clearIcon: {
    color: theme.palette.common.white
  }
}));

const CustomAppBar = props => {
  const classes = useStyles();
  const { searchQuery, onSearch } = props;

  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography className={classes.title} variant="h6" noWrap>
              {appBarMessages.titleMessage}
            </Typography>
            <div className={classes.search}>
              <InputBase
                startAdornment={
                  <InputAdornment position="start">
                    <div className={classes.searchIcon}>
                      <SearchIcon />
                    </div>
                  </InputAdornment>
                }
                placeholder={appBarMessages.searchPlaceholderMessage}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                inputProps={{ "aria-label": "search" }}
                value={searchQuery}
                onChange={e => onSearch(e.target.value)}
                endAdornment={
                  searchQuery && (
                    <InputAdornment position="end">
                      <IconButton onClick={() => onSearch("")}>
                        <CloseIcon className={classes.clearIcon} />
                      </IconButton>
                    </InputAdornment>
                  )
                }
                autoFocus
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
};

export default CustomAppBar;
