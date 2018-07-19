import React, { Component } from 'react'; 
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CloudDownload from '@material-ui/icons/CloudDownload';

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

class ButtonDownload extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: props.name,
            response: ''
        }
    }

    handleClick() {
        this.callApi()
          .then(res => this.setState({ 
              response: res.express 
        }))
          .catch(err => console.log(err));
      }
    
      callApi = async () => {
        
        const response = await fetch('/api/file/meta?filename=AC2_Bruno_Muller_e_Jony_Gregorio.pdf');
        const body = await response.json();
        console.log(body)
        if (response.status !== 200) throw Error(body.message);
    
        return body;
      };

    handleChange(FileList)
    {
        console.log(FileList[0].name);
    }

    render(){
        const { classes } = this.props;
        return(
            <div>
                <label htmlFor="outlined-button-file">
                    <Button variant="outlined" className={classes.button} onClick={() => this.handleClick()}>
                        Baixar
                    <CloudDownload className={classes.rightIcon} />
                    </Button>
                </label>
            </div>
        );
    }
}


Button.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(ButtonDownload);