import Home from '@/components/Home'
import Lists from '@/components/Lists'
import Count from '@/components/Count'
import List from '@/components/List';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        title:'主页'
    },
    {
        path: '/lists',
        name: 'Lists',
        component: Lists,
        title: '列表'
    },
    {
        path: '/count',
        name: 'Count',
        component: Count,
        title: '计数'
    },
    {
        path: '/list/:id',
        name: 'List',
        component: List
    }
]

export default routes;