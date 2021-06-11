import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "./assets/icon/iconfont.css"

import {ElUpload,ElCascader,ElDatePicker,ElSteps,ElStep,ElTimeline, ElTimelineItem,ElPagination,ElAvatar, ElIcon,ElButton,ElInput,ElSelect,ElOption,ElTable,ElTableColumn} from 'element-plus'

const components =[ElUpload,ElCascader,ElDatePicker,ElSteps,ElStep,ElTimeline, ElTimelineItem,ElPagination,ElAvatar, ElIcon,ElButton,ElInput,ElSelect,ElOption,ElTable,ElTableColumn]

const app=createApp(App)
app.use(store).use(router)

components.forEach(component => {
    app.component(component.name, component)
  })

app.mount('#app')
