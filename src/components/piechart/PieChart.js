import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class App extends Component {	
	render() {
		const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light1", // "light1", "dark1", "dark2"
			title:{
				text: "Trip Expenses"
			}, 
			data: [{
				type: "pie",
				indexLabel: "{label}: {y}%",		
				startAngle: -90,
				dataPoints: [
					{ y: 10, label: "one" },
					{ y: 12, label: "two" },
					{ y: 10, label: "three" },
					{ y: 7, label: "four" },
					{ y: 6, label: "five" },
					{ y: 5, label: "six" },
					{ y: 8, label: "seven" },
					{ y: 9, label: "eight" },
					{ y: 9, label: "nine" },
					{ y: 2, label: "ten" }	
				]
			}]
		}
		
		return (
		<div>
			<CanvasJSChart 
                options = {options} 
                containerProps={{ position: 'fixed', right: '0', width: '50%', height: '300px' }}
            />			
		</div>
		);
	}
}
 
export default App; 