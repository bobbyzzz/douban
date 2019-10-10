import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import axios from 'axios'
axios.defaults.baseURL = "http://47.107.225.115:8080/"
Vue.prototype.$axios = axios
// import audio from '../components/audio.vue'
// import broadcast from '../components/broadcast.vue'
// import group from '../components/group.vue'
// import home from '../components/home.vue'
// import mine from '../components/mine.vue'

// 二级菜单
// import tab1 from '../components/tab1.vue'
// import tab2 from '../components/tab2.vue'
// import tab3 from '../components/tab3.vue'
// import tab4 from '../components/tab4.vue'
// import tab5 from '../components/tab5.vue'
//  路由懒加载
//  第一种使用方法
// const audio = ()=> import('../components/audio.vue')
// const broadcast = ()=> import('../components/broadcast.vue')
// const group = ()=> import('../components/group.vue')
// const home = ()=> import('../components/home.vue')
// const mine = ()=> import('../components/mine.vue')
// const tab1 = ()=> import('../components/tab1.vue')
// const tab2 = ()=> import('../components/tab2.vue')
// const tab3 = ()=> import('../components/tab3.vue')
// const tab4 = ()=> import('../components/tab4.vue')
// const tab5 = ()=> import('../components/tab5.vue')
// const demo = ()=> import('../components/demo.vue')
// 第二种使用方法
const audio = resolve => require(['../components/audio.vue'],resolve)
const broadcast = resolve => require(['../components/broadcast.vue'],resolve)
const group = resolve => require(['../components/group.vue'],resolve)
const home = resolve => require(['../components/home.vue'],resolve)
const mine = resolve => require(['../components/mine.vue'],resolve)
const tab1 = resolve => require(['../components/tab1.vue'],resolve)
const tab2 = resolve => require(['../components/tab2.vue'],resolve)
const tab3 = resolve => require(['../components/tab3.vue'],resolve)
const tab4 = resolve => require(['../components/tab4.vue'],resolve)
const tab5 = resolve => require(['../components/tab5.vue'],resolve)
// const demo = resolve => require(['../components/demo.vue'],resolve)

const routes = [{
    path: '/',
    redirect: '/home'
}, {
    path: '/home',
    component: home
}, {
    path: '/audio',
    redirect: '/audio/tab1',
    component: audio,
    children: [{
        path: '/audio/tab1',
        component: tab1
    }, {
        path: '/audio/tab2',
        component: tab2
    }, {
        path: '/audio/tab3',
        component: tab3
    }, {
        path: '/audio/tab4',
        component: tab4
    }, {
        path: '/audio/tab5',
        component: tab5
    }, ]
}, {
    path: '/broadcast',
    component: broadcast
}, {
    path: '/group',
    component: group
}, {
    path: '/mine',
    component: mine
}, ]

const router = new VueRouter({
    routes
})
export default router