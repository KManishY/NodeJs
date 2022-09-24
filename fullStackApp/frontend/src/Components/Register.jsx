import axios from "axios";
import { useState } from "react";
import { registerController } from "../api.js";

function Register() {
	const [user, setUser] = useState({
		email: "",
		password: "",
		age: "",
	});
	const handleChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	const handleSubmit = async () => {
		await registerController(user);
	};
	return (
		<div>
			<h1>Register here</h1>
			<input
				name='email'
				type='text'
				placeholder='email'
				onChange={(e) => handleChange(e)}
			/>
			<br />
			<input
				name='password'
				type='text'
				placeholder='pwd'
				onChange={(e) => handleChange(e)}
			/>
			<br />
			<input
				type='text'
				name='age'
				placeholder='age'
				onChange={(e) => handleChange(e)}
			/>
			<br />
			<button onClick={handleSubmit}>Register</button>
		</div>
	);
}

export { Register };
