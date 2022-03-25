import { useState } from 'react';
import axios from 'axios';
import { Message } from '../../interfaces/InterfaceChat';

export const usePost = (url: string) => {
    const [ data, seData ] = useState(null);
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(null);
    
    const post = async (body: Message) => {
        try {
            setLoading(true);
            const response = await axios.post(url, body);
            seData(response.data);
            return response.data;

        } catch (e) {
            setError(e as any);
        } finally {}
    };


    const postFile = async (body: Message) => {
        let formData = new FormData();
        for (let i in body) {
            if ( i === 'attachments') {
                for (let attach in body[i]){
                    formData.append(i, (body[i] as any)[attach]);            
                }
            } else {
                formData.append(i, (body as any)[i]);
            }        
        };

        try {
            const response = await axios.post(url, formData, {
                headers: {
                    'content-Type': 'multipart/form-data'
                }
            });
            seData(response.data);
            return response.data;

        } catch (e) {
            setError(e as any);
        } finally {
            setLoading(false);
        }
    };

    // const toBase64 = (file: Blob) => new Promise((resolve, reject) => {
    //     const reader = new FileReader();
    //     reader.readAsDataURL(file);
    //     reader.onload = () => {
    //         let encoded = reader.result !== null ? reader.result.toString().replace(/^data:(.*,)?/, '') : null
    //         if (encoded && (encoded.length % 4) > 0) {
    //           encoded += '='.repeat(4 - (encoded.length % 4));
    //         }
    //         resolve(encoded);
    //     }
    //     reader.onerror = (error) => {
    //         reject(error);
    //     }
    // });

    return {
       post,
       postFile,
       data,
       loading,
       error
    }
};