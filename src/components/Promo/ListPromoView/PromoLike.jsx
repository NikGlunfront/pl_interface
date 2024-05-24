import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";
import Modal from "../../UI/Modal/Modal";
import { useTelegram } from "../../../hooks/useTelegram";

const PromoLike = ({
    deleted
}) => {
    const location = useLocation()    
    const { requestConfirmation } = useTelegram()
    const [isLiked, setIsLiked] = useState(false)
    const [isModalVisible, setIsModalVisible] = useState(false)
    const handleLikeClick = () => {
        if (location.pathname.includes('wishlist')) {
            requestConfirmation('Удалить из ленты?')
        } else {
            setIsLiked(!isLiked)
        }
    }
    useEffect(() => {
        if (location.pathname.includes('wishlist')) {
            setIsLiked(true)
        }
    }, [])

    return (
        <>
            {deleted
                ?
                <div className="list-item__deletebtn">
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 1.00011L1 10M10 9.99989L1 1" stroke="black" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                :
                <div className={"list-item__likes " + (isLiked ? 'list-item__likes_liked' : '')} onClick={handleLikeClick}>
                    {location.pathname.includes('wishlist') &&
                        <Modal
                            className={'like-modal'}
                            setActive={setIsModalVisible}
                            isActive={isModalVisible}
                        >

                        </Modal>
                    }
                </div>
            }
        </>
    )
};

export default PromoLike;
