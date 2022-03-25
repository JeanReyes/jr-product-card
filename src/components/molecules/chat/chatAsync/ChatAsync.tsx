import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGet } from '../../../../hook/axios/Get';
import { chatContext } from '../../../../tenants/chatContext';
import { AsyncProps, Message } from '../../../../interfaces';

export const ChatAsync = ({ children, caseNumber, role }: AsyncProps) => {
    
    const { number_case } = useParams();
    caseNumber = caseNumber ? caseNumber : number_case;
    const URL = `http://localhost:8000/v1/facl/chats/${caseNumber}/messages`;
    const [ msg, setMsg ] = useState({} as Message);
    const { data, loading, error , getAll } = useGet(URL);

    const getAllData = async () => {
        await getAll(false);
    };

    useEffect(()=>{
        setInterval(()=>{
            getAllData();
        },10000);
    },[]);  // eslint-disable-line react-hooks/exhaustive-deps

    const handleMessage = (message: Message) => {
        const reload = false
        if (message) {
            getAll(reload)
            .then(()=>{
                setMsg(message) 
            })
        }
    };

    if (loading) {
        return  <p>...Loading</p>
    };

    if (error) {
        <p>{ error }</p>
    };

    if (!data) {
        return null
    };

    return (
        <chatContext.Provider value={{
            data,
            URL,
            msg,
            role,
            handleMessage
        }}>
            {children}
        </chatContext.Provider>
    )
}
