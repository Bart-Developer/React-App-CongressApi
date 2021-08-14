import { useState, useEffect } from "react";
import { getData } from "../services/getData";

export const paintTableHook = ( /* acá senators o houses */) => {

    const [state, setState] = useState({
        data: [],
        loading: true,
    });

    //avoid the warnings in console
    console.log(state, setState);

    useEffect(() => {

        getData(/*acá senators or houses */ )
            .then(congressman => {
                setState({
                    data: congressman,
                    loading: false,
                });
            })

    }, [ /* acá senators o houses */])

    return state;
}