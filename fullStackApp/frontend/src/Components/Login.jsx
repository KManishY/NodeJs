import { useEffect, useState } from "react";
import { loginController } from "../api.js";

function Login() {
	const [user, setUser] = useState({
		email: "",
		password: "",
	});
	const handleChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};
	const handleSubmit = async () => {
		await loginController(user);
	};

	return (
		<div>
			<h1>Login here</h1>
			<input
				name='email'
				type='email'
				placeholder='email'
				onChange={(e) => handleChange(e)}
			/>
			<br />
			<input
				name='password'
				type='password'
				placeholder='pwd'
				onChange={(e) => handleChange(e)}
			/>
			<br />
			<button onClick={handleSubmit}>Login</button>
		</div>
	);
}

export { Login };
