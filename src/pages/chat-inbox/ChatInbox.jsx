import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { ChatList } from 'react-chat-elements'
import { Input } from '@mantine/core'
import axios from 'axios'
import { CONFIG } from '../../../config'
import { useUserDetails } from '../../contexts/UserDetailContext'
import { useReceiverChat } from '../../contexts/ReceiverChatContext'
const ChatInbox = () => {
    const [conversations, setConversations] = useState([]);
    const [activeConversation, setActiveConversation] = useState('')
    const {details} = useUserDetails();
    const {setRecDetails} = useReceiverChat();
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
                    receiverId: conv.receiver?._id
                  }));
            
                  setConversations(formatted);
            }
        } catch (error) {
            console.log(error)
        }
    }
    const openConversationHandler = async(conversationId, receiverId)=>{
        // setActiveConversation(conversationId)
        try {
            const {data} = await axios.post(CONFIG.getSingleConversation,{receiverId},{
              withCredentials:true
            })
            if(data.success){
                setRecDetails(data?.data?.receiverField)
            }
          } catch (error) {
            console.log(error)
          }
        try {
           const {data} = await axios.get(CONFIG.getMessagesByConversation+`/${conversationId}`,{withCredentials:true})
           if(data?.success){
            navigate(`/inbox/${details._id}/chat/${conversationId}`)
           }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='flex w-full h-screen'>
            <div className='flex flex-col bg-slate-100'>
                <div>
                    <Input placeholder='Search Chats' p={'lg'} />
                </div>
                
                <ChatList
                
                    className={`chat-list`}
                    onClick={(item)=>{openConversationHandler(item._id,item?.receiverId)
                    }}
                    dataSource={conversations} />
            </div>
            <div className='w-full'>
                <Outlet/>
            </div>
        </div>
    )
}

export default ChatInbox