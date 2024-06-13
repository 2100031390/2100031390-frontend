import React, { useState, useEffect } from 'react';

const WINDOW_SIZE = 10; // configure window size
const SERVER_URL = 'http://localhost:3000'; // Replace with your server URL

function AverageCalculator() {
  const [windowPrevState,SetWindowPrevState] = useState([]);
  const [windowCurrState,SetWindowCurrState] = useState([]);
  const [numbers, setNumbers] = useState([]);
  const [avg, setAvg] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${SERVER_URL}/e`); // Assuming 'e' is for even numbers
        if (!response.ok || response.status > 500) {
          return;
        }
        const newNumbers = await response.json();
        setNumbers(prevNumbers => [...prevNumbers, newNumbers.numbers]);
        const limitedNumbers = newNumbers.numbers.slice(-WINDOW_SIZE);
        const currentAvg = limitedNumbers.reduce((acc, num) => acc + num, 0) / limitedNumbers.length;
        SetWindowPrevState(windowCurrState);
        SetWindowCurrState(limitedNumbers);
        setAvg(currentAvg);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Average Calculator</h1>
      <p>Window Previous State: {JSON.stringify(windowPrevState)}</p>
      <p>Window Current State: {JSON.stringify(windowCurrState)}</p>
      <p>Numbers: {JSON.stringify(numbers)}</p>
      <p>Average: {avg}</p>
    </div>
  );
}

export default AverageCalculator;
