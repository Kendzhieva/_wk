const { useEffect } = require("react")


const useTextArea = (TextAreaRef, value) => {
    useEffect(() => {
        if (TextAreaRef) {
            TextAreaRef.style.height = '0px';
            const scrollHeight = TextAreaRef.scrollHeight;
            TextAreaRef.style.height = scrollHeight + "px"
        }
    }, [TextAreaRef, value])
}

export default useTextArea