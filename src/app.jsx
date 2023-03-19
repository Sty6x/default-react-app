import React,{useState,useEffect} from "react";
import { MyComponent } from "./MyComponent";

const App = () => {
	const [count,setCount] = useState(0)	
	useEffect(()=>{
		console.log(count)
	},[count])
	
	return (
		<div id="app">
			<h1>CREATING OWN REACT APP</h1>
			<p>Something Out Here</p>
			<h2>{count}</h2>
			<button onClick={(e)=>{
				setCount(prev=>prev+1)
			}}>Click Me</button>
			<div>
				<MyComponent/>
			</div>
		</div>
	);
};

export default App;
