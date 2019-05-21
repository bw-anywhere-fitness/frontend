import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';

const styles = theme => ({
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  close: {
    padding: theme.spacing.unit / 2,
  },
});

class SimpleSnackbar extends React.Component {
  state = {
    open: this.props.open,
  };

  handleClick = () => {
    this.setState({ open: true });
  };

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ open: false });
    this.props.toggleSnackbar();  
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Snackbar
            className="snackbar"
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.open}
          autoHideDuration={6000}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={
            <span id="message-id">
                {this.props.error ? `Error: ${this.props.error}` : "Success"}
            </span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </div>
    );
  }
}

SimpleSnackbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleSnackbar);
