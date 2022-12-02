import * as React from 'react';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

// Source: https://mui.com/material-ui/react-checkbox/
export default function Filter1({oil,pencil,ink,type1,setType1}) {

  const handleChange = (event) => {
    setType1({
      ...type1,
      [event.target.name]: event.target.checked,
    });
  };


  return (
    <div>
      <FormControl component="fieldset" variant="standard">
        <FormLabel component="legend">Media</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={oil} onChange={handleChange} name="oil" />
            }
            label="oil"
          />
          <FormControlLabel
            control={
              <Checkbox checked={pencil} onChange={handleChange} name="pencil" />
            }
            label="pencil"
          />
          <FormControlLabel
            control={
              <Checkbox checked={ink} onChange={handleChange} name="ink" />
            }
            label="ink"
          />
        </FormGroup>
      </FormControl>
    </div>
  );
}