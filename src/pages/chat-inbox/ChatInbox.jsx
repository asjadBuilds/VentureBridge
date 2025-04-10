import React from 'react'
import { Outlet } from 'react-router-dom'
import { ChatList } from 'react-chat-elements'
import { Input } from '@mantine/core'
const ChatInbox = () => {
    return (
        <div className='flex w-full h-screen'>
            <div className='flex flex-col bg-slate-100'>
                <div>
                    <Input placeholder='Search Chats' p={'lg'} />
                </div>
                <ChatList
                    className='chat-list'
                    dataSource={[
                        {
                            avatar: 'https://avatars.githubusercontent.com/u/80540635?v=4',
                            alt: 'kursat_avatar',
                            title: 'Kursat',
                            subtitle: "Why don't we go to the No Way Home movie this weekend ?",
                            date: new Date(),
                            unread: 3,
                        }
                    ]} />
            </div>
            <div className='w-full'>
                <Outlet />
            </div>
        </div>
    )
}

export default ChatInbox