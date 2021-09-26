import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Modal from "./Modal.js";

export default function SimpleBackdrop(props) {
  return (
    <div>
    <Backdrop
  	sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
  	open={true}
	onClick={props.clickHandler}
	>
	<Modal selectedEntry={props.selectedEntry}/>
	</Backdrop>
	</div>
  );
}
