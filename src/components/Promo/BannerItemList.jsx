import React from "react"

const BannerItemList = ({
    bannerData
}) => {

    return (
        <div className="list-item list-item_banner">
            <img src={bannerData.banner_src} alt={bannerData.banner_title} />
        </div>
    )
};

export default BannerItemList;
