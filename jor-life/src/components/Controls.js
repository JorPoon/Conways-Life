import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import DraftsIcon from '@material-ui/icons/Drafts';
// import SendIcon from '@material-ui/icons/Send';

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5"
  }
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center"
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white
      }
    }
  }
}))(MenuItem);

export default function Controls(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const playButton = () => {
    props.play();
  };

  const pauseButton = () => {
    props.pause();
  };

  const clearButton = () => {
    props.clear()
}

const slowButton = () => {
    props.slow()
}

const normalButton = () => {
    props.norma()
}

const fastButton = () => {
    props.fast()
}

const sizeButton = (size) => {
    props.gridSize(size)
}

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        Open Controls
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <Button
            onClick={() => {
              playButton();
            }}
          >
            Play
          </Button>
        </StyledMenuItem>
        <StyledMenuItem>
          <Button
            onClick={() => {
              pauseButton();
            }}
          >
            Pause
          </Button>
        </StyledMenuItem>
        <StyledMenuItem>
          <Button
            onClick={() => {
              clearButton();
            }}
          >
            Clear
          </Button>
        </StyledMenuItem>
        <StyledMenuItem>
          <Button
            onClick={() => {
              slowButton();
            }}
          >
            Slow Speed
          </Button>
        </StyledMenuItem>
        <StyledMenuItem>
          <Button
            onClick={() => {
              normalButton();
            }}
          >
            Normal Speed
          </Button>
        </StyledMenuItem>
        <StyledMenuItem>
          <Button
            onClick={() => {
              fastButton();
            }}
          >
            Fast Speed
          </Button>
        </StyledMenuItem>
        <StyledMenuItem>
          <Button
            onClick={() => {
              sizeButton("small");
            }}
          >
            Small Grid
          </Button>
        </StyledMenuItem>
        <StyledMenuItem>
          <Button
            onClick={() => {
              sizeButton("medium");
            }}
          >
            Med Grid
          </Button>
        </StyledMenuItem>
        <StyledMenuItem>
          <Button
            onClick={() => {
              sizeButton("large");
            }}
          >
            Large Grid
          </Button>
        </StyledMenuItem>

      
      </StyledMenu>
    </div>
  );
}
