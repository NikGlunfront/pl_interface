import React, { useEffect, useState } from "react"
import { useTranslate } from "../../../hooks/useTranslate"
import { useValidation } from "../../../hooks/useValidation"
import { useTelegram } from "../../../hooks/useTelegram"
import getCroppedImg from "../../../services/Cropp/cropImage"
import Cropper from "react-easy-crop"
import SmartButton from "../SmartButton/SmartButton"

const dogImg =
  'https://img.huffingtonpost.com/asset/5ab4d4ac2000007d06eb2c56.jpeg?cache=sih0jwle4e&ops=1910_1000'

const MediaLoader = ({
    className,
    getPreview,
    cropWidth,
    aspectRatio,
    cropHeight,
    label = null
}) => {
    const { tr } = useTranslate()
    const { validateUploadedMedia } = useValidation()
    const { sendAlert } = useTelegram()
    const [selectedFile, setSelectedFile] = useState(null)
    const [preview, setPreview] = useState()
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1)
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
    const [croppedImage, setCroppedImage] = useState(null)

    const onCropComplete = (croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels)
    }

    const showCroppedImage = async () => {
        try {
          const croppedImage = await getCroppedImg(
                dogImg,
                croppedAreaPixels
          )
          console.log('donee', { croppedImage })
          setPreview(croppedImage)
          setSelectedFile(null)
          getPreview(croppedImage)
        } catch (e) {
          console.error(e)
        }
    }

    const onClose = () => {
        setPreview(null)
    }

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            getPreview(null)
            return
        }
        let isValidFile = validateUploadedMedia(e.target.files[0])
        if (isValidFile.success) {
            // I've kept this example simple by using the first image instead of multiple
            setSelectedFile(e.target.files[0])
            // getPreview(e.target.files[0])
        } else {
            sendAlert(tr(isValidFile.error))
        }
    }

    return (
        <>
            {selectedFile 
                ?
                <div className="cropper-container">
                    <Cropper
                        image={dogImg}
                        crop={crop}
                        zoom={zoom}
                        cropSize={cropWidth && cropHeight ? {width: cropWidth, height: cropHeight} : ''}
                        aspect={aspectRatio ? aspectRatio : '1 / 1'}
                        onCropChange={setCrop}
                        onCropComplete={onCropComplete}
                        onZoomChange={setZoom}
                    />
                    <SmartButton 
                        color={'red'}
                        onClick={showCroppedImage}
                    >{tr('Button.Choose')}</SmartButton>
                </div>
                : ""
            }
            
            <label className={'pl-media-loader ' + className}>
                <input type='file' onChange={onSelectFile} />
                {label !== null
                    ? <span>{label}</span>
                    : ""
                }
                {/* {selectedFile &&  <img src={preview} /> } */}
            </label>

        </>
    )
}

export default MediaLoader;
