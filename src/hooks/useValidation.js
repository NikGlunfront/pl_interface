export function useValidation() {
    const getImgProps = (file) => {
        let ext = "не определилось"
        let parts = file.name.split('.')
        if (parts.length > 1) ext = parts.pop();
        return {
            'size': file.size,
            'type': ext,
            'mime': file.type
        }
    }
    const validateUploadedMedia = (file) => {
        const fileObject = getImgProps(file)
        console.log(fileObject)
        // Проверка размера
        const allowedExtensions = ['png', 'webp', 'jpg', 'jpeg']
        if (!allowedExtensions.includes(fileObject.type)) {
            return {success: false, error: "Alerts.MediaUploader.FileTypes"};
        }
        if (fileObject.size > 1024 * 1024 * 10) {
            return {success: false, error: "Alerts.MediaUploader.FileSize"};
        }
        // Проверка типа файла

        // Все проверки пройдены
        return {success: true}
    }

    return {
        validateUploadedMedia
    }
} 