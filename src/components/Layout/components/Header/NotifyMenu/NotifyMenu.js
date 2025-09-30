import styles from './NotifyMenu.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function NotifyMenu() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <h3 className={cx('title')}>Thông báo</h3>
                <button className={cx('check_all')}>Đánh dấu tất cả đã đọc</button>
            </div>

            <div className={cx('body')}>{/* items */}</div>

            <a className={cx('notify')} href="/notify">
                Xem tất cả thông báo
            </a>
        </div>
    );
}

export default NotifyMenu;
