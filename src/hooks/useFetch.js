import { useEffect, useState } from "react"

export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: false,
        error: null,
    })
    const getFecth = async() => {
        await setState({
            ...state,
            isLoading: true
        })
        const resp = await fetch(url)
        const data = await resp.json();
        await setState({
            data,
            isLoading: false,
            error: null,
            
        })
    } 
    useEffect(() => {
      getFecth()  
    }, [url])

    return {
        data: state.data,
        isLoading : state.isLoading,
        error: state.error
    }
}
