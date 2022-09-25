import {
	Box,
	FormGroup,
	TextField,
	styled,
	Typography,
	Button,
	Paper
} from "@mui/material";
import { useEffect, useState } from "react";
import { loginController } from "../api.js";

function Login() {
	const [user, setUser] = useState({
		email: "",
		password: ""
	});
	const handleChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};
	const handleSubmit = async () => {
		await loginController(user);
	};

	const Container = styled(Box)``;

	return (
		<Box
			sx={{
				width: "25%",
				margin: "auto",
				marginTop: "50px"
			}}
		>
			<Paper elevation={3}>
				<h1>Login</h1>
				<FormGroup>
					<TextField
						sx={{
							margin: "10px"
						}}
						variant='standard'
						label='Email'
						name='email'
						onChange={(e) => handleChange(e)}
					/>
					<TextField
						sx={{
							margin: "10px"
						}}
						variant='standard'
						label='Password'
						name='password'
						onChange={(e) => handleChange(e)}
					/>
					<Button
						sx={{
							margin: "10px"
						}}
						variant='contained'
						color='primary'
						onClick={handleSubmit}
					>
						Login
					</Button>
				</FormGroup>
			</Paper>
		</Box>
	);
}

export { Login };

// <div>
// 			<h1>Login here</h1>
// 			<input
// 				name='email'
// 				type='email'
// 				placeholder='email'
// 				onChange={(e) => handleChange(e)}
// 			/>
// 			<br />
// 			<input
// name='password'
// type='password'
// placeholder='pwd'
// onChange={(e) => handleChange(e)
// }
// 			/>
// 			<br />
// 			<button onClick={handleSubmit}>Login</button>
// 		</div>
