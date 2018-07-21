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
    }

    handleTextChange(e){
        console.log(e.target[0])
    }

    handleButtonChange(FileList){
        this.setState({value: FileList[0].name})
        console.log(FileList[0].name);
    }

    render(){
        const { classes } = this.props;
        return(
            <div className={classes.container}>
                <Grid container spacing={24}>
                    <Grid item xs>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="name-disabled" onChange={(e) => this.handleTextChange(e)}>{this.state.value}</InputLabel>
                            <Input id="name-disabled"  onChange={this.handleTextChange} />
                            <FormHelperText>Ex.: C:\arquivo.pdf</FormHelperText>
                        </FormControl>
                    </Grid>

                    <Grid item xs>
                        <input
                            //accept="image/*"
                            className={classes.input}
                            id="outlined-button-file"
                            multiple
                            type="file"
                            ref="fileUploader"
                            onChange={ (e) => this.handleButtonChange(e.target.files) }
                        />
                        <label htmlFor="outlined-button-file">
                            <Button variant="outlined" component="span" className={classes.button}>
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