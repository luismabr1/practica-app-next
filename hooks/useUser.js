import {useRouter } from 'next/router';
import {useEffect, useState} from 'react';
import {onAuthStateChanged } from "../firebase/client";

export const USER_STATES = {
    LOGGED: true,
    NOT_KNOWN: undefined
  }

  export default function useUser(){
    const router = useRouter();
    const [user, setUser] = useState(USER_STATES.NOT_KNOWN);

    useEffect(() => {
        onAuthStateChanged(setUser);
      }, [])

      useEffect(()=>{
        user === !USER_STATES.LOGGED && router.push('/')
      }, [user])

      return user;
  }