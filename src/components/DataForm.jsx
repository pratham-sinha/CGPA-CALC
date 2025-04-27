import { div, image, img } from "framer-motion/client";
import { useState } from "react";

function DataForm() {
  const [floorValues, setFloorValues] = useState({
    floor1: "",
    floor2: "",
    floor3: "",
    floor4: "",
    floor5: "",
    floor6: "",
    floor7: "",
    floor8: "",
  });

  const [showCGPA, setShowCgpa] = useState(false);

  
  const credits = [17.5, 24, 21, 21, 24, 22, 20, 8];

  // Function to handle input changes
  const handleChange = (e) => {
    setFloorValues({
      ...floorValues,
      [e.target.name]: e.target.value,
    });
    if(weightedAverage.toFixed(2)>100){
      window.location.reload();
    }
  };


  const validNumbers = Object.values(floorValues).map(Number);
  
 

  let weightedSum = 0;
  let totalCredits = 0;

  

  validNumbers.forEach((value, index) => {
    
    if (!isNaN(value) && value !== 0 ) {
      weightedSum += value * credits[index];
      totalCredits += credits[index];
    }
   
  });


  const weightedAverage = (totalCredits > 0)  ? weightedSum / totalCredits : 0;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  //handles reset too(when showCGPA=true)
  const handleShow=()=>{
    setShowCgpa(!showCGPA)
    if(showCGPA || weightedAverage.toFixed(2)>100){
      window.location.reload();
    }
  }


  return (
    <div className=" mt-5 p-4 max-w-2xl mx-auto  shadow-lg absolute inset-0 rounded-lg backdrop-blur-1px">
      <h2 className="mt-6 text-white text-lg font-extralight
     font-mono mb-4 flex justify-center">Enter Respective SGPA(s)</h2>
      <form onSubmit={handleSubmit} className="space-y-3 flex flex-wrap gap-5 justify-center items-center">
        {Object.keys(floorValues).map((floor, index) => (
          <div key={floor}>
            <label className=" text-white block font-semibold font-mono">
              SEM {index+1} (Credit:{credits[index]})
            </label>
            <input
              type="text"
              name={floor}
              
              value={floorValues[floor]}
              onChange={handleChange}
              placeholder={`Enter SGPA Of SEM ${index+1}`}
              className="w-full border-b-2 border-black-400 focus:outline-none p-2 font-semibold font-mono text-white"
             
            />
          </div>
        ))}
        
        </form>

      <div className="flex justify-center items-center mt-3 bg-gradient-to-tl from-slate-800 via-violet-500 to-zinc-400 bg-clip-text text-transparent">
      
      <button
          type="submit"
          onClick={handleShow}
          className="border-amber-100 w-30 h-15bg-gradient-to-tl from-slate-800 via-violet-500 to-zinc-400 bg-clip-text text-transparent border-4 font-semibold font-mono p-2 rounded-md hover:bg-blue-600 cursor-pointer"
        >

          
          
        
          {showCGPA ? "RESET": "Show CGPA"}
        </button>
        </div>

         <div className="flex justify-center items-center ">
        {showCGPA && (
          <div className="text-white text-lg  font-semibold font-mono mt-2">
             
            Your Cumulative GPA:{" "}
            <span className="text-600">{weightedAverage.toFixed(2)}</span>
          </div>
         
  
        )}




        </div>


   
       <div className="flex justify-center mt-9">
       <span className="font-mono font-light ">Made by <a href="https://www.linkedin.com/in/prathamsinha/"  target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-500 underline hover:text-blue-700">Pratham Sinha</a> </span>
        </div>
     
    
  
    </div>
  );
}

export default DataForm;
