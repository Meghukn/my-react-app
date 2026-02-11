import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Posts from './pages/Posts'

function App() {zz
  return (
    <>
      
      <div className='cards'>
        <Posts />
        <Home />
      </div>
    </>
    
  );
}

export default App

// let count = 0;
// const countEl = document.getElementById("count");
// const incBtn = document.getElementById("inc-btn");

// incBtn.addEventListener("click", () => {
//   count++;
//   countEl.textContent = count;
// }); 
