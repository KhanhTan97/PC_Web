import Button from '~/components/Button';
import img from '~/assets/Image';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faCartShopping, faRightToBracket } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logoHeader')}>
                    <img className={cx('logo')} src={img.logo} alt="logo" />
                </div>
                <div className={cx('actionsHeader')}>
                    <Button primary>
                        Thông báo
                        <FontAwesomeIcon icon={faAngleDown} />
                    </Button>
                    <Button standard>
                        Tra cứu đơn hàng
                        <FontAwesomeIcon icon={faAngleDown} />
                    </Button>
                    <Button standard>
                        Giỏ hàng
                        <FontAwesomeIcon icon={faCartShopping} />
                    </Button>
                    <Button login>
                        <FontAwesomeIcon icon={faRightToBracket} />
                        Đăng nhập
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Header;
