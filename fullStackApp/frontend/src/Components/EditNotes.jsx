import { Box, Button, FormGroup, Paper, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { adddata, editdata, getAllData } from "../api.js";

const EditNotes = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const [datas, setData] = useState();
	console.log("datas: ", datas);

	const getEditData = async () => {
		const { data } = await getAllData();

		const mydata = data.filter((user) => user._id == id);
		console.log("mydata", mydata[0]);
		await setData(mydata[0]);
	};

	const handleChange = (e) => {
		setData({ ...datas, [e.target.name]: e.target.value });
		console.log("data", datas);
	};

	const handleUpdate = () => {
		console.log("handleAdd");
		editdata(datas, id);
		navigate("/notes");
	};

	useEffect(() => {
		getEditData();
	}, []);

	return (
		<Box
			sx={{
				width: "25%",
				margin: "auto",
				marginTop: "50px"
			}}
		>
			<Paper elevation={3}>
				<h1>Update Note</h1>
				<FormGroup>
					<TextField
						sx={{ margin: "10px" }}
						variant='standard'
						label='Heading'
						type='text'
						value={datas?.Heading}
						onChange={(e) => handleChange(e)}
						name='Heading'
					/>
					<TextField
						sx={{ margin: "10px" }}
						variant='standard'
						label='Note'
						type='text'
						value={datas?.Note}
						onChange={(e) => handleChange(e)}
						name='Note'
					/>
					<TextField
						sx={{ margin: "10px" }}
						variant='standard'
						label='Tag'
						type='text'
						value={datas?.Tag}
						onChange={(e) => handleChange(e)}
						name='Tag'
					/>
					<Button
						sx={{
							margin: "10px"
						}}
						variant='contained'
						color='primary'
						onClick={handleUpdate}
					>
						Update
					</Button>
				</FormGroup>
			</Paper>
		</Box>
	);
};

export default EditNotes;
