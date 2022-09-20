import React from "react";
import { useContext } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Dasboard from "./Dasboard";
import AuthContext from "../AuthContext";

function Home() {
	const { user } = useContext(AuthContext);
	const navigate = useNavigate();
	if (!user) {
		return <Navigate to='/login' />;
	}

	return (
		<div>
			<div className='layout'>
				<Sidebar />
				<Dasboard />
			</div>
		</div>
	);
}

export default Home;
