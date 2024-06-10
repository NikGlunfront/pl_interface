import React, { useEffect } from "react"
import { useParams } from "react-router-dom";

const PromoStats = ({
    acts
}) => {
    const {id} = useParams()
    const {views, scs, wish} = acts

    return (
        <div className="list-item__interacts">
            <div className="list-item__num list-item__num_views">{views}</div>
            <div className="list-item__num list-item__num_gifts">{scs}</div>
            <div className={"list-item__num list-item__num_wishes " + (wish > 0 ? "list-item__num_wishes_full" : "")}>{wish}</div>
            {!id && <div className="pl-moderate-promo__interact pl-moderate-promo__interact_5">
                <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.02247 0.538457C6.16806 0.0694177 6.83194 0.0694189 6.97753 0.538459L8.0204 3.89831C8.08606 4.10984 8.28305 4.25297 8.50452 4.25005L12.0222 4.20363C12.5133 4.19715 12.7184 4.82853 12.3173 5.11194L9.44418 7.14202C9.26329 7.26983 9.18804 7.50142 9.25926 7.71114L10.3904 11.0423C10.5483 11.5073 10.0113 11.8976 9.61778 11.6037L6.7992 9.49848C6.62175 9.36594 6.37825 9.36594 6.2008 9.49848L3.38222 11.6037C2.98874 11.8976 2.45165 11.5073 2.60957 11.0423L3.74074 7.71114C3.81196 7.50142 3.73671 7.26983 3.55582 7.14202L0.682673 5.11194C0.281578 4.82853 0.486729 4.19715 0.977801 4.20363L4.49548 4.25005C4.71695 4.25297 4.91394 4.10984 4.9796 3.89831L6.02247 0.538457Z" fill="#F7AC2A"/>
                </svg>

                {4.9}
            </div>
            }
        </div>
    )
};

export default PromoStats;
