import React from 'react';

const FancyGalleryItem = ({
    src,
    className,
    alt
}) => {
    let basicClassName = 'pl-gallery-item '
    return (
        <a data-fancybox="gallery" href={src} className={basicClassName}>
            <img
                alt={alt}
                src={src}
            />
        </a>
    );
};

export default FancyGalleryItem;