import instance from "assets/configs/instance"

const uploadPhoto = async (blobUrl) => {
    const formData = new FormData
    formData.append('file', blobUrl)

    const response = await instance.post('/upload', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })

    return response.data.url
}

export default uploadPhoto