
import React, { useState, useEffect } from 'react'
import axios from 'axios'


export default function useAxios() {

    const [responseValue, setresponseValue] = useState([])

    // const accessToken = localStorage.getItem("accessToken")

    useEffect(() => {
        async function sendGetRequest(){
        
                const resp = await axios.get('https://free-to-play-games-database.p.rapidapi.com/api/games', {
                    headers: {
                        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
                        'X-RapidAPI-Key': '0af1c00ec6msh6b42f6f7ab225a9p1fd200jsne3850b384960'
                    }
                });
                setresponseValue(resp.data)
                // games.map((elements)=>{
                //     setresponseValue(elements);
                // });
            }

        sendGetRequest();

    }, [])

    return [responseValue]


}





