import React, { useEffect, useState } from 'react';
import MediaLoader from '../../../components/UI/MediaLoader/MediaLoader';
import { useIcons } from '../../../hooks/useIcons';
import PreviewItem from './PreviewItem';
import { useDispatch, useSelector } from 'react-redux';
import { setCreatePromoImages } from '../../../store/slices/createPromo/createPromoSlice';
import { useTranslate } from '../../../hooks/useTranslate';

const CreatePromoImagesUpload = ({
    completedImages
}) => {
    const dispatch = useDispatch()
    const { tr } = useTranslate()
    const { getIcon } = useIcons()
    const { images: promoImagesState } = useSelector(state => state.createPromo)
    const [imgPreviews, setImgPreviews] = useState([])
    const [imgAmount, setImgAmount] = useState(0)

    useEffect(() => {
        if (completedImages.length > 0) {
            setImgPreviews(completedImages)
            setImgAmount(completedImages.length)
        }
    }, [])

    const getPreviewImg = (img) => {
        setImgPreviews([...imgPreviews, {img_file: URL.createObjectURL(img), id: imgAmount + 1}])
        dispatch(setCreatePromoImages([...promoImagesState, {img_file: URL.createObjectURL(img), id: imgAmount + 1}]))
        setImgAmount(imgAmount + 1)
    }

    const removeImage = (id) => {
        setImgPreviews(imgPreviews.filter(item => item.id !== id))
        dispatch(setCreatePromoImages(promoImagesState.filter(item => item.id !== id)))
        setImgAmount(imgAmount - 1)
    }
    
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
                        label={tr('Default.Input.Placeholder.Image')}
                    />
                    : ""
                }
            </div>
        </div>
    );
};

export default CreatePromoImagesUpload;