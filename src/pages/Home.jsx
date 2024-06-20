import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const goNext = ()=>{
    navigate('/Naxtpage')
  }
  
  return (
    <>
    <div className=" w-full h-full ">
      <div className=" w-full h-[729px] bg-green-400 flex justify-center items-center gap-[100px] ">
        <h1 className=" text-[150px] text-white ">HOME</h1>
        <button onClick={goNext} className=' w-[150px] h-[70px] bg-white hover:rounded-[20px] transition-all hover:border-[5px] hover:bg-transparent active:scale-125 hover:text-white hover:font-bold hover:text-[25px] ' > GO Next </button>
      </div>
    </div>
      
    </>
  )
}

export default Home
