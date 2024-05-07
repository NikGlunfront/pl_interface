import React from "react"
import { NavLink } from "react-router-dom";

const InfoGroup = ({
    title,
    children,
    className,
    subTitleClass,
    subTitleNum,
    data,
    titleOnClick = () => {}
}) => {
    let basicClassName = 'pl-info-group '

    return (
        <div className={basicClassName + (className ? ` ${className} ` : '')}>
            {data
                ? <NavLink to={`/partners/${data.id}`} state={{partner: data}} className="pl-info-group__title">{title}</NavLink>
                : <div className="pl-info-group__title" onClick={titleOnClick}>
                    {title}
                    {subTitleNum
                        ? <span className={subTitleClass}>{subTitleNum}</span>
                        : <span></span>
                    }
                </div>
            }
            <div className="pl-info-group__content">{children}</div>
        </div>
    )
};

export default InfoGroup;
