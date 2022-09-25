import { AppBar, Toolbar, styled } from "@mui/material";

import { Link, NavLink } from "react-router-dom";
// import styled from "../style/home.module.css";
const Tab = styled(NavLink)`
	text-decoration: none;
	color: white;
	font-size: 40px;
`;
const Toolbaar = styled(Toolbar)`
	align-items: center;
	justify-content: space-around;
	gap: 20px;
`;

function Home() {
	return (
		<>
			<AppBar position='static'>
				<Toolbaar>
					<Tab to='/noteadd'>Add Notes</Tab>
					<Tab to='/notes'>Notes</Tab>
					<Tab to='/login'>Login</Tab>
					<Tab to='/register'>Register</Tab>
				</Toolbaar>
			</AppBar>
		</>
	);
}

export { Home };

// <div className={styled.mainDiv}>
// 	<div>
// 		<Link to='/notes'>Notes</Link>
// 	</div>
// 	<div>
// 		<Link to='/login'>Login</Link>
// 	</div>
// 	<div>
// 		<Link to='/register'>register</Link>
// 	</div>
// </div>
