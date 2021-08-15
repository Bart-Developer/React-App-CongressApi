import { useEffect, useState } from 'react'
import { getData } from '../services/getData'


export const useFetchFilter = (typeFetch) => {
 
    const  [ state, setState ] = useState({
        data: []
    })

    useEffect(() => {

        getData(typeFetch).then(congressman => {
                setState({
                    data: congressman,
                });
            })

    }, [typeFetch])

    return state;

}
