import Header from '~/components/Layout/components/Header/Header';
import Sidebar from './Sidebar/Sidebar';

import classNames from 'classnames';
import styles from './DefaultLayout.module.scss';
import Footer from '../components/Footer/Footer';
import Slider from '../components/Slider/Slider';
import HeaderSearch from '../components/HeaderSearch/HeaderSearch';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <HeaderSearch />
            <Slider />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
