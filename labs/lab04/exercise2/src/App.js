import { useState } from "react";
import "./App.css";

function App() {
	return (
		<div className="App">
			<div className="container">
				<h1>2048</h1>
				<Grid />
			</div>
		</div>
	);
}

function Number({ value })  {
	return <div class="cell" id="two">{value}</div>
}

function Cell({ number }) {
	if (number) {
		return <td><Number value={number}/></td>
	}
	return <td></td>
}

function Grid() {
	const [cells, setCells] = useState(Array(16).fill(2, 0, 1).fill(null, 1, 16));
	
	const handleKeyDown = (event) => {
		if (event.key === "w") {

		} else if (event.key === "a") {

		} else if (event.key === "s") {

		} else if (event.key === "d") {

		}
	}
	
	return  (
		<table border="1" onKeyDown={handleKeyDown}>
			<tr>
				<Cell number={cells[0]}/>
				<Cell number={cells[1]}/>
				<Cell number={cells[2]}/>
				<Cell number={cells[3]}/>
			</tr>
			<tr>
				<Cell number={cells[4]}/>
				<Cell number={cells[5]}/>
				<Cell number={cells[6]}/>
				<Cell number={cells[7]}/>
			</tr>
			<tr>
				<Cell number={cells[8]}/>
				<Cell number={cells[9]}/>
				<Cell number={cells[10]}/>
				<Cell number={cells[11]}/>
			</tr>
			<tr>
				<Cell number={cells[12]}/>
				<Cell number={cells[13]}/>
				<Cell number={cells[14]}/>
				<Cell number={cells[15]}/>
			</tr>
		</table>
	);
}

export default App;
