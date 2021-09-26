import { useState } from "react";
import ToDoEntry from "./ToDoEntry.js";
import SimpleBackdrop from "./Backdrop2.js";
import Modal from "./Modal.js";


export default function ToDo() { 

const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedEntry, setSelectedEntry] = useState(null);

let props1 = {name: "Call  Josef", description: "1 (414) 312-1186"};
let props2 = {name: "Make bed", description: ""};
let all_to_do = [new ToDoEntry(props1), new ToDoEntry(props2)];

return <div className=""> 
	<h1> Peters To Dos </h1>		
	{isModalOpen ? <SimpleBackdrop open={isModalOpen} selectedEntry={selectedEntry} clickHandler={() => setIsModalOpen(false)} />: null}
	
	{all_to_do.map((to_do) =>  {
	return (
        	<ToDoEntry key={to_do.name}
                 	value={to_do.name} 
		  	name={to_do.name}
		  	description={to_do.description}
			setSelectedEntry={setSelectedEntry} 
			setIsModalOpen={setIsModalOpen} 
		/>
		)
	}
      )}
	</div>
}
