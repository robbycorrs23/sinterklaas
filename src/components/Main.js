import React, {useState, useEffect} from "react";

// let intervalId
let calorieTarget = 5000
let homesRemaining = 1000
let totalHomes = 0
const cookiesMilk = 75
const carrotsTea = -50
let calorieCount = 0

export default function Main() {
    const [count, setCount] = useState(0)
    const [intervalId, setIntervalId] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount(prevCount => prevCount + 1)
        }, 1000)

        return () => clearInterval(intervalId)
    }, [intervalId])

    const handleClick = () => {
        const santaDeliver = setIntervalId(deliverNow)
    }  

    const deliverNow = () => {
        const currentSpeed = (calorieCount < 5000) ? 10 : 5
        const nextTen = [
            ...Array(currentSpeed)
        ]
        .map(() => 
            Math.round(Math.random()) === 1 && calorieCount < 4750 ? cookiesMilk : 
            Math.round(Math.random()) === 1 && calorieCount > 4750 ? Math.floor(cookiesMilk * 0.5) : carrotsTea )
            .reduce((acc, cur) => acc + cur)
            calorieCount += nextTen
            totalHomes += currentSpeed
            homesRemaining -= currentSpeed
            // homesRemaining === 0 ? clearInterval(intervalId) : null
    // }
    // // const santaDeliver = () => {
    // //     intervalId = setInterval(deliverNow, 1000)
    }
    return (
        <div className="main">
          <h1>The component has been rendered for {count} seconds</h1>
          <h1>Santa Dashboard</h1>
          <p>Total Homes: {totalHomes}</p>
          <button onClick={handleClick}>
            {intervalId ? "Stop counting" : "Start counting"}
          </button>
          <p>Nightly calorie target: {calorieTarget}</p>
          {/* <p>Current speed: {currentSpeed}</p>  */}
          <p>Calorie count: {calorieCount}</p>
          <p>Homes remaining: {homesRemaining}</p>
        </div>
      );
}