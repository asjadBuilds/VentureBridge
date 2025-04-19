import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { ChatList } from 'react-chat-elements'
import { Input } from '@mantine/core'
import axios from 'axios'
import { CONFIG } from '../../../config'
import { useUserDetails } from '../../contexts/UserDetailContext'
const ChatInbox = () => {
    const [conversations, setConversations] = useState([]);
    const [activeConversation, setActiveConversation] = useState('')
    const {details} = useUserDetails();
    const navigate = useNavigate();
    useEffect(()=>{
        fetchUserConversations()
    },[])
    const fetchUserConversations = async()=>{
        try {
            const {data} = await axios.get(CONFIG.getUserConversations,{withCredentials:true});
            if(data.success){
                const formatted = data.data.map((conv) => ({
                    _id:conv._id,
                    avatar: conv.receiver?.avatar || '', // optional
                    alt: conv.receiver?.username,
                    title: conv.receiver?.username,
                    subtitle: conv.lastMessage?.content || 'No messages yet',
                    date: new Date(conv.updatedAt),
                    unread: 0, // or set count
                    conversationId: conv._id,
                  }));
            
                  setConversations(formatted);
            }
        } catch (error) {
            console.log(error)
        }
    }
    const openConversationHandler = async(conversationId)=>{
        // setActiveConversation(conversationId)
        try {
           const {data} = await axios.get(CONFIG.getMessagesByConversation+`/${conversationId}`,{withCredentials:true})
           if(data?.success){
            navigate(`/inbox/${details._id}/chat/${conversationId}`)
           }
        } catch (error) {
            console.log(error)
        }
        console.log(conversationId)
    }
    return (
        <div className='flex w-full h-screen'>
            <div className='flex flex-col bg-slate-100'>
                <div>
                    <Input placeholder='Search Chats' p={'lg'} />
                </div>
                
                <ChatList
                
                    className={`chat-list`}
                    onClick={(item)=>openConversationHandler(item._id)}
                    dataSource={conversations} />
            </div>
            <div className='w-full'>
                <Outlet/>
            </div>
        </div>
    )
}

export default ChatInbox