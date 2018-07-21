import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    width: 350,
  },
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
});


class Upload extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            placeholder: props.placeholder,
            value: "Caminho arquivo",
            enabled: props.enabled,
            name: props.name
        }

        this.handleChangeText = this.handleChangeText.bind(this)
    }

    handleClick() {   
        this.callApi()
          .then(res => this.setState({ response: res.express }))
          .catch(err => console.log(err));

      }
    
      callApi = async () => {
        
        const response = await fetch('/api/file/upload?filename=' + this.state.textValue);
        const body = await response.json();
        console.log(body)
        if (response.status !== 200){
            throw Error(body.message);
        }
            
        return body;
      };
    

     handleChangeText(e){
        this.setState({textValue: e.target.value})
    }

    /*handleTextChange(e){
        console.log(e.target[0])
    }

    handleButtonChange(FileList){
        this.setState({value: FileList[0].name})
        console.log(FileList[0].name);
    }*/

    render(){
        const { classes } = this.props;
        return(
            <div className={classes.container}>
                <Grid container spacing={24}>
                    <Grid item xs>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="name-disabled" onChange={(e) => this.handleChangeText(e)}>{this.state.value}</InputLabel>
                            <Input id="name-disabled"  onChange={this.handleChangeText} />
                            <FormHelperText>Ex.: C:\arquivo.pdf</FormHelperText>
                        </FormControl>
                    </Grid>

                    <Grid item xs>
                        <label htmlFor="outlined-button-file">
                            <Button variant="outlined" className={classes.button} onClick={ () => this.handleClick() }>
                            { this.state.name }
                            <CloudUploadIcon className={classes.rightIcon} />
                            </Button>
                        </label>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

Upload.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(Upload);