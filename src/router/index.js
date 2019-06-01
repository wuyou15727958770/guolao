import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

let router= new Router({
    mode:'history',
    routes: [
        //首页
        {
            path: '/',
            name: 'home',
            component: () =>
                import('@/components/home/index.vue')
        },
        //商标服务
        {
            path:'/trade',
            component:()=> import('@/components/trade/trade.vue')
        },

        //版权服务
        {
            path:'/copyright',
            component:()=> import('@/components/copyright/copyright.vue')
        },
        //专利服务
        {
            path:'/patent',
            component:()=> import('@/components/patent/patent.vue')
        },
        //制定培训
        {
            path:'/custom',
            component:()=>
                import('@/components/custom/custom.vue'),
        },
        //关于我们
        {
          path:'/about',
          component:()=>
              import('@/components/about/about.vue'),
        },
        //新闻中心
        {
          path:'/news',
          component:()=>
              import('@/components/news/index.vue'),
              children:[{
                path:'/news/news',
                component:()=>
                    import('@/components/news/news.vue'),
              },{
                path:'/news/newsdetail',
                component:()=>
                    import('@/components/news/newsdetail.vue')
            }]
        },
        //登陆页面
        {
            path:'/login',
            name:'login',
            component:()=>
                import('@/components/login.vue')
        },
        //注册页面
        {
            path: '/register',
            component: () =>
                import('@/components/register.vue')
        },
        // 个人中心
        {
            path: '/personal',
            redirect:'/personal/personalInformation',
            component: () => import('@/components/personal/personal/personal.vue'),
                children:[
                    {
                        path:'/personal/personalInformation',
                        component:()=>
                            import('@/components/personal/personalInformation/personalInformation.vue')
                    },
                    {
                        path:'/personal/safeCenter',
                        component:()=>
                            import('@/components/personal/safeCenter/safeCenter.vue')
                    },
                    {
                        path:'/personal/personalComfire',
                        component:()=>
                            import('@/components/personal/personalComfire/personalComfireIndex.vue'),
                            children:[
                                {
                                    path:'/personal/personalComfire',
                                    name:'/personal/personalComfire/personalComfire',
                                    component:()=>
                                        import('@/components/personal/personalComfire/personalComfire.vue'),
                                },{
                                    path:'/personal/personalForm',
                                    name:'/personal/personalForm',
                                    component:()=>
                                        import('@/components/personal/personalComfire/personalForm.vue')
                                }
                            ]
                    }
                    ,{
                        path:'/personal/companyComfire',
                        component:()=>
                            import('@/components/personal/companyComfire/companyComfireIndex.vue'),
                            children:[
                                {
                                    path:'/personal/companyComfire',
                                    name:'/personal/companyComfire',
                                    component:()=>
                                        import('@/components/personal/companyComfire/companyComfire.vue'),
                                },{
                                    path:'/personal/companyForm',
                                    name:'/personal/companyForm',
                                    component:()=>
                                        import('@/components/personal/companyComfire/companyForm.vue')
                                }
                            ]
                    },{
                        path:'/personal/coupon',
                        component:()=>
                            import('@/components/personal/coupon/coupon.vue')
                    },{
                        path:'/personal/invoiceRecoring',
                        component:()=>
                            import('@/components/personal/invoiceRecoring/invoiceRecoring.vue')
                    },
                    {
                        path:'/personal/message',
                        component:()=>import('@/components/personal/message/messageIndex.vue'),
                            children:[{
                                path:'/personal/message',
                                component:()=>import('@/components/personal/message/message.vue')
                            },{
                                path:'/personal/messageDetail',
                                component:()=>import('@/components/personal/message/messageDetail.vue')
                            }]
                    }
                ]
        },
        //找回密码界面
        {
            path:'/forgetPassword',
            component:()=>
                import('@/components/forgetPassword.vue')
        },
        //404页面
        {
            path:'*',
            name:'notfound',
            component:()=>
                import('@/components/notFound.vue')
        }
    ]
});

export default router;
