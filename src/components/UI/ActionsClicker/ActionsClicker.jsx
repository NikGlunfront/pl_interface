import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { showActionsList } from "../../../store/slices/pageSlice/pageSlice";

const ActionsClicker = ({
    className,
    children,
    uid
}) => {
    const { actionsListsVisible } = useSelector(state => state.pageMeta)
    const dispatch = useDispatch()
    const [isOpened, setIsOpened] = useState(false)
    useEffect(() => {
        if (actionsListsVisible === uid) {
            setIsOpened(true)
        } else {
            setIsOpened(false)
        }
    }, [actionsListsVisible])


    const handleToggle = () => {
        if (actionsListsVisible === uid && isOpened) {
            dispatch(showActionsList(""))
        } else {
            dispatch(showActionsList(uid))
        }
    }

    let compClassName = 'actions-clicker '
    if (className) {
        compClassName += className
    }

    return (
        <div className={compClassName + (isOpened ? ' _opened' : "")}>
            <div className="actions-clicker__holder">
                <div className="actions-clicker__btn" onClick={handleToggle}><span></span></div>
                <div className="actions-clicker__list">
                    {children}
                </div>
            </div>
        </div>
    )
};

export default ActionsClicker;
