import { Box, Button, FormGroup, Paper, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { adddata, getAllData } from "../api.js";

const NotesAdd = () => {
	const { id } = useParams();

	const [datas, setData] = useState({
		Heading: "",
		Note: "",
		Tag: ""
	});

	const handleChange = (e) => {
		setData({ ...datas, [e.target.name]: e.target.value });
		console.log("data", datas);
	};

	const handleAdd = () => {
		console.log("handleAdd");
		adddata(datas);
	};

	return (
		<Box
			sx={{
				width: "25%",
				margin: "auto",
				marginTop: "50px"
			}}
		>
			<Paper elevation={3}>
				<h1>Create Notes</h1>
				<FormGroup>
					<TextField
						sx={{ margin: "10px" }}
						variant='standard'
						label='Heading'
						type='text'
						onChange={(e) => handleChange(e)}
						name='Heading'
					/>
					<TextField
						sx={{ margin: "10px" }}
						variant='standard'
						label='Note'
						type='text'
						onChange={(e) => handleChange(e)}
						name='Note'
					/>
					<TextField
						sx={{ margin: "10px" }}
						variant='standard'
						label='Tag'
						type='text'
						onChange={(e) => handleChange(e)}
						name='Tag'
					/>
					<Button
						sx={{
							margin: "10px"
						}}
						variant='contained'
						color='primary'
						onClick={handleAdd}
					>
						Add
					</Button>
				</FormGroup>
			</Paper>
		</Box>
	);
};

export default NotesAdd;
