import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { Login } from "./Components/Login";
import { Register } from "./Components/Register";
import { Notes } from "./Components/Notes";
import NotesAdd from "./Components/NotesAdd.jsx";
import EditNotes from "./Components/EditNotes.jsx";

function App() {
	return (
		<div className='App'>
			<Home />
			<Routes>
				<Route path='/register' element={<Register />} />
				<Route path='/login' element={<Login />} />
				<Route path='/notes' element={<Notes />} />
				<Route path='/noteadd' element={<NotesAdd />} />
				<Route path='/editNotes/:id' element={<EditNotes />} />
			</Routes>
		</div>
	);
}

export default App;
