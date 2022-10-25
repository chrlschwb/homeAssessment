import React, { useState, useEffect } from 'react';
import CanvasJSReact from '../canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
    export default function App () {
        const [data, setData] = useState([]);
        useEffect(()=>{
            const now = new Date();
                const fsec = now.getSeconds() % 10; 
                const data = [
                { label: "Apple",  y: 10 * 1 * fsec },
                { label: "Orange", y: 15 * 2 * fsec },
                { label: "Banana", y: 25 * 3 * fsec },
                { label: "Mango",  y: 30 * 4 * fsec },
                { label: "Grape",  y: 28 * 5 * fsec }
            ];
            setData(data)
        }, []);

        useEffect(() => {    
            const interval = setInterval(() => {
                const now = new Date();
                const fsec = now.getSeconds() % 10; 
                const data = [
                    { label: "Apple",  y: 10 * 1 * fsec },
                    { label: "Orange", y: 15 * 2 * fsec },
                    { label: "Banana", y: 25 * 3 * fsec },
                    { label: "Mango",  y: 30 * 4 * fsec },
                    { label: "Grape",  y: 28 * 5 * fsec }
                ];
                setData(data)
            }, 10000);
            return () => {clearInterval(interval);  };
        }, []);
        
      const options = {
        title: {
          text: "Basic Column Chart in React"
        },
        data: [{				
                  type: "column",
                  dataPoints: data
         }]
     }
          
     return (
        <div>
          <CanvasJSChart options = {options}
      containerProps={{ position: 'fixed', left: '0', top: '50%', width: '50%', height: '300px' }}
          />
        </div>
      );  
  }