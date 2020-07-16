import React, { Component } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import './AppointmentForm.css';


class AddAppointmentPage extends Component {
  state = {
    formData: {
      date: '',
      service: '',
      notes: ''
    },
    service: '',
    open: false,
  };
  
  //  styles = makeStyles((theme) => ({
  //   container: {
  //     display: 'flex',
  //     flexWrap: 'wrap',
  //   },
  //   textField: {
  //     marginLeft: theme.spacing(1),
  //     marginRight: theme.spacing(1),
  //     width: 200,
  //   },
  //   button: {
  //     display: 'block',
  //     marginTop: theme.spacing(2),
  //   },
  //   formControl: {
  //     margin: theme.spacing(1),
  //     minWidth: 120,
  //   },
  // }));
  // classes = this.styles();


  handleChange = e => {
    const formDataAsUserTypes = {
      ...this.state.formData,
      [e.target.name]: e.target.value,
    }
    const service = e.target.value

    this.setState({
      formData: formDataAsUserTypes,
      service: service
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleAddAppointent(this.state.formData);
  };


  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleOpen = () => {
    this.setState({
      open: true,
    });
  };

  render() {
    return (
      <form className="appointmentForm">
        <h3>DATE</h3>
        <TextField
          id="datetime-local"
          type="datetime-local"
          defaultValue="2017-05-24T10:30"
          value={this.state.formData.date}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <h3>SERVICE</h3>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={this.open}
          onClose={this.handleClose}
          onOpen={this.handleOpen}
          value={this.state.formData.service}
          onChange={this.handleChange}
        >
          <MenuItem>
          </MenuItem>
          <MenuItem>Massage</MenuItem>
          <MenuItem>Hair cut</MenuItem>
          <MenuItem>Facial</MenuItem>
          <MenuItem>Pedicure</MenuItem>
          <MenuItem>Manicure</MenuItem>
          <MenuItem>Facial</MenuItem>
        </Select>
        <h3>NOTES:</h3>
        <TextField
        value={this.state.formData.notes}

        />
        <Button
          type="submit"
        >
          SUBMIT</Button>
      </form>
    );
  }
}

export default AddAppointmentPage;