import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import PriorityDropdown from "./PriorityDropdown.js";
import {server_ip} from "./NetworkingConfig.js";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function EnterItemModal(props) {

const [name, setName] = React.useState(props.selectedEntry.name);
const [description, setDescription] = React.useState(props.selectedEntry.description);
const [priority, setPriority] = React.useState('High');


function handleNameChange(event) {
    setName(event.target.value);
};

function handleDescriptionChange(event) {
    setDescription(event.target.value);
};

function handlePriorityChange(event) {
    setPriority(event.target.value);
};

function handleEnterClick(event) { 
	
	if (props.modalMode === "editItem") { 
		if (name !== props.selectedEntry.name) { 
			console.log("Edge case code should run here");
			props.remove_entry(props.selectedEntry.name);
			props.add_to_do(name, priority, description);
		}
		else { 
			// FIX ME - edit the item without adding/deleting it
			console.log("This code ran");
			props.remove_entry(props.selectedEntry.name);
                        props.add_to_do(name, priority, description);
		}
	}
	else { 	
		props.add_to_do(name, description, priority);
	}
		
	props.setIsModalOpen(false);
}

function handleCancelClick(event) {
        props.setIsModalOpen(false);
        //event.stopPropagation();
}

return (
    <Card sx={{ minWidth: 375 }} elevation={24}>
    <CardContent>
     <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 3, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
	<TextField
          id="outlined-multiline-flexible"
          label="To Do Name"
          multiline
          maxRows={4}
          value={name}
          onChange={handleNameChange}
        />
	</div>
	<div>
	<TextField
          id="outlined-multiline-static"
          label="Description"
          multiline 
          rows={4}
	  value={description}
	  onChange={handleDescriptionChange}
        />
	</div>
	
    
	<div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Priority</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={priority}
          onChange={handlePriorityChange}
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
	</Box>
    </CardContent>
    
   <CardActions>
       <Button size="medium" onClick={handleEnterClick}>Enter</Button>
       <Button size="small" onClick={handleCancelClick}>Cancel</Button>
   </CardActions>
</Card>
  );
}
