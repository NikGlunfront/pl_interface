import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";
import Modal from "../../UI/Modal/Modal";

const PromoBio = ({
    name = '',
    description = '',
    location = '',
    isDeliveryLocation = false
}) => {
    const locationPath = useLocation()
    const [isDisplayedActions,  setIsDisplayedActions] = useState(false)
    const [isModalActive, setIsModalActive] = useState(false)

    useEffect(() => {
        if  (locationPath.pathname.includes('promos')) {
            setIsDisplayedActions(true)
        } else {
            setIsDisplayedActions(false)
        }
    }, [])

    return (
        <>
            <div className={"pl-promo__title " + (name.length === 0 ? 'pl-promo__title_skeleton' : '') + (isDisplayedActions ? " _with_actions" : '') + " pl-promo__description"}>
                {description}
                {isDisplayedActions
                    ?
                    <>
                        <div className="pl-promo__actions" onClick={() => setIsModalActive(true)}><span></span></div>
                        <Modal
                            className={'promo-actions-modal'}
                            isActive={isModalActive}
                            setActive={setIsModalActive}
                        >
                            <ul>
                                <li>
                                    <div>Поделиться</div>
                                </li>
                                <li>
                                    <div>Добавить в избранное</div>
                                </li>
                                <li>
                                    <div>Не интересует</div>
                                </li>
                                <li>
                                    <div>Не показывать подарки от этого партнёра</div>
                                </li>
                                <li>
                                    <div>Пожаловаться</div>
                                </li>
                            </ul>
                        </Modal>
                    </>
                    :
                    <></>
                }
            </div>
            {/* <div className={"pl-promo__description " + (description.length === 0 ? 'pl-promo__description_skeleton' : '')}>{description}</div> */}
            <div 
                className={"pl-promo__location " 
                    + (location.length === 0 ? 'pl-promo__location_skeleton ' : '')
                    + (isDeliveryLocation ? 'pl-promo__location_delivery ' : '')
                }
            >
                {/* {location.includes('[%address%]')
                    ?   <><b>{location.substring(0, location.indexOf('[%address%]'))}</b>, {location.substring(location.indexOf('%]') + 2)}</>
                    :   <><b>{location.substring(0, location.indexOf('[%delivery%]'))}</b><span>{location.substring(location.indexOf('%]') + 2)}</span></>
                }  */}
                {location.includes('[%address%]')
                    ?   <>{location.substring(0, location.indexOf('[%address%]'))}, {location.substring(location.indexOf('%]') + 2)}</>
                    :   <>{location.substring(0, location.indexOf('[%delivery%]'))}, {location.substring(location.indexOf('%]') + 2)}</>
                } 
            </div>
        </>
    )
};

export default PromoBio;
