import { Link } from "react-router-dom";
import styled from "../style/home.module.css";
function Home() {
	return (
		<div className={styled.mainDiv}>
			<div>
				<Link to='/notes'>Notes</Link>
			</div>
			<div>
				<Link to='/login'>Login</Link>
			</div>
			<div>
				<Link to='/register'>register</Link>
			</div>
		</div>
	);
}

export { Home };
