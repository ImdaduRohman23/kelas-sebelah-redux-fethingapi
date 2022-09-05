import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
    const {dataReducer} = useSelector(hehe => hehe);
    console.log(dataReducer)
    return (
        <div>
            <h1>HOME</h1>
        </div>
    )
}

export default Home
