import React from "react"
import ChatDayPoint from "../ChatUI/ChatDayPoint";

const PlDateMessageGroup = ({
    children,
    date
}) => {

    return (
        <div className="pl-page-chat__message-dategroup">
            <ChatDayPoint date={date} />
            {children}
        </div>
    )
};

export default PlDateMessageGroup;
