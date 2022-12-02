import * as React from 'react';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

// Source: https://mui.com/material-ui/react-checkbox/
export default function Filter2({US,France,Netherlands,Germany,Austria,UK,Unknown,type2,setType2}) {

  const handleChange = (event) => {
    setType2({
      ...type2,
      [event.target.name]: event.target.checked,
    });
  };


  return (
    <div>
      <FormControl component="fieldset" variant="standard">
        <FormLabel component="legend">Current Location</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={US} onChange={handleChange} name="US" />
            }
            label="US"
          />
          <FormControlLabel
            control={
              <Checkbox checked={France} onChange={handleChange} name="France" />
            }
            label="France"
          />
          <FormControlLabel
            control={
              <Checkbox checked={Netherlands} onChange={handleChange} name="Netherlands" />
            }
            label="Netherlands"
          />
          <FormControlLabel
            control={
              <Checkbox checked={Germany} onChange={handleChange} name="Germany" />
            }
            label="Germany"
          />
          <FormControlLabel
            control={
              <Checkbox checked={Austria} onChange={handleChange} name="Austria" />
            }
            label="Austria"
          />
          <FormControlLabel
            control={
              <Checkbox checked={UK} onChange={handleChange} name="UK" />
            }
            label="UK"
          />
          <FormControlLabel
            control={
              <Checkbox checked={Unknown} onChange={handleChange} name="Unknown" />
            }
            label="Unknown"
          />
        </FormGroup>
      </FormControl>
    </div>
  );
}