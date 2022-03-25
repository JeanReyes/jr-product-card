import React, { useState, useContext, useRef } from 'react';
import { chatContext, formContext } from '../../../../tenants/chatContext';
import { usePost } from '../../../../hook/axios/Post';
import { ChatFormFile } from './ChatFormFile';
import { ChatUploadFile } from './ChatUploadFile';
import { Message } from '../../../../interfaces';

export const ChatForm = () => {
    const { URL, handleMessage, role } = useContext(chatContext);
    const { post, postFile } = usePost(URL); // colocar URL

    const initialMessage: Message = {
        message: '',
        attachments: [],
        user:'hosting',
        role,
        sentiment: {}
    };
    const [ message, setMessage ] = useState(initialMessage);
    const [ heightTextArea, setheightTextArea ] = useState(36);
    const refTextArea = useRef<HTMLTextAreaElement>(null);

    const handleInput = ({target}: React.ChangeEvent<HTMLTextAreaElement>) => {
        setheightTextArea(target.scrollHeight);
        setMessage({
            ...message,
            message: target.value
        });
    };

    const handleFile = (file: FileList): void => { // se ejecuta cada vez que se agrega un file
        const { attachments } = message;
        if (attachments) {
            setMessage({
                ...message,
                attachments: [...attachments as any, ...file as any] 
            });
        }
    };

    const handleSubmit = (e?: React.FormEvent<HTMLFormElement>) => { 

        if (e) e.preventDefault();
        
        if (message.message.length > 0 && (message.attachments !== undefined && message.attachments.length > 0)) {
            postFile(message)
            .then((data)=>{
                handleMessage(data);
                setMessage(initialMessage);
            });
        
        } else if (message.message.length > 0) {
            post(message)
            .then((data)=>{
                handleMessage(data);
                setMessage(initialMessage);
            });
        } else {
            postFile(message)
            .then((data)=>{
                handleMessage(data);
                setMessage(initialMessage);
            });
        }
        setheightTextArea(36);
    };

    const enterSubmit = (e: React.KeyboardEvent<HTMLTextAreaElement>): Boolean | void => {    
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit();
            return false;
        }
    };

    return (
        // ordenar el formulario File con composicion de componentes
        <formContext.Provider value={{   
            message,
            setMessage
        }}>
            <form onSubmit={handleSubmit}>
                <div className="container_form">
                    <ChatFormFile handleFile={handleFile} />
                    <div className="input-group">
                        <textarea 
                            ref= { refTextArea }
                            className="form-control"
                            value={message.message}
                            placeholder="Escribe un mensaje..."
                            onChange={ handleInput }
                            onKeyPress= { enterSubmit }
                            style={{height: heightTextArea, maxHeight:'132px'}}
                        />
                        <button className="btn btn-outline-secondary"><i className="fa-solid fa-paper-plane"></i></button>
                    </div>
                </div>
                <ChatUploadFile />  
            </form>
        </formContext.Provider>
    )
}
