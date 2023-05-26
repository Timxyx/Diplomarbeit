import React from 'react'
import IMessage from './Message.interface';
import styles from './Message.module.scss'

const Message = (props: IMessage) => {
    const {message, isSender,...rest} = props
    let time = new Date(message.created_on);
    let formattedTime = time.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: false});
  return (
    <div {...rest} className={`${isSender ? styles.sender : styles.recipient } mb-8 rounded-2xl pl-4 pt-2 pb-3 pr-8 max-w-[500px] `} >
        <p className='text-5 font-bold'>{message.username}</p>
        <h3 className='break-word text-2xl'>{message.msg}</h3>
        <p className='text-5 font-bold'>{formattedTime}</p>
    </div>
  )
}

export default Message
