import React from "react";
import "../assets/tailwind.css";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom";
import App from "../App";

const test = <h1 className='text-3xl text-green-500 font-bold underline'></h1>;


const container = document.createElement("div");
container.setAttribute("id", "root");
document.body.appendChild(container);


// First, we create a root
const root = createRoot(document.querySelector('#root'));

// Initial render. Container is implicitly accessed.
root.render(<App />);






