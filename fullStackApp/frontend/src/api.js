import axios from "axios";

const url = "https://quiet-retreat-10961.herokuapp.com";

export const loginController = (payload) => {
	console.log("payload: ", payload);
	return axios
		.post(`${url}/user/login`, payload)
		.then((res) => {
			if (res.data.token) {
				console.log(res.data.token);
				localStorage.setItem("psc_app_token", res.data.token);
			}
		})
		.catch((err) => console.log(err));
};

export const registerController = (payload) => {
	console.log("payload: ", payload);
	return axios
		.post(`${url}/user/signup`, payload)
		.then((response) => console.log(response.data))
		.catch((err) => console.log(err));
};
