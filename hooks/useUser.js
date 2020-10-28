import {useEffect, useState} from 'react';
import {onAuthStateChanged } from "../firebase/client";

export const USER_STATES = {
    LOGGED: true,
    NOT_KNOWN: undefined
  }

  export default function useUser(){
    const [user, setUser] = useState(USER_STATES.NOT_KNOWN);

    useEffect(() => {
        onAuthStateChanged(setUser);
      }, []);

      return user;
  }