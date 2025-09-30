import Home from '~/components/pages/Home/Home';
import Profile from '~/components/pages/Profile/Profile';
import ProductionsDetail from '~/components/pages/ProductionsDetail/ProductionsDetail';
import LayoutDefault from '../Layout/LayoutDefault/LayoutDefault';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/profile', component: Profile },
    { path: '/productionsDetail', component: ProductionsDetail, layout: LayoutDefault },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
