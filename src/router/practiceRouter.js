import VuetifyComponent from "@/components/practice/VueitfyComponent.vue"
import ModelingComponent from "@/components/practice/ModelingComponent.vue"
import HookComponent from "@/components/practice/HookComponent.vue"
import ConditionalAxiosComponent from "@/components/practice/ConditionalAxiosComponent.vue"
export const practiceRouter =  [
    {    
        path:'/practice/vuetify',
        name:'VuetifyComponent',
        component : VuetifyComponent
   },
   {    
    path:'/practice/modeling',
    name:'ModelingComponent',
    component : ModelingComponent
    },
    {    
        path:'/practice/hook',
        name:'HookComponent',
        component : HookComponent
    },
    {    
        path:'/practice/conditional',
        name:'ConditionalAxiosComponent',
        component : ConditionalAxiosComponent
    },
]