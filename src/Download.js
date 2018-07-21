import React, { Component } from 'react'; 
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CloudDownload from '@material-ui/icons/CloudDownload';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
      marginTop: 25,
    },
    input: {
      display: 'none',
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
    container: {
    display: 'flex',
    flexWrap: 'wrap',
    },
    formControl: {
    margin: theme.spacing.unit,
    width: 350,
    },
});

class Download extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            response: '',
            textValue: "",
            buttonDisable: true
        }

        this.handleChangeText = this.handleChangeText.bind(this)
    }

    handleClick() {   
        this.callApi()
          .then(res => this.setState({ response: res.express }))
          .catch(err => console.log(err));

      }
    
      callApi = async () => {
        
        const response = await fetch('/api/file/meta?filename=' + this.state.textValue);
        const body = await response.json();
        console.log(body)
        if (response.status !== 200){
            throw Error(body.message);
        }else{
            window.open("http://localhost:8081/api/file/download?filename=" + this.state.textValue)
        }
            
        return body;
      };


     handleChangeText(e){
        this.setState({textValue: e.target.value})
        if(e.target.value != ""){
            this.setState({buttonDisable: false})
        }else{
            this.setState({buttonDisable: true})
        }    
    }

    handleChange(FileList)
    {
        console.log(FileList[0].name);
    }

    render(){
        const { classes } = this.props;
        return(
            <div>
                <Grid container spacing={24}>
                    <Grid item xs>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="name-disabled">ID do arquivo</InputLabel>
                            <Input id="name-disabled" onChange={(e) => this.handleChangeText(e)} />
                            <FormHelperText>Informe o ID do arquivo</FormHelperText>
                        </FormControl>
                    </Grid>

                    <Grid item xs>
                        <label htmlFor="outlined-button-file">
                            <Button variant="outlined" className={classes.button} onClick={() => this.handleClick()} disabled={this.state.buttonDisable}>
                                Baixar
                                <CloudDownload className={classes.rightIcon} />
                            </Button>
                        </label>
                    </Grid>
                </Grid>
            </div>
        );
    }
}


Download.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Download);