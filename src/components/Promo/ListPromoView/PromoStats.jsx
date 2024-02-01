import React from "react"

const PromoStats = ({
    acts
}) => {
    // const location = useLocation()
    const {views, scs, wish} = acts

    return (
        <div className="list-item__interacts">
            <div className="list-item__num list-item__num_views">{views}</div>
            <div className="list-item__num list-item__num_gifts">{scs}</div>
            <div className={"list-item__num list-item__num_wishes " + (wish > 0 ? "list-item__num_wishes_full" : "")}>{wish}</div>
        </div>
    )
};

export default PromoStats;
