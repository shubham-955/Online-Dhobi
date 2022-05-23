import toast from 'react-hot-toast';

export const ShowMessage = (text, bgColor) => {
    toast(text, {
        duration: 4000,
        position: 'bottom-left',
        style: {
            backgroundColor: (bgColor ? bgColor : '#333333')
        }
    })
}
