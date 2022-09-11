import React from "react";
import Login from "./components/Login";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
function App() {
	return (
		<div>
			<Header/>
			<div className="layout">
				<Sidebar/>
				<Login />
			</div>
		</div>
	);
}

export default App;
