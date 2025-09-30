import Button from '~/components/Button/Button';
import img from '~/assets/Image/Image';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import './Header.module.scss';
import { navHeader } from './NavHeader';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logoHeader')}>
                    <img className={cx('logo')} src={img.logo} alt="logo" />
                </div>
                <div className={cx('actionsHeader')}>
                    {navHeader.map((nav, index) => (
                        <Button key={index} className={nav.propType}>
                            {nav.propType === 'login' ? (
                                <>
                                    {nav.icon}
                                    {nav.title}
                                </>
                            ) : (
                                <>
                                    {nav.title}
                                    {nav.icon}
                                </>
                            )}
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Header;
