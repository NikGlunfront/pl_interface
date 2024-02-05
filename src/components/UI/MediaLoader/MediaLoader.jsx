import React, { useEffect, useState } from "react"

const MediaLoader = ({
    className,
    getPreview,
    label = null
}) => {
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

        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0])
        getPreview(e.target.files[0])
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
