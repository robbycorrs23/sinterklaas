import React, { useState } from "react";
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
// import stars from 'public/images/star-bgImg-kai-pilger-unsplash.jpeg'

let calorieCount = 0;
const cookiesMilk = 15;
const carrotsTea = -10;
let currentSpeed = 10;
let homesRemaining = 0;
let timeSecs = 0;
let cookieMilkCount = 0;
let carrotTeaCount = 0;

export default function Main() {
    const [intervalId, setIntervalId] = useState(false) // previously setIntervalId was declared but not used. The StackOverflow solution said to put it above the `else` below
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
                nextTen.forEach(item => item === cookiesMilk ? cookieMilkCount += 1: item === carrotsTea ? carrotTeaCount += 1: null)
                const arrTotal = nextTen.reduce((acc, cur) => acc + cur);
                
                calorieCount += arrTotal;
                setTotalHomes(prev => prev += currentSpeed);
                homesRemaining -= currentSpeed
                timeSecs += 1
                stopSanta()
            }, 1000);
            // Chris - I added below line from the stack overflow.
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

    // Chris - added stop button from StackOverflow solution. Passing intervalId and not interval as above for stopSanta. No idea why ;) State? //
    const stopBtn = () => clearInterval(intervalId) 
    // ---------------------------------------------- //

    const handleChange = (e) => {
        e.preventDefault();
        homesRemaining = e.target.value
    }
    
    return (
    /* --- BACKGROUND - problems!!! Something different about CRA and Tailwind I think --- */

    //  --- MEDIA QUERIES - PORTRAIT: mobile w:470px / sm:640px / lg:1024px / xl:1280px ---
    //                      LANDSCAPE: 
    // ------------------------------------------------------------------------------------
        
        <div className="m-0 flex items-center justify-center h-screen">
            

            {/* --- OUTER Screen --- */}
            <div className="w-[470px] sm:w-3/5 sm:h-3/4 m-3 bg-gray-800 border border-blue-400 rounded-2xl">
            <container className="rounded">
            
                {/* --- Buttons - Change Screen --- */}
                <div className="mx-4 my-2 sm:my-6 flex justify-evenly">
                    
                        {/* --- metrics --- */}
                        <button className="text-gray-200"> <i class="fas fa-chart-line fa-lg"></i></button>
                        {/* --- JSON list --- */}
                        <button className="text-gray-500"> <i class="far fa-address-book fa-lg"></i></button>
                    
                </div>

                {/* --- INNER Screen --- */}
          
                <div className="my-3 mx-4 sm:m-6 p-3 bg-slate-800 border border-blue-400 rounded-2xl grid grid-cols-2 text-sm sm:text-base text-gray-300">
                    
                    <div className="flex flex-col items-center border-dashed border-b border-r border-blue-400">
                        <div className="text-gray-300 mt-2 mb-2">Calorie Target</div> 
                        <div className="font-mono text-white text-base sm:text-lg mb-3">{calorieTarget}</div> 
                    </div>
                    <div className="flex flex-col items-center border-dashed border-b border-blue-400">
                        <div className="text-gray-300 mt-2 mb-2">Calories Tonight</div>
                        <div id="santa-calories" class="mb-4 font-mono text-white text-base sm:text-lg">{calorieCount < 0 ? 0 : calorieCount}</div> 
                    </div>
                    <div className="flex flex-col items-center border-dashed border-b border-r border-blue-400">
                        <div className="text-gray-300 mt-2 mb-2">Milk / Cookies</div>
                        <div id="total-milk-cookies" class=" mb-3 font-mono text-white text-base sm:text-lg">{cookieMilkCount}</div> 
                    </div>
                    <div className="flex flex-col items-center border-dashed border-b border-blue-400">
                        <div className="text-gray-300 mt-2 mb-2">Tea / Carrots</div>
                            <div id="total-carrots-tea" class="mb-3 font-mono text-white text-base sm:text-lg">{carrotTeaCount}</div>
                    </div>                    
                    <div className="flex flex-col items-center border-dashed border-b border-r border-blue-400">
                        <div className="text-gray-300 mt-2 mb-2">Homes Visited</div>
                        <div id="homes-visited" class="mb-3 font-mono text-white text-base sm:text-lg">{totalHomes}</div> 
                    </div>
                    <div className="flex flex-col items-center border-dashed border-b border-blue-400">
                        <div className="text-gray-300 mt-2 mb-2">Homes Remain</div>
                        <div id="homes-remaining" class="mb-3 font-mono text-white text-base sm:text-lg">{interval ? "0" : homesRemaining}</div> 
                    </div>
                    <div className="flex flex-col items-center border-dashed border-r border-blue-400">
                        <div className="text-gray-300 mt-2 mb-2">Delivery Speed</div>
                        <div id="homes-per-second" class="mb-3 font-mono text-white text-base sm:text-lg">{currentSpeed} h/s</div> 
                    </div>
                    <div className="flex flex-col items-center border-dashed border-blue-400">
                        <div className="text-gray-300 mt-2 mb-2">Total Time</div>
                        <div id="time-ms" class="mb-3 font-mono text-white text-base sm:text-lg">{timeSecs}</div>
                    </div>
                </div>

                {/* --- Buttons & Input --- */}
                <div className="mx-4 my-4 grid grid-cols-2 justify-items-center items-center">
                    <div className="flex justify-center mx-4">
                        <button className="w-10 h-10 mr-2 bg-gradient-radial from-gray-800 via-green-800 to-green-900 rounded-full text-gray-100 opacity-90 text-xs"
                            onClick={handleClick}
                            >
                            Start
                            {/* {intervalId ? "Stop counting" : "Start counting"} */}
                        </button>

                        {/* Chris - new Stop Button */}
                        <button className="w-10 h-10 ml-2 bg-gradient-radial rounded-full from-gray-800 via-red-800 to-red-900 text-gray-100 opacity-90 text-xs"
                            onClick={stopBtn}
                            >
                            Stop
                        </button>
                            
                    </div>

                    {/* --- INPUT - has styling issues. Flex not working same for me as was in Vanilla set-up --- */}

                    {/* <input id="santa-home-target" aria-label="Input House Target for the Night" type="text" placeholder="House Target" className="mx-2 italic text-xs text-center text-gray-200 placeholder:text-gray-400 bg-gray-800 border border-gray-300 rounded-full focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"> */}
                    <InputGroup className="">
                    {/* <InputGroup.Text id="basic-addon1">Target</InputGroup.Text> */}
                    <Form.Control
                        className="italic py-1 text-xs text-center text-gray-200 placeholder:text-gray-400 bg-gray-800 border border-gray-300 rounded-full focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
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
            {/* --- END outer screen --- */}
        
        </div>
      );
}