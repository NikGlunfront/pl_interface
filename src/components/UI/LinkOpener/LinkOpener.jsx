import React from "react"
import { useTelegram } from "../../../hooks/useTelegram";

const LinkOpener = ({
    className,
    url,
    children
}) => {
    const {tg} = useTelegram()

    function handleTgClick(url) {
        tg.openLink(url)
    }

    return (
        <div className={className} onClick={() => handleTgClick(url)}>
            {children}
        </div>
    )
};

export default LinkOpener;
