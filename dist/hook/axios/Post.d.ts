import { Message } from '../../interfaces/InterfaceChat';
export declare const usePost: (url: string) => {
    post: (body: Message) => Promise<any>;
    postFile: (body: Message) => Promise<any>;
    data: any;
    loading: boolean;
    error: any;
};
