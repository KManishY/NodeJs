import axios from "axios";
import { useState, useEffect } from "react";

function Notes() {
	const [loading, setLoading] = useState(false);
	const [notes, setNotes] = useState([]);
	console.log("notes: ", notes);
	const token = localStorage.getItem("psc_app_token");
	console.log("token: ", token);

	const getData = () => {
		return axios
			.get("https://quiet-retreat-10961.herokuapp.com/notes", {
				headers: {
					Authorization: ` Bearer ${token}`,
				},
			})
			.then((response) => {
				console.log("response: ", response);
				setNotes(response.data);
			});
	};

	// const getData = () => {
	// 	fetch("https://quiet-retreat-10961.herokuapp.com/notes", {
	// 		method: "GET",
	// 		headers: {
	// 			Authorization: `Bearer ${token}`,
	// 		},
	// 	})
	// 		.then((res) => res.json())
	// 		.then((res) => setNotes(res))
	// 		.catch((err) => console.log(err));
	// };
	useEffect(() => {
		getData();
	}, []);
	if (!localStorage.getItem("psc_app_token")) {
		return <h1>Please login again</h1>;
	}
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
							<button>DELETE</button>
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
