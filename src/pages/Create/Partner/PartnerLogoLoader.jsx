import React, { useEffect, useState } from "react"
import MediaLoader from "../../../components/UI/MediaLoader/MediaLoader";
import noImage from '../../../assets/img/icons/service/no_image.svg'
import { useIcons } from "../../../hooks/useIcons";

const PartnerLogoLoader = ({
    changeFunc
}) => {
    const { getIcon } = useIcons()
    const [imgPreview, setImgPreview] = useState(null)

    const getPreviewImg = (img) => {
        setImgPreview(img)
    }

    useEffect(() => {
        if (imgPreview !== null) {
            changeFunc(URL.createObjectURL(imgPreview))
        }
    }, [imgPreview])

    return (
        <div className="pl-page-create-partner__upload_logo">
            <div className="pl-page-create-partner__previewlogo">
                {imgPreview === null
                    ? <img className="no-img-ico" src={getIcon('noimage')} alt="partner-logo"/>
                    : <img src={URL.createObjectURL(imgPreview)} alt="partner-logo" style={{backgroundColor: 'white'}}/>
                }
            </div>
            <MediaLoader 
                getPreview={getPreviewImg} 
                className={'pl-page-create-partner__medialoader'} 
                label={'Выбрать фотографию'}
            />
        </div>
    )
};

export default PartnerLogoLoader;
