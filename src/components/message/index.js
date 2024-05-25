import Vue from "vue";
import _message from "./message.vue";


const Message = Vue.extend(_message)

function $message(cosnter) {
   const message = new Message({
    data () {
        return {
            cosnter,
        }
    }
   });
    message.$mount();
    console.log(message.$el)
   document.body.appendChild(message.$el)
}
export default function  (Vue) {
    Vue.prototype.$message = $message
  }