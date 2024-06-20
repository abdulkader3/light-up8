import React from 'react'
import { useNavigate } from 'react-router-dom'

const Naxtpage = () => {
    const navigate = useNavigate()
    const back = ()=>{
        navigate('/')
    }
  return (
    <>
    <div className=" w-full h-full ">
        <div className=" w-full h-[729px] bg-blue-500 flex justify-center items-center flex-col ">
            <h2 className=' text-[#fff] text-[150px] ' > The naxt page</h2>
            <button onClick={back} className='w-[150px] h-[70px] bg-white hover:rounded-[20px] transition-all hover:border-[5px] hover:bg-transparent active:scale-125 hover:text-white hover:font-bold hover:text-[25px]' > GO HOME</button>
        </div>
    </div>
      
    </>
  )
}

export default Naxtpage
