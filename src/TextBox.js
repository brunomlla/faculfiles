import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    width: 350,
  },
});


class TextBox extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            placeholder: props.placeholder,
            value: props.value,
            enabled: props.enabled
        }
    }

    handleChange(e){
        console.log(e.target.value)
    }

    render(){
        const { classes } = this.props;
        return(
            <div className={classes.container}>
                <FormControl className={classes.formControl} disabled={!this.state.enabled}>
                    <InputLabel htmlFor="name-disabled" onChange={(e) => this.handleChange(e)}>{ this.state.value }</InputLabel>
                    <Input id="name-disabled"  onChange={this.handleChange} />
                    <FormHelperText>{ this.state.placeholder }</FormHelperText>
                </FormControl>
            </div>
        );
    }
}

TextBox.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(TextBox);