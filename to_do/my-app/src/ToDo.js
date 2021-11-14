import { useState, useEffect } from "react";
import ToDoEntry from "./ToDoEntry.js";
import SimpleBackdrop from "./Backdrop.js";
import AccountMenu from "./AccountMenu.js";
import {server_ip} from "./NetworkingConfig.js";


export default function ToDo() { 

const [isModalOpen, setIsModalOpen] = useState(false);
const [modalMode, setModalMode] = useState("displayItem");
const [selectedEntry, setSelectedEntry] = useState(null);
const [toDos, setToDos] = useState([]);

function sort_to_dos(to_dos, method="byPriority") { 
	if (method === "byPriority") {
		to_dos.sort((a, b) => (a.priority_level > b.priority_level));
	}
	else { 
		to_dos.sort((a, b) => (a.date_entered > b.date_entered))
	}
}

function get_to_dos() { 
	fetch(`http://${server_ip}/read_to_dos`)
        .then(res => res.json())
        .then((data) => {
                let to_dos = [];
                for (let i = 0; i < data.length; i++) {
                        let entry = data[i];
                        to_dos.push(new ToDoEntry({name: entry["Name"], description: entry["Description"], 
				priority_level: entry["Priority"], date_entered: entry["Date_Entered"]}));
                }
		sort_to_dos(to_dos);
                setToDos(to_dos);
        })
        .catch(console.log)	
}

function delete_to_do(name) { 
	fetch(`http://${server_ip}/remove_to_dos?name=${name}`)
  	.then(res => res.json())
        .then((data) => {})
        .catch(console.log)
	get_to_dos()
}

function add_to_do(name, description, priority) {
        fetch(`http://${server_ip}/add_to_dos?name=${name}&description=${description}&priority=${priority}`)
        .then(res => res.json())
        .then((data) => {})
        .catch(console.log)
	let to_dos = toDos.slice();
	to_dos.push(new ToDoEntry({name, description, priority_level: priority, date_entered: null}));
	sort_to_dos(to_dos);
	setToDos(to_dos);
}

function update_to_do(name, description, priority) {
        fetch(`http://${server_ip}/update_to_do?name=${name}&description=${description}&priority=${priority}`)
        .then(res => res.json())
        .then((data) => {})
        .catch(console.log)
	let to_dos = [];
	for (let i = 0; i < toDos.length; i++) { 
		if (name === toDos[i].name) { 
			to_dos.push(new ToDoEntry({name, description, priority_level: priority, date_entered: null}));
		}
		else { 
			to_dos.push(toDos[i]);
		}
		sort_to_dos(to_dos);
	}
	setToDos(to_dos);
}

useEffect(() => { 		
	const interval = setInterval(() => (get_to_dos()), 5000);
	return () => {
    		clearInterval(interval);
  	};
}, []); // eslint-disable-line react-hooks/exhaustive-deps



let emptyToDo = new ToDoEntry({name: "", description: "",
                               priority_level: "", date_entered: "",
			       setSelectedEntry: setSelectedEntry,
                               setIsModalOpen: setIsModalOpen,
                               setModalMode: setModalMode,
                               removeEntry: delete_to_do});

function reset() { 
	if (modalMode !== "editItem") {
		if (selectedEntry === null || selectedEntry.name !== emptyToDo.name) { 
			setSelectedEntry(emptyToDo);
		}
	}
}


return <div className=""> 
	<AccountMenu reset={reset()} add_to_do={add_to_do} setModalMode={setModalMode} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
	{isModalOpen ? <SimpleBackdrop  update_to_do={update_to_do} 
				 	add_to_do={add_to_do}
					modalMode={modalMode}
					open={isModalOpen} 
					selectedEntry={selectedEntry}
					remove_entry={delete_to_do}
					setIsModalOpen={setIsModalOpen} />: null}
	
	{toDos.map((to_do) =>  {
	return (
        	<ToDoEntry key={to_do.name}
                 	value={to_do.name} 
		  	name={to_do.name}
		  	description={to_do.description}
			setSelectedEntry={setSelectedEntry} 
			setIsModalOpen={setIsModalOpen}
			setModalMode={setModalMode}
			removeEntry={delete_to_do}
			updateEntry={update_to_do}
		/>
		)
	}
      )}
	</div>
}
