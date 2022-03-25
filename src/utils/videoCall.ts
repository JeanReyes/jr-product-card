import { io } from 'socket.io-client'

// interface ServerToClientEvents {
//     noArg: () => void;
//     basicEmit: (a: number, b: string, c: Buffer) => void;
//     withAck: (d: string, callback: (e: number) => void) => void;
//   }
  
//   interface ClientToServerEvents {
//     hello: () => void;
//   }
  
//   interface InterServerEvents {
//     ping: () => void;
//   }
  
//   interface SocketData {
//     name: string;
//     age: number;
//   }

// please note that the types are reversed
//const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io();

export class VideoCall {
    public static LOCAL_STREAM: any
    public static CURRENT_SOCKET: any
    constructor(
        private lbNumber: any,
        //private video: boolean = false,
        private audio: boolean = false
        //llegan todos los refs del html
    ){}

    async init(){
        await this.startLocalVideo()
    }

    async startLocalVideo(){
        console.log('startLocalVideo');
        if (VideoCall.LOCAL_STREAM) {
            return;
        }
    
        const devices = await navigator.mediaDevices.enumerateDevices();
        const params:string | URLSearchParams = new URLSearchParams(window.location.search);
        console.log(this.lbNumber);
        console.log("devices", devices)

        const device = devices.find( item => {
            const url = params?.get('device')?.toLowerCase()
            if (url) { 
                item.label.toLowerCase().includes(url)
            }
        });

        console.log("device", device)
        // if (this.video) 

        // const audio = true;
        let video

    
        video = {
            deviceId: device ? { exact: device.deviceId } : undefined,
            aspectRatio: {
                ideal: 1.333333
            }
        }
        
  
        const constraints = { audio: this.audio, video  };
        console.log('mediaConstraints', constraints);
    
        VideoCall.LOCAL_STREAM = await navigator.mediaDevices.getUserMedia(constraints);
        //videoLocal.srcObject = VideoCall.LOCAL_STREAM; // este pinta en el html
    }

    connectToWS = () => {
        console.log('connectToWS');
        //this.chageStatePhoneControls(false);
        const uri = 'wss://4125-190-114-32-200.ngrok.io/v1/facl/phone';
        // const uri = 'ws://localhost:8000/phone';
        
        VideoCall.CURRENT_SOCKET = io(uri) 
            .on('connect', () => {
                this.lbNumber.innerText = VideoCall.CURRENT_SOCKET.id; // ref de id de conversacion
                //this.chageStatePhoneControls(true);
            })
            // .on('begin-call', receiveBeginCall)
            // .on('incoming-call', receiveIncomingCall)
            // .on('rtc-peer-offer', receiveRTCOffer)
            // .on('rtc-peer-answer', receiveRTCAnswer)
            // .on('ice-new-candidate', receiveICENewCandidate)
            // .on('hang-up', hangUp)
            // .on('unknown-recipient', notAllowed)
            // .on('recipient-not-available', notAllowed)
            // .on('bad-request', notAllowed)
            // .on('error', handleError);
    };
    
    // chageStatePhoneControls = (active: boolean) => {
    //     const elements = document.querySelectorAll('.phone-controls');
    //     for (const element of elements) {
    //         // element.disabled = !active;
    //     }
    // };

}