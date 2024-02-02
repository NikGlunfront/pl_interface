import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setPageTitle, setSearchAvailable } from "../../store/slices/pageSlice/pageSlice";
import PlDateMessageGroup from "../../components/Chat/PlDateMessageGroup/PlDateMessageGroup";
import PiMessage from "../../components/Chat/PlMessage/PlMessage";
import ChatInputArea from "../../components/Chat/ChatUI/ChatInputArea/ChatInputArea";
import { useScroll } from "../../hooks/useScroll";
import Fancybox from "../../components/UI/Fancybox/Fancybox";



const ChatPage = ({
    
}) => {
    const dispatch = useDispatch()
    const { brandId, brandName, promoId } = useSelector(state => state.pageMeta.chatMeta)
    const { scrollBottom } = useScroll()
    const messages = [
        {msg_id: 1, from: 'user', timestamp: '15:24', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam cum deleniti totam suscipit cupiditate excepturi in voluptas veniam! Similique ullam eius error quaerat tempora sint voluptatibus necessitatibus unde? A, suscipit?', is_read: true},
        {msg_id: 2, from: brandName, timestamp: '14:39', text: 'Lorem ipsum dolor sit amet consectetur', is_read: true},
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
                className={'pl-page-container pl-page-chat pl-page-chat_reviews'}
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
                        name={msg.from === brandName ? 'Ответ' : 'Отзыв'}
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
