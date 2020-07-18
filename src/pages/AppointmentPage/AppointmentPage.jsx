import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import './AppointmentForm.css';

  const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
    button: {
      display: 'block',
      marginTop: theme.spacing(2),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }));

export default function AddAppointmentPage(props) {
  const classes = useStyles();
  const [service, setService] = React.useState('');
  const [formData, setFormData] = React.useState({date: '', service: '', notes: ''});
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
    props.handleAddAppointment(formData)
  }

  
  return (
    <form onSubmit={handleSubmit} className="appointmentForm">
      <h3>DATE</h3>
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
      />
      <h3>SERVICE</h3>
      <Select
        labelId="demo-controlled-open-select-label"
        id="demo-controlled-open-select"
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        value={formData.service}
        onChange={handleChange}
        name="service"
      >
        <MenuItem>
        </MenuItem>
        <MenuItem value="massage">Massage</MenuItem>
        <MenuItem value="haircut">Hair cut</MenuItem>
        <MenuItem value="facial">Facial</MenuItem>
        <MenuItem value="pedicure">Pedicure</MenuItem>
        <MenuItem value="manicure">Manicure</MenuItem>
      </Select>
      <h3>NOTES:</h3>
      <TextField 
        name="notes"
        value={formData.notes}
        onChange={handleChange}
      />
      <Button
        type="submit"
      >
        SUBMIT</Button>
    </form>
  );
}
