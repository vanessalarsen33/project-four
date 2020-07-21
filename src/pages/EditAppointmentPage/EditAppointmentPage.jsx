import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';

class EditAppointmentPage extends Component {
  state = {
    formData: this.props.location.state.clickedOnAppointment
  };

  handleChange = e => {
    this.setState({
      formData: {
        ...this.state.formData,
        [e.target.name]: e.target.value
      }
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleUpdateAppointment(this.state.formData);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="appointmentForm">
        <Typography>Update your appointment</Typography>
        <div className="formSections">
          <Typography
            style={{
              color: "#758B71"
            }}>When would you like to schedule your appointment?</Typography>
          <TextField
            id="datetime-local"
            type="datetime-local"
            value={this.state.formData.date}
            onChange={this.handleChange}
            InputLabelProps={{
              shrink: true,
            }}
            name="date"
          />
        </div>
        <div className="formSections">
          <Typography
            style={{
              color: "#758B71"
            }}>What service are your booking?</Typography>
          <Select
            className="form1"
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            onClose={this.handleClose}
            onOpen={this.handleOpen}
            value={this.state.formData.service}
            onChange={this.handleChange}
            name="service"
          >
            <MenuItem>
            </MenuItem>
            <MenuItem value="massage">Reflexology Treatment</MenuItem>
            <MenuItem value="stone massage">Hot Stone Therapy Massage</MenuItem>
            <MenuItem value="haircut">Hair cut</MenuItem>
            <MenuItem value="facial">Facial</MenuItem>
            <MenuItem value="pedicure">Pedicure</MenuItem>
            <MenuItem value="manicure">Manicure</MenuItem>
          </Select>
        </div>
        <div className="formSections">
          <Typography
            style={{
              color: "#758B71"
            }}>Anything else we should know?</Typography>
          <TextField
            name="notes"
            value={this.state.formData.notes}
            onChange={this.handleChange}
          />
        </div>
        <button
          type="submit"
          className="saveBtn">
          SAVE
          </button>
      </form>
    )
  }
}

export default EditAppointmentPage;