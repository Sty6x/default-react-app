import React,{useState,useEffect} from "react";

const App = () => {
	const [count,setCount] = useState(0)	
	useEffect(()=>{
		console.log(count)
	},[count])
	
	return (
		<div id="app" style={{textAlign:'center'}}>
    <h1>Hello React + Webpack!</h1>
			<h1>CREATING MY OWN REACT DEV ENVIRONMENT</h1>
			<h2>{count}</h2>
			<button onClick={(e)=>{
				setCount(prev=>prev+1)
			}}>Click Me</button>
			<div>
			</div>
		</div>
	);
};

export default App;
