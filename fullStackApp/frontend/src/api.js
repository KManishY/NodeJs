import axios from "axios";

const url = "https://quiet-retreat-10961.herokuapp.com";
// const url = "http://localhost:8080"
const token = localStorage.getItem("psc_app_token");

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

	export const getAllData = async () => {
		try {
			return await axios.get(`${url}/notes`, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			});
		} catch (err) {
			console.log(err);
		}
};
	

export const editdata = async (payload,id) => {
	console.log('id: ', id);
	console.log('payload: ', payload);
	try {
		return await axios.patch(`${url}/notes/edit/${id}`,payload, {
			headers: {
				Authorization:`Bearer ${token}`
			},
		})
	} catch (err) {
		console.log('err: ', err);
		
	}
}
export const deletedata = async ( id) => {
	console.log("2")
	console.log("id: ", id);
	try {
		return await axios.delete(`${url}/notes/delete/${id}`,  {
			headers: {
				Authorization: `Bearer ${token}`
			}
		});
	} catch (err) {
		console.log("err: ", err);
	}
};
// localhost: 8080 / notes / create;
export const adddata = async (payload) => {
	console.log('payload: ', payload);
	try {
		return await axios.post(`${url}/notes/create`, payload, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		});
	} catch (err) {
		console.log(err)
	}
}