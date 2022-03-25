
import React, { useState, useEffect } from 'react'
import axios from 'axios'


export default function useAxios(url) {

    const [responseValue, setresponseValue] = useState([])
    

    const accessToken = localStorage.getItem("accessToken")

    useEffect(() => {
    
        if(accessToken==null){
            return;
        }
        const headers = {

            "Client-ID": process.env.REACT_APP_CLIENT_ID,
            "Authorization": `Bearer ${accessToken}`
        }

        axios.post(url, {}, {
            headers: headers
        })
            .then((response) => {
                setresponseValue(response.data)
            })
            .catch((error) => {
                console.log(error);
            })

    },[accessToken])
    
    return [responseValue]


}





