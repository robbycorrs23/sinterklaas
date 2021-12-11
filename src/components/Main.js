import React, { useState } from "react";
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'

let calorieCount = 0;
const cookiesMilk = 15;
const carrotsTea = -10;
let currentSpeed = 10;
let homesRemaining = 0;
let timeSecs = 0;

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
                timeSecs += 1
                stopSanta()
            }, 1000);
            setIntervalId(interval);
        } else {
            alert("Please enter value for target # of homes!")
        }
    }

    const stopSanta = () => {
        if (homesRemaining === 0) { 
            clearInterval(interval)
         }
    }

    // Chris - Why doesn't stop button clearInterval as stopSanta does? //
    const stopBtn = () => clearInterval(intervalId) 
    // ---------------------------------------------- //

    const handleChange = (e) => {
        e.preventDefault();
        homesRemaining = e.target.value
    }
    
    return (
    /* --- BACKGROUND - problems!!! --- */
        // <div className="bg">
        /* <div class="bg-star-bgImg-kai-pilger-unsplash w-full h-full bg-no-repeat bg-cover"> */

            /* --- OUTER Screen --- */
            <div class="max-w-xs md:max-w-md min-h-96 mx-auto my-5 bg-gray-800 border-2 border-blue-500 rounded-2xl">
            <container class="rounded">

                {/* --- INNER Screen --- */}
          
                <div class="m-4 p-3 bg-slate-800 border-2 border-blue-400 rounded-2xl grid grid-cols-2 gap-2 text-xs text-gray-300">
                    
                    <div class="flex flex-col items-center border-dashed border-b-2 border-r-2 border-blue-400">
                        <div class="text-gray-300 mt-1 mb-2">Calorie Target</div> 
                        <div class="font-mono text-white mb-2">{calorieTarget}</div> 
                    </div>
                    <div class="flex flex-col items-center border-dashed border-b-2 border-blue-400">
                        <div class="text-gray-300 mt-1 mb-2">Calories Tonight</div>
                        <div id="santa-calories" class="mb-2 font-mono text-white">{calorieCount < 0 ? 0 : calorieCount}</div> 
                    </div>
                    <div class="flex flex-col items-center border-dashed border-b-2 border-r-2 border-blue-400">
                        <div class="text-gray-300 mt-1 mb-2">Milk / Cookies</div>
                        <div id="total-milk-cookies" class=" mb-2 font-mono text-white">???</div> 
                    </div>
                    <div class="flex flex-col items-center border-dashed border-b-2 border-blue-400">
                        <div class="text-gray-300 mt-1 mb-2">Tea / Carrots</div>
                        <div id="total-carrots-tea" class="mb-2 font-mono text-white">???</div> 
                    </div>
                    
                    <div class="flex flex-col items-center border-dashed border-b-2 border-r-2 border-blue-400">
                        <div class="text-gray-300 mt-1 mb-2">Homes Visited</div>
                        <div id="homes-visited" class="mb-2 font-mono text-white">{totalHomes}</div> 
                    </div>
                    <div class="flex flex-col items-center border-dashed border-b-2 border-blue-400">
                        <div class="text-gray-300 mt-1 mb-2">Homes Remaining</div>
                        <div id="homes-remaining" class="mb-2 font-mono text-white">{interval ? "0" : homesRemaining}</div> 
                    </div>
                    <div class="flex flex-col items-center border-dashed border-b-2 border-r-2 border-blue-400">
                        <div class="text-gray-300 mt-1 mb-2">Delivery Speed</div>
                        <div id="homes-per-second" class="mb-2 font-mono text-white">{currentSpeed}</div> 
                    </div>
                    <div class="flex flex-col items-center border-dashed border-b-2 border-blue-400">
                        <div class="text-gray-300 mt-1 mb-2">Total Time</div>
                        <div id="time-ms" class="mb-2 font-mono text-white">{timeSecs}</div>
                    </div>
                </div>

                {/* --- Buttons & Input --- */}
                <div class="max-w-xs mx-4 mb-3 grid grid-cols-2">
                    <div class="flex justify-center mx-4">
                        <button class="w-10 h-10 mr-2 bg-gradient-radial from-gray-800 via-green-800 to-green-900 rounded-full text-gray-100 opacity-90 text-xs"
                            onClick={handleClick}
                            >
                            Start
                            {/* {intervalId ? "Stop counting" : "Start counting"} */}
                        </button>

                        {/* Chris - Why doesn't Stop Button work? */}
                        <button class="w-10 h-10 ml-2 bg-gradient-radial rounded-full from-gray-800 via-red-800 to-red-900 text-gray-100 opacity-90 text-xs"
                            onClick={stopBtn}
                            >
                            Stop
                        </button>
                        {/* // -------------------------------- // */}
                            
                    </div>

                    {/* <input id="santa-home-target" aria-label="Input House Target for the Night" type="text" placeholder="House Target" class="mx-2 italic text-xs text-center text-gray-200 placeholder:text-gray-400 bg-gray-800 border border-gray-300 rounded-full focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"> */}
                    <InputGroup className="mt-2">
                    {/* <InputGroup.Text id="basic-addon1">Target</InputGroup.Text> */}
                    <Form.Control
                        className="italic text-xs text-center text-gray-200 placeholder:text-gray-400 bg-gray-800 border border-gray-300 rounded-full focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                        placeholder="House Target"
                        aria-label="Input House Target for the Nigh"
                        aria-describedby="basic-addon1"
                        type="text"
                        onChange={e => handleChange(e)}
                    />
                </InputGroup>
                </div>
                
               
            
            
            
    

            </container>
            </div>
            /* --- END outer screen --- */
        
        // </div>
      );
}