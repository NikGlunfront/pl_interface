import React from "react"
import PiMessage from "../PlMessage/PlMessage";
import { NavLink } from "react-router-dom";

const PendingChatPromo = ({
    
}) => {

    return (
        <div className="pending-order-list-item">
            <NavLink to={'/chat/1'}>
                <PiMessage 
                    fromUser={true}
                    name={"Админ"}
                    text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eveniet quae necessitatibus eos repudiandae animi, aut ipsam! Sint unde sequi at, amet voluptates vitae dignissimos quidem. Odio ex labore quaerat eveniet culpa delectus natus dolore neque. Libero velit, magni esse aspernatur quis, officia nobis possimus nesciunt explicabo quasi, unde assumenda.'}
                    timestamp={'14:38'}
                    isRead={true}
                />  
            </NavLink>
        </div>
    )
};

export default PendingChatPromo;
