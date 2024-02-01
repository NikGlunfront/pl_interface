import React from "react"
import InfoGroup from "../../../containers/InfoGroup";
import Fancybox from "../../UI/Fancybox/Fancybox";
import FancyGalleryItem from "../../UI/Gallery/FancyGalleryItem";
import img1 from '../../../assets/img/promos/gall_1.png'
import img2 from '../../../assets/img/promos/gall_2.png'
import img3 from '../../../assets/img/promos/gall_3.png'
import img4 from '../../../assets/img/promos/gall_4.png'

const productImages = [
    img1,
    img2,
    img3,
    img4
]

const PromoGallery = ({
    
}) => {

    return (
        <InfoGroup title={'Галерея'} className={'pl-promo-page-gallery'}>
            <Fancybox
                className={'pl-promo-page-gallery__content'}
                options={{
                Carousel: {
                    infinite: false,
                },
                }}
            >
                {productImages.map((img, index) => (
                    <FancyGalleryItem 
                        src={img}
                        key={index}
                    />
                ))}
            </Fancybox>
        </InfoGroup>
    )
};

export default PromoGallery;
