import React,{ useContext, useEffect, useRef, useState } from 'react';
import { chatContext } from '../../../../tenants/chatContext';
import { Message } from './Message';
import { TimeMessageProps, Message as MessageInterface } from '../../../../interfaces';
import { DateChat } from '../../../../utils/date';

export const ChatMessages = () => {

	const scrollContainer = useRef<HTMLDivElement>(null);
	const messageScroll = useRef<HTMLDivElement[]>([]);
	const { data, msg } = useContext(chatContext);
	const [qtyMsgs, setQtyMsgs] = useState(0);

	useEffect(() => {
		if (data && data.length > 0) {
			console.log(`Número de mensajes -> ${qtyMsgs}`);
			if (scrollContainer.current !== null) {
				scrollContainer.current.scrollTop = scrollContainer.current.scrollHeight;
			}
		}
	}, [qtyMsgs, data]);


	useEffect(() => {
		if (qtyMsgs !== data.length) {
			setQtyMsgs(data.length);
		}
	}, [data, msg, qtyMsgs]); // revisar esto con la paginación


	const TimeMessage = ({msg, index, array}: TimeMessageProps ) => {
		const refElement = msg.timestamp as Date;
		const previusElement = array[index - 1] ? (array[index - 1].timestamp) as Date : undefined;
		
		return(
			<div className="container_message_time"> 
				<div className="container_message_text">
					{ new DateChat(refElement, previusElement).format('time_message') as string } 
				</div>
			</div>
		) 
	};

  	return ( <div className="container_message mb-4" ref={ scrollContainer }>
			{ data.map((msg: MessageInterface, i: number, array: MessageInterface []) => ( 
				<div ref={(element) => {
						element?.setAttribute('timestamp', msg.timestamp as string)
						return (messageScroll.current[i] as any) = element
					}}
					key={String(msg._id)}
				>
					<TimeMessage msg={msg} index={i} array={array}/>
					<Message msg={msg}/> 
				</div>
				))
			}
		</div>
	)
};
