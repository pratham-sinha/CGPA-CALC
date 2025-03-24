import React from 'react'
import DataForm from './components/DataForm'

function App() {
  return (
  <div className='relative min-h-screen bg-black '>

  

<div className="mt-4 absolute inset-0 bg-black before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(gray_-1px,transparent_1px)] before:bg-[size:20px_20px]">
      <h1 className="text-white text-center text-3xl width-20ch  text-nowrap overflow-hidden py-4 font-mono font-semibold">
      <div className="bg-gradient-to-tl from-slate-800 via-violet-500 to-zinc-400 bg-clip-text text-transparent">CGPA CALCULATOR</div>

 </h1>
 
 <DataForm/>


</div>

</div>
  )
}

export default App
