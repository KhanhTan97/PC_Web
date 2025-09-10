import Home from '~/components/pages/Home';
import Profile from '~/components/pages/Profile';
import ProductionsDetail from '~/components/pages/ProductionsDetail';
import LayoutDefault from '../Layout/LayoutDefault';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/profile', component: Profile },
    { path: '/productionsDetail', component: ProductionsDetail, layout: LayoutDefault },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
