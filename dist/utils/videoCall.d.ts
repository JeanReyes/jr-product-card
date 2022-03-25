export declare class VideoCall {
    private lbNumber;
    private audio;
    static LOCAL_STREAM: any;
    static CURRENT_SOCKET: any;
    constructor(lbNumber: any, audio?: boolean);
    init(): Promise<void>;
    startLocalVideo(): Promise<void>;
    connectToWS: () => void;
}
