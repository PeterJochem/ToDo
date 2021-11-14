import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function PriorityDropdown() {
  const [priority, setPriority] = React.useState('High');

  const handleChange = (event) => {
    setPriority(event.target.value);
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Priority</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={priority}
          onChange={handleChange}
          label="Priority"
        >
          <MenuItem value="">
	  </MenuItem>
          <MenuItem value={10}>High</MenuItem>
          <MenuItem value={20}>Medium</MenuItem>
          <MenuItem value={30}>Low</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
