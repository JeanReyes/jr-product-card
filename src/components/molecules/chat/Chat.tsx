import React from 'react'
import { useParams } from 'react-router-dom'
import { ChatAsync } from './chatAsync/ChatAsync'
import { ChatForm } from './chatAsync/ChatForm'
import { ChatMessages } from './chatAsync/ChatMessages'
import { ExternalProps } from '../../../interfaces'
import '../../../styles/index.scss';

export const Chat = ({ caseNumber, role }: ExternalProps) => {
	 
	const { sync } = useParams()
	
	return (
		<ChatAsync caseNumber={caseNumber} role={role}>
			<div className="card">
				<div className="container_header">
					<div className="container_title_video_call">	
						<p style={{ textAlign:'left' }}> Chat Asíncrono :).. </p>
					</div>
				</div>
				<div>
					<ChatMessages/>
					<ChatForm/>
				</div>
			</div>
		</ChatAsync>
	)
}
