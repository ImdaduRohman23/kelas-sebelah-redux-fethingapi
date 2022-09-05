// import axios from 'axios';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { getData } from '../redux/action/dataAction';
// import TYPES from '../redux/types';

const Home = () => {
    const data = useSelector(a => a)

    const dispatch = useDispatch();

    useEffect(() => {
        // axios
        //     .get('https://reqres.in/api/users?page=2')
        //     .then(res => console.log(res))
        //     .catch(err => err)

        // getData()

        dispatch(getData())
    }, []);

    //DIPINDAH KE ACTION
    // const getData = () => {
    //     axios
    //         .get('https://reqres.in/api/users?page=2')
    //         .then(res => {
    //             dispatch({
    //                 type: TYPES.FETCHING_DATA,
    //                 payload: res.data.data,
    //             })
    //         })
    //         .catch(err => err)
    // }

    console.log(data)


    return (
        <div>
            <h1>HOME</h1>
            {
                data.dataReducer.data.map((a) => (
                    <div >
                        <p>{a.first_name}</p>
                        <img src={a.avatar} alt="" />
                    </div>
                ))
            }
        </div>
    )
}

export default Home
