import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Upload from './Upload';
import Download from './Download';
import TextBox from './Upload';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: 570,
    backgroundColor: '#F5F5DC',
    //justify: "center"
    marginLeft: 300,
    marginTop: 200
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  }
});


class Login extends React.Component {
  constructor(props){
    super(props)
    this.state={
      textValue: ""
    }
  }
    

  render(){
    const { classes } = this.props;
    return (
        <div>
          <Paper className={classes.root} elevation={1}>
              <Grid container spacing={24}>
                <Grid item xs>    
                  <Upload name="Enviar"/>
                </Grid>
              </Grid>
              
              <Grid container spacing={24}>
                <Grid item xs>
                  <Typography variant="caption" gutterBottom align="center">
                    <Divider light />
                      OU
                    <Divider light />
                  </Typography>
                </Grid>
              </Grid>

              <Grid container spacing={24}>
                  <Grid item xs>
                    <Download/>
                  </Grid> 
              </Grid>
          </Paper>
        </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);