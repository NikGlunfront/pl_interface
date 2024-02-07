import React from 'react';
import { useIcons } from '../../../hooks/useIcons';

const PreviewItem = ({
    imgObj,
    id,
    removeImage
}) => {
    const { getIcon } = useIcons()
    const removeUploadedImg = () => {
        removeImage(id)
    }
    return (
        <div className='img-uploader-create-promo__preview'>
            <button onClick={removeUploadedImg}><img src={getIcon('plus')} alt="remove_image" /></button>
            <img src={imgObj} alt="" />
        </div>
    );
};

export default PreviewItem;