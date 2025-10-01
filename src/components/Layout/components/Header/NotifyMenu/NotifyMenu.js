import ItemMenu from './ListNotifyMenu/ItemMenu';
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

            <div className={cx('body')}>
                <ItemMenu />
            </div>

            <span className={cx('notify')}>Xem tất cả thông báo</span>
        </div>
    );
}

export default NotifyMenu;
