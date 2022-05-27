//Hook para el fetch de la data de la api
import {useCallback, useEffect, useState} from "react";
import { API } from "../services/api";

export const useFetch = ({url}) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const fetchData = useCallback(async () => {
        try {
            const response = await API.get(url);
            setData(response.data);
        } catch (error) {
            setError(error);
        }
    }, [url]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return {data, error, fetchData};
}