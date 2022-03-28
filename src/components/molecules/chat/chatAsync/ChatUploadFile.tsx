import React,{ useContext } from 'react';
import { formContext } from '../../../../tenants/chatContext';

export const ChatUploadFile = () => {
const { message, setMessage } = useContext(formContext);
console.log(" message.attachments",  message.attachments);


const removeFile = (index: number) => {
	let array = message.attachments;
	array.splice(index, 1);
	setMessage({
		...message,
		attachments: array
	});
};

return (
	<> 
		{ message.attachments.map((file:File, index: number)=> (
			<div key={ index } className="attachment_container">
				<p className='remove_text_file' key={ index }>
					{ file.name }
				</p>
				<img 
					src= "https://customer.falabella.com/prd/cust/ctcm/ftc/corp/virtual-assistant/front/assets/images/close-icon.svg" 
					className= 'remove_file' 
					onClick= {() => removeFile(index)} 
					alt= ""
				/>
			</div>
			))
		}
	</>
	)
};
