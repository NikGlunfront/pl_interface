import React, { useEffect, useRef } from "react"
import { register } from 'swiper/element/bundle'


const PromoImgArea = ({
    promoImage,
    promoName,
    inactive,
    deleted = false
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
                .swiper-pagination-bullet {
                  background: #E10001 !important;
                  width: 0.4rem;
                  height: 0.4rem;
                  margin: 0 0.4rem !important;
                }
                .swiper-pagination {
                    bottom: -0.2rem !important;
                    display: none !important;
                }
                .swiper-pagination-bullet-active {
                  background: #E10001 !important;
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
    }, [swiperRef, promoImage])


    if (!promoImage && !promoName) {
        return (
            <div className="list-item__thumbs">
                
            </div>
        )
    }
    if (promoImage.length === 0) {
        return (
            <div className="list-item__thumbs list-item__thumbs_skeleton">
                
            </div>
        )
    }

    if (promoImage.length > 0 && promoName && inactive == true) {
        return (
            <div className="list-item__thumbs">
                <img  
                    src={promoImage[0]}
                    alt={promoName}
                    title={promoName}
                />
            </div>
        )
    }

    return (
        <div className={"list-item__thumbs" + (deleted ? " list-item__thumbs_deleted" : '')}>
            {promoImage.length > 1 && !deleted
                ?
                <swiper-container init="false" ref={swiperRef}>
                    {promoImage.map((img, index) => (
                        <swiper-slide key={index}>
                            <img  
                                src={img}
                                alt={promoName}
                                title={promoName}
                            />
                        </swiper-slide>
                    ))}
                </swiper-container>
                :
                <img  
                    src={promoImage[0]}
                    alt={promoName}
                    title={promoName}
                />
            }
        </div>
    )
};

export default PromoImgArea;
