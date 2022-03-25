import React,{ useRef } from 'react';

export const ChatFormFile = ({ handleFile }: { handleFile: ( file: FileList ) => void }) => {
    const file = useRef({} as HTMLInputElement);

    const viewFiles = () => {
        if (file.current !== null && handleFile) {
            handleFile(file.current.files as FileList);
        }
    };
    
    return (
        <div className="container_form_file" onChange={ viewFiles }>
            <label htmlFor="file-input" style={{cursor:'pointer'}}>
                <i  className="fa-solid fa-paperclip"></i>
            </label>
            {/* accept=".jpg,.png,.pdf"  */}
            <input id="file-input" multiple type="file"  ref={ file } style={{display: 'none'}}/>
        </div>
    )
};
