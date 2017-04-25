const lazyLoading = (name, index = false) => require(`components/${name}${index ? '/index' : ''}.vue`)
export default{
    mode  : 'history',
    base  : __dirname,
    routes: [
        {path: '/', redirect: '/index'},
        {
            path    : '/index', component: require('components/layout'),
            children: [
                {path: '', component: lazyLoading('index/index')},
                {path: 'dashboard', component: lazyLoading('index/dashboard')},
                {path:'f',component:lazyLoading('index/f')},
                {path:'p/:id',name:'p',component:lazyLoading('index/p')},
                {path:'listMember',component:lazyLoading('index/listMember')}
            ]

            // this.$socket.emit('close',this.kw);


        },
        {
            path:'/analysis',component:require('components/layout'),
            children:[
                {path:'index',component: lazyLoading('analysis/index')},
                {path:'topic',component: lazyLoading('analysis/topic')},
                {path:'comment',component: lazyLoading('analysis/comment')},
                {path:'list',component: lazyLoading('analysis/list')}
            ]
        },
        {path: '*', component: lazyLoading('public/error404')}
    ]

}