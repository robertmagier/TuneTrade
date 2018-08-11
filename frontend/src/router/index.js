import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
// import Menu from '@/components/Menu'
import SongList from '../components/SongList'
import TokenExchange from '../components/TokenExchange'
import NewContract from '../components/NewContract'
import ICOContract from '../components/ICOContract'
import About from '../components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/SongList',
      name: 'SongList',
      component: SongList
    },
    {
      path: '/',
      name: 'About',
      component: About
    },
    {
      path: '/tokenexchange',
      name: 'TokenExchange',
      component: TokenExchange
    },
    {
      path: '/newcontract',
      name: 'NewContract',
      component: NewContract
    },
    {
      path: '/icocontracttest',
      name: 'ICOContract',
      component: ICOContract
    }
  ]
})
