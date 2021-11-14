import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import DisplayItemModal from "./DisplayItemModal.js";
import EnterItemModal from "./EnterItemModal.js";


export default function SimpleBackdrop(props) {

  return (
    <div>
    <Backdrop
  	sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
  	open={true}
	onClick={props.clickHandler}
	>
	
	 <EnterItemModal update_to_do={props.update_to_do} add_to_do={props.add_to_do} selectedEntry={props.selectedEntry} remove_entry={props.remove_entry} modalMode={props.modalMode} setIsModalOpen={props.setIsModalOpen}/>
	
	</Backdrop>
	</div>
  );
}
