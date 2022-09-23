import axios from "axios";
import { useState } from "react";

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
		await axios
			.post("https://quiet-retreat-10961.herokuapp.com/user/signup", user)
			.then((response) => console.log(response))
			.catch((err) => console.log(err));
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
				// onChange={(e) => setPassword(e.target.value)}
			/>
			<br />
			<input
				type='text'
				name='age'
				placeholder='age'
				// onChange={(e) => setAge(e.target.value)}
				onChange={(e) => handleChange(e)}
			/>
			<br />
			<button onClick={handleSubmit}>Register</button>
		</div>
	);
}

export { Register };
