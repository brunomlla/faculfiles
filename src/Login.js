import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonLogin from './Button';
import TextBox from './TextBox';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: 560,
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

    componentDidMount() {
        this.callApi()
          .then(res => this.setState({ response: res.express }))
          .catch(err => console.log(err));
    }
    callApi = async () => {
        const response = await fetch('/');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
    
        return body;
      };
    
  render(){
    const { classes } = this.props;
    return (
        <div>
            <Paper className={classes.root} elevation={1}>
            <Grid container spacing={24}>
                <Grid item xs>
                    <TextBox placeholder="Caminho do arquivo" value="Ex.: C:/Documentos/trabalho.pdf"/>
                </Grid>
                <Grid item xs>    
                    <ButtonLogin name="Selecionar"/>
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