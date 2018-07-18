import React, { Component } from 'react'; 
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

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
});

class ButtonLogin extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: props.name
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
                <input
                    //accept="image/*"
                    className={classes.input}
                    id="outlined-button-file"
                    multiple
                    type="file"
                    ref="fileUploader"
                    onChange={ (e) => this.handleChange(e.target.files) }
                />
                <label htmlFor="outlined-button-file">
                    <Button variant="outlined" component="span" className={classes.button}>
                    { this.state.name }
                    <CloudUploadIcon className={classes.rightIcon} />
                    </Button>
                </label>
            </div>
        );
    }
}


Button.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(ButtonLogin);