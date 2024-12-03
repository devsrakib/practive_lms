import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as SecureStore from 'expo-secure-store';
import { Redirect } from 'expo-router';
const index = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(
         () =>{

            const checkLogin = async() =>{
                setLoading(true)
                const token = SecureStore.getItem('accessToken')
                if(token){
                    setLoggedIn(true)
                }
                setLoading(false)
            }
            checkLogin()
    }, [])
  return (
    <>
      {
        loading ? <></> : <Redirect href={!loggedIn ? '/(routes)/onboarding' : '/(tabs)'} />
      }
    </>
  )
}

export default index