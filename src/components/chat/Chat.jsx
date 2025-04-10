import { ActionIcon, Avatar, Input } from '@mantine/core'
import React from 'react'
import './chat.css'
import { MessageList } from 'react-chat-elements'
import { IoSend } from "react-icons/io5";
const Chat = () => {
    return (
        <div className='flex flex-col w-full'>
            <div className='flex justify-between bg-emerald-600 p-4'>
                <div className='flex items-center gap-3 text-white font-semibold'>
                    <Avatar bg={'#059669'} color={'white'} size={'md'} />
                    Asjad Abrar
                </div>
            </div>
            <div className='chat-background h-[calc(100dvh-140px)]'>
                <MessageList
                    className='message-list'
                    lockable={true}
                    toBottomHeight={'100%'}
                    dataSource={[
                        {
                            position: "left",
                            type: "text",
                            title: "Kursat",
                            text: "Give me a message list example !",
                        },
                        {
                            position: "right",
                            type: "text",
                            title: "Emre",
                            text: "That's all.",
                        },
                    ]}
                />
            </div>
            <div className='flex justify-between items-center'>
                <Input placeholder='write your message here' style={{width:'100%'}} radius={'md'} p={'md'}/>
                <ActionIcon variant='filled'>
                <IoSend />
                </ActionIcon>
            </div>
        </div>
    )
}

export default Chat