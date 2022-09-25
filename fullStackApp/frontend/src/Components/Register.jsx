import { Box, Button, FormGroup, Paper, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { registerController } from "../api.js";

function Register() {
	const [user, setUser] = useState({
		email: "",
		password: "",
		age: ""
	});
	const handleChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	const handleSubmit = async () => {
		let a = await registerController(user);
		console.log("a: ", a);
	};
	return (
		<Box
			sx={{
				width: "25%",
				margin: "auto",
				marginTop: "50px"
			}}
		>
			<Paper mt='50px' elevation={5}>
				<h1>Register here</h1>
				<FormGroup
					sx={{
						width: "90%",
						margin: "auto"
					}}
				>
					<TextField
						m='5px'
						variant='standard'
						name='email'
						type='text'
						label='email'
						onChange={(e) => handleChange(e)}
					/>
					<br />
					<TextField
						m='5px'
						variant='standard'
						name='password'
						type='text'
						label='password'
						onChange={(e) => handleChange(e)}
					/>
					<br />
					<TextField
						m='5px'
						variant='standard'
						type='text'
						name='age'
						label='age'
						onChange={(e) => handleChange(e)}
					/>
					<br />
					<Button
						variant='contained'
						sx={{ marginBottom: "20px" }}
						onClick={handleSubmit}
					>
						Register
					</Button>
				</FormGroup>
			</Paper>
		</Box>
	);
}

export { Register };
