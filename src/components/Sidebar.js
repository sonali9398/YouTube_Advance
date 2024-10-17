import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () =>{

    const isMenuOpen = useSelector(store => store.app.isMenuOpen);

    // early return 
    if (!isMenuOpen) return null;
    return(
        <div className='p-5 shadow-lg w-48'>

                <ul>
                    <li>Music</li>
                    <li>Sports</li>
                    <li>Movie</li>
                    <li>Games</li>
                    <li>Cartoons</li>
                    <li>Anime</li>
                </ul>
            
            <h1 className='font-bold'>Subscriptions</h1>
                <ul>
                    <li>Music</li>
                    <li>Sports</li>
                    <li>Movie</li>
                    <li>Games</li>
                    <li>Cartoons</li>
                    <li>Anime</li>
                </ul>

                <h1 className='font-bold pt-5'>Watch Later</h1>
                <ul>
                    <li>Music</li>
                    <li>Sports</li>
                    <li>Movie</li>
                    <li>Games</li>
                    <li>Cartoons</li>
                    <li>Anime</li>
                </ul>    
        
        </div>
    )
}

export default Sidebar