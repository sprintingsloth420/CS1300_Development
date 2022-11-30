import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

// Source: https://mui.com/material-ui/react-radio-button/
export default function Sort({sorting,setSort}) {
    const handleSort = (event) => {
        setSort(event.target.value);
      };

  return (
    <div>
        <FormControl>
            <FormLabel id="sort">Sort by:</FormLabel>
                <RadioGroup
                    name="sort"
                    value={sorting}
                    onChange={handleSort}
                >
            <FormControlLabel value="default" control={<Radio />} label="Default" />
            <FormControlLabel value="year" control={<Radio />} label="Year" />
            <FormControlLabel value="dimension" control={<Radio />} label="Dimension" />
        </RadioGroup>
        </FormControl>
    </div>
  );
}