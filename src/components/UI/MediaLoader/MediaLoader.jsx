import React, { useEffect, useState } from "react"
import { useTranslate } from "../../../hooks/useTranslate"
import { useValidation } from "../../../hooks/useValidation"
import { useTelegram } from "../../../hooks/useTelegram"

const MediaLoader = ({
    className,
    getPreview,
    label = null
}) => {
    const { tr } = useTranslate()
    const { validateUploadedMedia } = useValidation()
    const { sendAlert } = useTelegram()
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()

    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

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
            getPreview(e.target.files[0])
        } else {
            sendAlert(tr(isValidFile.error))
        }
    }

    return (
        <label className={'pl-media-loader ' + className}>
            <input type='file' onChange={onSelectFile} />
            {label !== null
                ? <span>{label}</span>
                : ""
            }
            {/* {selectedFile &&  <img src={preview} /> } */}
        </label>
    )
}

export default MediaLoader;
