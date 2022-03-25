import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function useAccessToken() {

    const accessTokenUrl = `https://id.twitch.tv/oauth2/token?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_SECRET_KEY}&grant_type=client_credentials`

    useEffect(() => {
        
        const accessTokenExpiresIn=localStorage.getItem("expiresIn")
        console.log(accessTokenExpiresIn);///
        //check if access token expiry date exist in local storage 
        if(accessTokenExpiresIn==null){
            return fetchAcessToken()}



        //check if currentdatetime is greater than expired token time
        if(new Date()>accessTokenExpiresIn){ 
            return fetchAcessToken();
        }

        async function fetchAcessToken (){
            const response = await axios.post(accessTokenUrl)
            const { access_token, expires_in } = response.data
            console.log(expires_in);
            const minutes = (expires_in/1000)/60//minutes


            const currentDate = new Date();
            const tokenExpiryDate = new Date(currentDate.getTime() + minutes * 60000); 
            localStorage.setItem("expiresIn",tokenExpiryDate)
            localStorage.setItem("accessToken",access_token) 

            console.log(response);
        }
       
    }, [])
}
