import React, { useContext } from 'react';
// import { saveAs } from 'file-saver';
import { Attachment, Message as MessageInterface} from '../../../../interfaces';
import { chatContext } from '../../../../tenants/chatContext'
import { DateChat } from '../../../../utils/date';


export const Message = ({ msg }: {msg: MessageInterface} ) => {
	const { role: roleContext } = useContext(chatContext);
	const { message, timestamp, attachments, role, sentiment } = msg;
	

	const emojiMessage = (sentiment: string): any => {
		if(sentiment === 'neutral') {
			return '😐';
		} else if (sentiment === 'positive') {
			return '😀';
		} else if (sentiment === 'negative') {
			return '😡';
		}
	};

	const ComponentFile = ({ files }: { files: Attachment [] }) => {
		const download = (file: Attachment) => {
			const { contentType, content, name } = file;
			const base64 = `data:${contentType};base64,${content}`;
			// fetch(base64).then(async data => saveAs(await data.blob(), name ));
		};

		const nameFile = (name:string): string => {
			if (name.length > 20) {
				return name.slice(0, name.length - (name.length - 20))+'...';
			} else {
				return name;
			}
		};

		return <>
			{ files.map((file: Attachment, index: number) => (
				<div 
					className="container_file"
					key={index} >
					<div className="container_download">
						<i className="fa-solid fa-file"></i>
						<span>{nameFile(file.name)}</span>
						<i className="fa-solid fa-download" style={{float: 'right', cursor:'pointer'}} onClick={ ()=> download(file) }></i>
					</div>
				</div>))
			}
		</>
	};

	return ( <div> { (roleContext === role) ? 
              	<div className={'message_user'}>
                  	<div className={'message_user_text'}>
				 		<div style={{display: 'flex', justifyContent:'flex-end'}}>
							{ emojiMessage(sentiment) }
				  		</div>
                    	{ message }
                    	{(attachments && attachments.length > 0) && <ComponentFile files={attachments as Attachment[]}/>}
						<div className="container_hora_message">
							<span style={{float: 'right'}}>{ (new DateChat(timestamp as Date).format('hh:mm')) } hrs. </span> 
						</div>
                	</div>
              	</div> 
            : 	<div className={'message_agente'}>
					<div className={'message_agente_text'}>
						<div style={{display: 'flex', justifyContent:'flex-start'}}>
							{ emojiMessage(sentiment) }
						</div>
						{ message }
						{(attachments && attachments.length > 0) && <ComponentFile files={attachments as Attachment[]}/>}
						<div className="container_hora_message">
							<span style={{float: 'right'}}>{ (new DateChat(timestamp as Date).format('hh:mm')) } hrs. </span> 
						</div>
					</div>
              	</div>
			}
		</div>
	)
}
