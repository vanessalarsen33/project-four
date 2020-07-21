import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './AppointmentPage.css';


const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 10,
    color: '#758B71'
  },
}));

export default function AppointmentForm(props) {
  const classes = useStyles();
  const [formData, setFormData] = React.useState({ date: '', service: '', notes: '' });
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleAddAppointment(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="appointmentForm">
      <div className="formSections">
        <Typography
          style={{
            color: "#758B71"
          }}>When would you like to schedule your appointment?</Typography>
        <TextField
          id="datetime-local"
          type="datetime-local"
          className={classes.textField}
          value={formData.date}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
          name="date"
          required
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
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={formData.service}
          onChange={handleChange}
          name="service"
          required
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
          value={formData.notes}
          onChange={handleChange}
        />
      </div>
      <Button
        type="submit"
        variant="outlined"
        style={{
          marginTop: 15,
        }}
      >
        SUBMIT</Button>
    </form>
  );
}