import Button from '~/components/Button/Button';
import img from '~/assets/Image/Image';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import './Header.module.scss';

import HeadlessTippy from '@tippyjs/react/headless';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { navHeader } from './NavHeader';
import Wrapper from '~/components/Popper/Wrapper';
import NotifyMenu from './NotifyMenu/NotifyMenu';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logoHeader')}>
                    <img className={cx('logo')} src={img.logo} alt="logo" />
                </div>
                <div className={cx('actionsHeader')}>
                    <div className={cx('tippy-notify')}>
                        <HeadlessTippy
                            delay={[300, 500]}
                            placement="top-end"
                            visible={true}
                            interactive
                            render={(attrs) => {
                                return (
                                    <Wrapper>
                                        <NotifyMenu />
                                    </Wrapper>
                                );
                            }}
                        >
                            <Button primary>
                                Thông báo
                                <FontAwesomeIcon icon={faAngleDown} />
                            </Button>
                        </HeadlessTippy>
                    </div>
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
