import React, { useEffect, useState } from "react"
import MediaLoader from "../../../components/UI/MediaLoader/MediaLoader";
import noImage from '../../../assets/img/icons/service/no_image.svg'
import { useIcons } from "../../../hooks/useIcons";
import { useSelector } from "react-redux";
import { useTranslate } from "../../../hooks/useTranslate";
import preImg from '../../../assets/img/photo_2024-05-22_14-33-28.jpg'

const PartnerLogoLoader = ({
    changeFunc
}) => {
    const { getIcon } = useIcons()
    const { tr } = useTranslate()
    const companyIcon = useSelector(state => state.user.company.icon)
    const [imgPreview, setImgPreview] = useState(preImg)
    const [imgPreviewUrl, setImgPreviewUrl] = useState(null)

    const getPreviewImg = (img) => {
        setImgPreview(img)
    }

    useEffect(() => {
        if (companyIcon) {
            setImgPreviewUrl(companyIcon)
            changeFunc(companyIcon)
        }
    }, [])

    useEffect(() => {
        if (imgPreview !== null) {
            changeFunc(imgPreview)
        }
    }, [imgPreview])

    return (
        <div className="pl-page-create-partner__upload_logo">
            <div className="pl-page-create-partner__previewlogo">
                {imgPreview === null && imgPreviewUrl === null
                    ? <img className="no-img-ico" src={getIcon('noimage')} alt="partner-logo"/>
                    : <img src={imgPreview === null ?  imgPreviewUrl : imgPreview} alt="partner-logo" style={{backgroundColor: 'white'}}/>
                }
            </div>
            <MediaLoader 
                getPreview={getPreviewImg} 
                className={'pl-page-create-partner__medialoader'} 
                label={tr("Default.Input.Placeholder.Image")}
                cropHeight={160}
                cropWidth={160}
            />
        </div>
    )
};

export default PartnerLogoLoader;
