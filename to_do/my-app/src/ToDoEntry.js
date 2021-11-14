import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


class ToDoEntry extends React.Component { 
	constructor(props) { 
		super(props);
		this.render = this.render.bind(this);
		this.handleMarkFinishedClick = this.handleMarkFinishedClick.bind(this);
		this.handleDeleteClick = this.handleDeleteClick.bind(this);
		this.handleEditClick = this.handleEditClick.bind(this);
		this.name = props.name;
		this.description = props.description;
		this.priority_level = props.priority_level;
		this.date_entered = props.date_entered;
		this.date_finished = props.date_finished;
	}

	handleMarkFinishedClick(event) { 
		console.log("You clicked mark finished");
		this.props.setSelectedEntry(this);
		this.props.removeEntry(this.name);
		this.props.setModalMode("displayItem");
	}

	handleDeleteClick(event) { 
		console.log("You clicked delete");
		this.props.removeEntry(this.name);
	}

	handleEditClick(event) { 
		console.log("You clicked edit");
                this.props.setSelectedEntry(this);
                this.props.setIsModalOpen(true);
		this.props.setModalMode("editItem");
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
        	<Button size="medium" onClick={this.handleMarkFinishedClick}>Mark Finished</Button>
		<Button size="small" onClick={this.handleDeleteClick}>Delete</Button>
		<Button size="small" onClick={this.handleEditClick}>Edit</Button>
	      </CardActions>
	    </Card>
	  );
}
}
export default ToDoEntry;
