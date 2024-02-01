import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { filterData,  apiUrl } from "./data";
import Loader from "./components/Loader";


const App = () => {
  const[courses,setCourses]=useState(null);
  const[loading,setLoading]=useState(true);
  const[category,setCategory]=useState(filterData[0].title);

  async function fetchData(){
    setLoading(true);
    try{
   let response=await fetch(apiUrl);
   let output= await response.json();
   //output store krna hoga courses wale variable me
   setCourses(output.data);
    }
    catch(error){
    toast.error("Network Issue");
    }
    setLoading(false);
  }
  //function call useEffect Hooks ke andr
  useEffect(()=>{
    fetchData();
  },[])

 return(
   <div className="flex flex-col min-h-screen  bg-bgDark2 ">
    <div>
      <Navbar/>
    </div>
    <div className=" ">
    <div>
      <Filter filterData={filterData}
        category={category}
        setCategory={setCategory}
      />
    </div>
    <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
     {
     loading ? (<Loader/>): (<Cards courses={courses} category={category}/>)
     }
    </div>
    </div>   
   </div>
 );
};

export default App;
