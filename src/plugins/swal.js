import Vue from 'vue'

const sw = {
    show({ title, text, icon }) {
    return Vue.swal({
            title: title,
            text: text, 
            icon: icon
        })
    },
    toast({title, icon}){
        return Vue.swal({
            title: title,
            icon: icon,
            position: 'top-right',
            showConfirmButton: false,
            timer: 2000,
            toast: true
        })
    }
}

export default sw