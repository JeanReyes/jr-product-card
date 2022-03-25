import { ReactElement } from 'react';

// PROPS
export interface ExternalProps {
    caseNumber?: string;
    role?: string
};

export interface AsyncProps {
    children?: ReactElement | ReactElement [] | string | boolean | null | undefined;
    caseNumber?: string;
    role?: string
}

export interface TimeMessageProps {
	msg: Message;
	index: number;
	array: Message [];
}


export interface Message {
    _id?: string
    message: string
    timestamp?: Date | string
    role: string
    user: string
    chatId?: string
    attachments?: FileList | File [] | Attachment [],
    sentiment: any
}

export interface GetData { 
    data: Message[] 
    loading: boolean
    error: string | undefined
    getAll: Function 
}

//FILES

export interface Attachment {
    name: string
    contentType: string
    content: string | unknown | Blob
}
