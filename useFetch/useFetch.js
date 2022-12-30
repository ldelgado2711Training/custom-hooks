import { useEffect, useState } from "react"

export const useFetch = (url) => {
    const [state, SetState] = useState({
        data: null,
        isLoading: null,
        hasError: null,
    });

    const getFetch = async () => {
        SetState({
            ...state,
            isLoading:true,
        });

        const resp = await fetch(url);
        const data = await resp.json();

        SetState({
            data,
            isLoading: false,
            hasError: null,
        });
    }

    useEffect(() => {
        getFetch();
    }, [url]);

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    };
}
