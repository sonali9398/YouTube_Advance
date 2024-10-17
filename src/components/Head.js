import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';

const Head = () =>{

    const dispatch = useDispatch();

    const toggleHandler = () =>{
        dispatch(toggleMenu());
    }
    return(
        <div className='grid grid-flow-col p-5 m-2 shadow-lg'>

            <div className='flex col-span-1'>
                <img className='h-8 cursor-pointer' onClick={() => toggleHandler()}
                    src='data:image/jpeg;base64,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' alt='menu'/>
                
                <img className='h-8 mx-2' 
                    src='https://yt3.googleusercontent.com/584JjRp5QMuKbyduM_2k5RlXFqHJtQ0qLIPZpwbUjMJmgzZngHcam5JMuZQxyzGMV5ljwJRl0Q=s900-c-k-c0x00ffffff-no-rj' alt='yt'/>
            </div>

            <div className='col-span-10 text-center px-10 '>
                <input className='w-1/2 border-1 border-gray-500 border p-1 rounded-l-full' type='text'/>
                <button className='border-gray-500 border-1 p-1 border rounded-r-full bg-gray-300'>Search</button>
            </div>

                <div className='col-span-1'>
                    <img className='h-8' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s' alt='user'/>
                </div>
           
        </div>
    )
}

export default Head