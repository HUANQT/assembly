import Vue from "vue";
import _messageBox from "./messageBox.vue";
const MessageBox = Vue.extend(_messageBox)
const defaultOption = {
    message: "代码是写给人看的，顺便给机器运行的！",
    title: "提示",
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "primary",
}
 const $confirm =(message,title,option)=>{
    return new Promise((resolve,reject)=>{
        const messageBox = new MessageBox({
            data (){
                return Object.assign(defaultOption,{message,title,option})
            },
            methods: {
                resolve,
                reject,
            }
        });
        messageBox.$mount()
        document.body.appendChild( messageBox.$el)
    })
}
export default(Vue)=>(Vue.prototype.$confirm = $confirm)