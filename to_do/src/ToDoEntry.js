import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


class ToDoEntry extends React.Component { 
	constructor(props) { 
		super(props);
		this.render = this.render.bind(this);
		this.handleConfirmClick = this.handleConfirmClick.bind(this);
		this.handleRejectClick = this.handleRejectClick.bind(this);
		this.name = props.name;
		this.description = props.description;
		this.priority_level = props.priority_level;
	}

	handleConfirmClick(event) { 
		console.log("You clicked confirm");
		this.props.setSelectedEntry(this);
		this.props.setIsModalOpen(true);
	}

	handleRejectClick(event) { 
		console.log("You clicked reject");
	}

	render() {
	return (
    		<Card sx={{ minWidth: 275 }} elevation={24}>
      		<CardContent>
        	<Typography variant="h4" color="text.primary" gutterBottom>
		{this.props.name}
		</Typography>
        	<Typography variant="p" component="div">
        	{this.props.description}
		</Typography>
      		</CardContent>
      		<CardActions>
        	<Button size="medium" onClick={this.handleConfirmClick}>Mark Finished</Button>
		<Button size="small" onClick={this.handleRejectClick}>Delete</Button>
	      </CardActions>
	    </Card>
	  );
}
}
export default ToDoEntry;
