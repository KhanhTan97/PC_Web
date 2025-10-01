import Button from '~/components/Button/Button';
import styles from './ItemMenu.module.scss';
import classNames from 'classnames/bind';
import { notifyMenu } from './ListNotifyMenu';

const cx = classNames.bind(styles);

function ItemMenu() {
    return (
        <div className={cx('wrapper')}>
            {notifyMenu.map((menu, index) => (
                <button key={index} className={cx('itemNotify')}>
                    <span className={cx('icon')}>{menu.icon}</span>
                    {menu.title}
                </button>
            ))}
        </div>
    );
}

export default ItemMenu;
