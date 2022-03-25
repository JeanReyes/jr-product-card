import React from 'react'
import { Routes,Route } from 'react-router-dom';
import { Chat } from '../components/molecules/chat/Chat';
import { Orders } from '../components/molecules/orders/Orders';
import { CasesChat } from '../components/molecules/cases-chat/CasesChat';
import { Header } from '../components/header/Header';


export const Dashboard = () => {
    return ( <>
        <Header></Header>
        <div className="container">
            <Routes>
                <Route path="/portal" element={<Orders />} />  
                <Route path="/cases-chat" element={<CasesChat />} />  
                <Route path="/cases-chat/:role" element={<CasesChat />} />  
                <Route path="/chat/:role/:number_case" element={<Chat/>}/>
                <Route path="/chat/:role/:number_case/:sync" element={<Chat/>}/> 
            </Routes>
        </div>
    </>)
};
