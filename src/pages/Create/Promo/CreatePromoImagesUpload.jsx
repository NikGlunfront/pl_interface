import React, { useEffect, useState } from 'react';
import MediaLoader from '../../../components/UI/MediaLoader/MediaLoader';
import { useIcons } from '../../../hooks/useIcons';
import PreviewItem from './PreviewItem';

const CreatePromoImagesUpload = () => {
    const { getIcon } = useIcons()
    const [imgPreviews, setImgPreviews] = useState([])
    const [imgAmount, setImgAmount] = useState(0)

    const getPreviewImg = (img) => {
        setImgPreviews([...imgPreviews, {img_file: img, id: imgAmount + 1}])
        setImgAmount(imgAmount + 1)
    }

    const removeImage = (id) => {
        setImgPreviews(imgPreviews.filter(item => item.id !== id))
        setImgAmount(imgAmount - 1)
    }

    useEffect(() => {
        console.log(imgPreviews)
    }, [imgPreviews])
    
    return (
        <div className='img-uploader-create-promo'>
            {imgAmount === 0
                ? <img className="no-img-ico" src={getIcon('noimage')} alt="promo-no-logo"/>
                : ""
            }
            <div className={"img-uploader-create-promo__row " + (imgAmount > 0 ? 'img-uploader-create-promo__row_active' : '')}>
                {imgPreviews.map(imgItem => (
                    <PreviewItem 
                        imgObj={imgItem.img_file} 
                        id={imgItem.id} 
                        key={imgItem.id} 
                        removeImage={removeImage}
                    />
                ))}
                {imgAmount < 5
                    ?
                    <MediaLoader 
                        getPreview={getPreviewImg} 
                        className={'pl-page-create-partner__medialoader'} 
                        label={'Выбрать фотографию'}
                    />
                    : ""
                }
            </div>
        </div>
    );
};

export default CreatePromoImagesUpload;