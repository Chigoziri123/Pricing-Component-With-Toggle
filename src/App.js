import { useState } from "react";
import bgbottom from "./images/bg-bottom.svg"
import bgtop from "./images/bg-top.svg"

function App() {
  const [monthly, setMonthly] = useState(false)
  return (
    <>
      <div class="absolute top-0 right-0 -z-10">
        <img class="w-full max-w-full" src={bgtop} alt="bgtop"/>
      </div>
      <section class="p-5 lg:flex lg:flex-col items-center justify-center lg:h-screen">
        <h1 class="text-center text-4xl mb-8 text-slate-700">Our Pricing</h1>
        
        {/* Toggle button */}
        <div class="toggle lg:mb-10">
          <label class="name">Annually</label>
          <input 
          type="checkbox" class="checkbox" id="checkbox" checked={monthly} onChange={() =>setMonthly(!monthly)}/>
          <label for="checkbox"class="label">
          <div class="ball"></div>
          </label>
          <label class="name">Monthly</label>
        </div>
        
        <div class="flex flex-wrap flex-col text-center justify-center gap-8 max-w-6xl mx-auto lg:gap-0 lg:flex-row lg:flex-nowrap lg:w-full">
         
          {/* First Card */}
          <article class="p-8 rounded bg-white shadow lg:w-full">
            <h2 class="text-slate-800 text-xl mb-5">Basic</h2>
            {monthly && <h3 class="flex justify-center items-center text-slate-700 text-5xl"><span class="text-3xl mr-3">$</span>19.99</h3>}
            {!monthly && <h3 class="flex justify-center items-center text-slate-700 text-5xl"><span class="text-3xl mr-3">$</span>199.99</h3>}
            <ul class="my-8">
              <li class="pt-2 py-3 text-slate-600 border-t border-slate-300">500 GB Storage</li>
              <li class="pt-2 py-3 text-slate-600 border-t border-slate-300">2 Users Allowed</li>
              <li class="pt-2 py-3 text-slate-600 border-y border-slate-300">Send up to 3 GB</li>  
            </ul>
            <button class="linear-gradient btn text-white py-2 w-full rounded-lg shadow border-2 hover:border-2 uppercase cursor-pointer">Learn More</button>
          </article>
           
            {/* Middle Card */}
          <article class="linear-gradient p-8 rounded shadow lg:w-full lg:scale-110">
            <h2 class="text-slate-800 text-xl text-white mb-5">Professional</h2>
            {monthly && <h3 class="flex justify-center text-white items-center text-white text-5xl"><span class="text-3xl mr-3">$</span>24.99</h3>}
            {!monthly && <h3 class="flex justify-center text-white items-center text-white text-5xl"><span class="text-3xl mr-3">$</span>249.99</h3>}
            <ul class=" my-8"> 
              <li class="pt-2 py-3 text-white border-t border-slate-300">1 TB Storage</li>
              <li class="pt-2 py-3 text-white border-t border-slate-300">5 Users Allowed</li>
              <li class="pt-2 py-3 text-white border-y border-slate-300">Send up to 10 GB</li>
            </ul>
            <button class="bg-white text-slate-800 py-2 w-full rounded-lg shadow border-2 border-white uppercase cursor-pointer hover:bg-transparent hover:text-white transition-all duration-200">Learn More</button>
          </article>
          
          {/* Last Card */}
          <article class="p-8 rounded bg-white shadow lg:w-full">
            <h2 class="text-slate-800 text-xl mb-5">Master</h2>
            {monthly && <h3 class="flex justify-center items-center text-slate-700 text-5xl"><span class="text-3xl pr-3">$</span>39.99</h3>}
            {!monthly && <h3 class="flex justify-center items-center text-slate-700 text-5xl"><span class="text-3xl pr-3">$</span>399.99</h3>}
            <ul class="my-8">
              <li class="pt-2 py-3 text-slate-600 border-t border-slate-300">2 TB Storage</li>
              <li class="pt-2 py-3 text-slate-600 border-t border-slate-300">10 Users Allowed</li>
              <li class="pt-2 py-3 text-slate-600 border-y border-slate-300">Send up to 20 GB</li>
            </ul>
            <button class="linear-gradient btn text-white py-2 w-full rounded-lg shadow border-2 hover:border-2 uppercase cursor-pointer">Learn More</button>
          </article>
        </div>
        
      </section>
      <br/>
      <div class="attribution">Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. Coded by <a href="www.github.com/Chigoziri123">Chigoziri Samuel Anuna</a>.</div>
      <div class="absolute bottom-0 left-0 -z-10">
        <img class="w-full max-w-full " src={bgbottom} alt="bgtop"/>
      </div>
    </>
  );
}

export default App;
