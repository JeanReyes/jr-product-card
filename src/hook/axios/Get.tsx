import { useEffect, useState } from 'react';
import axios from 'axios';
import { GetData } from '../../interfaces/InterfaceChat';

export const useGet = (url:string): GetData  => {
    const [ data, seData ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState();

    
    const getAll = async (reload:boolean)=> {
        try {
            reload && setLoading(true);
            const response = await axios.get(url);
            setLoading(false);
            seData(response.data.data);
            return response.data.data;
        } catch (e) { 
            setError(e as any);
        } finally { }
    };
    
    useEffect(()=> {
        getAll(true);      
    }, [url]);

    return {
        data,
        loading,
        error,
        getAll
    }
}