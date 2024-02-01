import React from 'react';
import { FcLike,FcLikePlaceholder } from 'react-icons/fc';
import {toast} from "react-toastify"; 

const Card = (props) => {
  let course=props.course;
  let likedCourses=props.likedCourses;
  let setLikedCourses=props.setLikedCourses;

  function clickHandler(){
   //logic
   if(likedCourses.includes(course.id)){
    //phle se like hua para hai
    setLikedCourses((prev)=>prev.filter((cid)=>(cid !==course.id)));
    toast.warning("Liked Removed");
   }
    else{
      //phle se like nhi hai
      if(likedCourses.length===0){
        setLikedCourses([course.id]);
      }
      else{
        //phle se kch insert hua pada hai
        setLikedCourses((prev)=>[...prev,course.id]);
       
      }
      toast.success("Liked successfully");

    }

  }
  return (
    <div className='w-[300px] bg-bgDark bg-opacity-80 overflow-hidden rounded-md'>

      <div className='relative'>
        <img src={course.image.url} alt="" />

        <div className='w-[35px] h-[35px] absolute  bg-white rounded-full right-2 bottom-[-12px] grid place-items-center' >
        <button onClick={clickHandler}>
         {
          likedCourses.includes(course.id) ? (<FcLike fontSize= "1.75rem" />):(<FcLikePlaceholder fontSize="1.75rem"/>)
         }
        </button>
       </div>
       </div>

       <div className='p-4'>
          <p className='text-white font-semibold text-lg '>{course.title}</p>
          <p className='mt-2 text-white'>
            {
              course.description.length>100 ? (course.description.substr(0,100)) + "...":
              (course.description)
            }
          </p>
        </div>
    </div>
  )
}

export default Card;

