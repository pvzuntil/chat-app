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
    },
    confirm(args){
        return Vue.swal({
            ...args,
            showCancelButton: true
        })
    }
}

export default sw