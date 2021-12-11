import React, { useState } from "react";
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'

let calorieCount = 0;
const cookiesMilk = 15;
const carrotsTea = -10;
let currentSpeed = 10;
let homesRemaining = 0;

export default function Main() {
    const [intervalId, setIntervalId] = useState(false)
    // const [homesDisplay, setHomesDisplay] = useState(200)
    const [totalHomes, setTotalHomes] = useState(0)

    let calorieTarget = 5000
    let interval;


    const handleClick = () => {
        if (homesRemaining !== 0) {
            interval = setInterval(() => {
                calorieCount < 5000 && homesRemaining > 10 ? currentSpeed = 10 : 
                calorieCount > 5000 && homesRemaining > 10 ? currentSpeed = 5 :
                currentSpeed = 1
                const nextTen =
                    [...Array(currentSpeed)]
                        .map(() =>
                            Math.round(Math.random()) === 1 && calorieCount < 4750 ? cookiesMilk :
                                Math.round(Math.random()) === 1 && calorieCount > 4750 ? Math.floor(cookiesMilk * 0.5) :
                                    carrotsTea
                        )
                        .reduce((acc, cur) => acc + cur);
                calorieCount += nextTen;
                setTotalHomes(prev => prev += currentSpeed);
                homesRemaining -= currentSpeed
                stopSanta()
            }, 1000)
        } else {
            alert("Please enter value for target # of homes!")
        }
    }

    const stopSanta = () => {
        if (homesRemaining === 0) { 
            clearInterval(interval)
         }
    }

    const handleChange = (e) => {
        e.preventDefault();
        homesRemaining = e.target.value
    }
    
    return (
        <div className="main">
          <h1>Santa Dashboard</h1>
          <p>Total Homes: {totalHomes}</p>
          <button 
          onClick={() => handleClick()}
          >
            {intervalId ? "Stop counting" : "Start counting"}
          </button>
          <p>Nightly calorie target: {calorieTarget}</p>
          <p>Current speed: {currentSpeed} homes per second</p> 
          <p>Calorie count: {calorieCount < 0 ? 0 : calorieCount}</p>
          <p>Homes remaining: {interval ? "0" : homesRemaining}</p>
            <InputGroup className="mt-2">
                <InputGroup.Text id="basic-addon1">Target</InputGroup.Text>
                <Form.Control
                    className="p-2 text-green-400"
                    placeholder="# of homes to visit"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    type="text"
                    onChange={e => handleChange(e)}
                />
            </InputGroup>
        </div>
      );
}