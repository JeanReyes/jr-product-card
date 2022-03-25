import React,{ BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from './Dashboard';
import '../styles/index.scss';


export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/*" element={
                <Dashboard/> //tablero
            }/>
        </Routes>
    </BrowserRouter>
  )
};
