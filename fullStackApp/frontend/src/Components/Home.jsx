import { Link } from "react-router-dom";

function Home() {
	return (
		<h1>
			<Link to='/login'>Login</Link>
			<Link to='/register'>register</Link>
			<Link to='/notes'>Notes</Link>
		</h1>
	);
}

export { Home };
