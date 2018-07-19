import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonLogin from './Button';
import ButtonDownload from './ButtonDownload';
import TextBox from './TextBox';
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
    
  render(){
    const { classes } = this.props;
    return (
        <div>
         <Paper className={classes.root} elevation={1}>
            <Grid container spacing={24}>
                <Grid item xs>
                  <TextBox placeholder="Ex.: Trabalho" value="Nome do arquivo" enabled={false}/>
                </Grid>
                <Grid item xs>    
                  <ButtonLogin name="Enviar"/>
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
                    <TextBox placeholder="ID de busca" value="Informe o ID" enabled={true}/>
                  </Grid> 
                  <Grid item xs>    
                    <ButtonDownload name="Baixar"/>
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