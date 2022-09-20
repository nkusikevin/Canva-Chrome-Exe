import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Registration from "./components/Register";
import Login from "./components/Login";
import Landing from "./components/Landing";
import Faq from "./components/Faq";
import Subscription from "./components/Subscription";
import { AuthProvider } from "./AuthProvider";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<div>
			<Header />
			<AuthProvider>
				<Routes>
					<Route path='/' element={<Landing />} />
					<Route path='/login' element={<Login />} />
					<Route path='/dashboard' element={<Home />} />
					<Route path='/register' element={<Registration />} />
					<Route path='/faq' element={<Faq />} />
					<Route path='/subscription' element={<Subscription />} />
				</Routes>
			</AuthProvider>
		</div>
	);
}

export default App;
