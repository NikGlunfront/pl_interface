import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { setPageTitle, setSearchAvailable } from "../../store/slices/pageSlice/pageSlice";
import PlDateMessageGroup from "../../components/Chat/PlDateMessageGroup/PlDateMessageGroup";
import PiMessage from "../../components/Chat/PlMessage/PlMessage";
import ChatInputArea from "../../components/Chat/ChatUI/ChatInputArea/ChatInputArea";
import { useScroll } from "../../hooks/useScroll";
import ds1 from '../../assets/img/promos/item1.png';
import ds2 from '../../assets/img/promos/item2.png';
import ds3 from '../../assets/img/promos/item3.png';
import Fancybox from "../../components/UI/Fancybox/Fancybox";



const ChatPage = ({
    
}) => {
    const dispatch = useDispatch()
    const { brandId, brandName, promoId } = useSelector(state => state.pageMeta.chatMeta)
    const { scrollBottom } = useScroll()
    const messages = [
        {msg_id: 1, from: brandName, timestamp: '14:39', text: 'Lorem ipsum dolor sit amet consectetur', is_read: true},
        {msg_id: 2, from: 'user', timestamp: '15:39', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam cum deleniti totam suscipit cupiditate excepturi in voluptas veniam! Similique ullam eius error quaerat tempora sint voluptatibus necessitatibus unde? A, suscipit?', is_read: true},
        {msg_id: 3, from: 'user', timestamp: '14:55', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam cum deleniti totam suscipit cupiditate excepturi', is_read: true},
        {msg_id: 4, image: ds1, from: brandName, timestamp: '16:01', text: 'Lorem ipsum dolor sit amet consectetur', is_read: true},
        {msg_id: 5, from: brandName, timestamp: '16:02', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam cum deleniti totam suscipit cupiditate excepturi in voluptas veniam! Similique ullam eius error quaerat tempora sint voluptatibus necessitatibus unde? A, suscipit?', is_read: true},
        {msg_id: 6, from: 'user', timestamp: '16:03', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam cum deleniti totam suscipit cupiditate excepturi', is_read: true},
        {msg_id: 7, from: brandName, timestamp: '16:04', text: 'Lorem ipsum dolor sit amet consectetur', is_read: true},
        {msg_id: 8, from: brandName, timestamp: '16:05', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam cum deleniti totam suscipit cupiditate excepturi in voluptas veniam! Similique ullam eius error quaerat tempora sint voluptatibus necessitatibus unde? A, suscipit?', is_read: true},
        {msg_id: 9, image: ds2, from: 'user', timestamp: '16:06', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam cum deleniti totam suscipit cupiditate excepturi', is_read: true},
        {msg_id: 10, from: brandName, timestamp: '16:07', text: 'Lorem ipsum dolor sit amet consectetur', is_read: true},
        {msg_id: 11, from: 'user', timestamp: '16:21', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam cum deleniti totam suscipit cupiditate excepturi in voluptas veniam! Similique ullam eius error quaerat tempora sint voluptatibus necessitatibus unde? A, suscipit?', is_read: true},
        {msg_id: 12, from: 'user', timestamp: '16:24', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam cum deleniti totam suscipit cupiditate excepturi', is_read: true},
        {msg_id: 13, image: ds3, from: 'user', timestamp: '16:34', text: 'Lorem ipsum dolor sit amet consectetur', is_read: true},
        {msg_id: 14, from: brandName, timestamp: '16:43', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam cum deleniti totam suscipit cupiditate excepturi in voluptas veniam! Similique ullam eius error quaerat tempora sint voluptatibus necessitatibus unde? A, suscipit?', is_read: true},
        {msg_id: 15, from: brandName, timestamp: '16:54', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam cum deleniti totam suscipit cupiditate excepturi', is_read: true},
    ]
    
    const [messagesAct, setMessagesAct] = useState(messages)
    

    
    useEffect(() => {
        dispatch(setPageTitle(brandName))
        dispatch(setSearchAvailable(false))
        scrollBottom()
    }, [])

    useEffect(() => {
        scrollBottom()
    }, [messagesAct])

    const sendNewMessage = (msg) => {
        let newMsg = {
            ...msg,
            msg_id: messagesAct[messagesAct.length - 1].msg_id + 1
        }
        setMessagesAct([...messagesAct, newMsg])
    }

    return (
        <Fancybox
                className={'pl-page-container pl-page-chat'}
                options={{
                Carousel: {
                    infinite: false,
                },
                }}
        >
            <PlDateMessageGroup date={'12 апреля'}>
                {messagesAct.map(msg => (
                    <PiMessage
                        fromUser={msg.from === brandName ? false : true}
                        name={msg.from === brandName ? msg.from : ''}
                        text={msg.text}
                        timestamp={msg.timestamp}
                        isRead={msg.is_read}
                        key={msg.msg_id}
                        img={msg.image ? msg.image : null}
                    />
                    ))}
            </PlDateMessageGroup>
            <ChatInputArea sendMessage={sendNewMessage} />
        </Fancybox>
    )
};

export default ChatPage;
