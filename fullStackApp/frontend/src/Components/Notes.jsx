import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { deletedata, editdata, getAllData } from "../api.js";

function Notes() {
	const [loading, setLoading] = useState(false);
	const [notes, setNotes] = useState([]);
	const navigate = useNavigate();

	const getDataFunc = async () => {
		try {
			const res = await getAllData();
			console.log("res: ", res);
			setNotes(res.data);
		} catch (error) {
			console.log("error: ", error);
		}
	};
	useEffect(() => {
		getDataFunc();
	}, []);
	if (!localStorage.getItem("psc_app_token")) {
		return <h1>Please login again</h1>;
	}
	const handleDelete = async (id) => {
		console.log("1");
		try {
			await deletedata(id);
			getDataFunc();
		} catch (error) {
			console.log("error: ", error);
		}
	};

	return (
		<div>
			<h1>Notes here</h1>
			{notes.length > 0 &&
				notes.map((note, index) => {
					return (
						<div key={index}>
							<p>{note.Heading}</p>
							<p>{note.Tag}</p>
							<p>{note._id}</p>
							<p>{note.userId}</p>
							<button onClick={() => handleDelete(note._id)}>
								DELETE
							</button>
							<Link to={`/editNotes/${note._id}`}>
								<button>Edit</button>
							</Link>
						</div>
					);
				})}
		</div>
	);
}

export { Notes };

//abc 5 mins
// /notes - get abc - abc - response
// /notes - get abc - abc - login again

//login
// token - xyz
