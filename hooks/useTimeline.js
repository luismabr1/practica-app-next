import {useEffect, useState} from 'react';

const useTimeline = (prop) => {
    const comite = prop.comite
    
    useEffect(() =>{
        fetch(`https://practica-app-next.vercel.app/api/statuses/home_timeline/${comite}`)
            .then(res => res.json())
            .then(response => {
                const newTimeline = response
                return newTimeline
            })
        }, [])


}
export default useTimeline