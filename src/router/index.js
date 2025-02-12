// import TestVue1 from '@/views/TestVue1.vue';
import{createRouter, createWebHistory} from 'vue-router'; //뷰 라유터 라이브러리에 있는 함수
import { practiceRouter } from './practiceRouter';
import { memberRouter } from './memberRouter';

const routes = [
//    {    
//         path:'/test1',
//         name:'TestVue1',
//         component : TestVue1 //test1 url경로로 가면 TestVue1 화면으로 라우팅해주겠다
//    },
    ...practiceRouter,
    ...memberRouter
]

const router = createRouter({
    //vue router는 내부적으로 두가지 방식의 히스토리 관리를 제공한다.
    //1)createWebHistory: /home, 2)createHashHistory: /#/home
    history: createWebHistory(),
    routes

});

export default router;