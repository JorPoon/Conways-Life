import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
// import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
// import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
// import Link from '@material-ui/core/Link';
// import { Link as RouterLink } from 'react-router-dom';
// import { MemoryRouter as Router } from 'react-router';


const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="Close" className={classes.closeButton} onClick={onClose}>
          Close
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

// const DialogActions = withStyles(theme => ({
//   root: {
//     margin: 0,
//     padding: theme.spacing(1),
//   },
// }))(MuiDialogActions);

class About extends React.Component {
  state = {
    open: false,
    url: 'https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life'
  };

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  

  render() {
    return (
      <div>
        <Button  color="primary" onClick={this.handleClickOpen}>
          About Conway's Game
        </Button>
        <Dialog
          onClose={this.handleClose}
          aria-labelledby="customized-dialog-title"
          open={this.state.open}
        >
          <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
            The Game
          </DialogTitle>
          <DialogContent dividers>
            <Typography gutterBottom>
                What Is A Turing Machine?
            </Typography>
            <Typography gutterBottom>
               Conway's game of life was developed to simulate an example of an Turing Machine.
               This theory was developed by Alan Turing. 
                    
            </Typography>
            {/* <Typography gutterBottom>
            1. A cell dies if it has less than two live neighbors (underpopulation)
            </Typography>
            <Typography gutterBottom>
            2. A cell lives if it has two or three live neighbors (continuation)
            </Typography>
            <Typography gutterBottom>
            3. A cell dies if it has four or more live neighbors (overpopulation)
            </Typography>
            <Typography gutterBottom>
            4. A cell becomes alive if it has 3 live neighbors (reproduction)
            </Typography> */}
          </DialogContent>
          {/* <DialogActions>
                <Router>
                    <div>
                        <Link to="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">
                            More Information
                        </Link>
                    </div>
                </Router>
          </DialogActions> */}
        </Dialog>
      </div>
    );
  }
}

export default About;