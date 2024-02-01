import React, { useEffect, useRef } from "react"
import { register } from 'swiper/element/bundle'
import { Pagination } from 'swiper/modules';


const PromoImgArea = ({
    promoData
}) => {
    const swiperRef = useRef(null);

    useEffect(() => {
        if (!swiperRef.current) {
            return;
        }
        register();
        const params = {
            injectStyles: [
                `
                .swiper-pagination-bullet-active {
                  background: rgba(197,197,197,0.5) !important;
                }
                `,
            ],
            speed: 300,
            pagination: true

        };
        
      
        // Assign it to swiper element
        Object.assign(swiperRef.current, params);
      
        // initialize swiper
        swiperRef.current.initialize();
    }, [swiperRef])

    if (!promoData) {
        return (
            <div></div>
        )
    }

    if (promoData && promoData?.inactive == true) {
        return (
            <div className="list-item__thumbs">
                <img  
                    src={promoData.img}
                    alt={promoData.name}
                    title={promoData.name}
                />
            </div>
        )
    }

    return (
        <div className="list-item__thumbs">
            <swiper-container init="false" ref={swiperRef}>
                <swiper-slide >
                    <img  
                        src={promoData.img}
                        alt={promoData.name}
                        title={promoData.name}
                    />
                </swiper-slide>
                <swiper-slide >
                    <img  
                        src={promoData.img}
                        alt={promoData.name}
                        title={promoData.name}
                    />
                </swiper-slide>
                <swiper-slide >
                    <img  
                        src={promoData.img}
                        alt={promoData.name}
                        title={promoData.name}
                    />
                </swiper-slide>
            </swiper-container>
        </div>
    )
};

export default PromoImgArea;
