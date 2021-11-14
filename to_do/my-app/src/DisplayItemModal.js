import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function DisplayItemModal(props) {


function handleConfirmClick(event) { 
	props.remove_entry(props.selectedEntry.name);
	props.setIsModalOpen(false);
	event.stopPropagation();
}
	
function handleCancelClick(event) { 
	props.setIsModalOpen(false);
	event.stopPropagation();
}
	
return (
    <Card sx={{ minWidth: 275 }} elevation={24}>
      <CardContent>
	<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
	{props.selectedEntry.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {props.selectedEntry.description}
	</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleConfirmClick}>Confirm</Button>
	<Button size="small" onClick={handleCancelClick}>Cancel</Button>
      </CardActions>
    </Card>
  );
}
