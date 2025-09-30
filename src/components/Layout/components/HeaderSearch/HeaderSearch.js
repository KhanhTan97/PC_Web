import classNames from 'classnames/bind';
import styles from './HeaderSearch.module.scss';
import Button from '~/components/Button/Button';
import { SearchIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

const linksInfo = [
    {
        to: '/tincongnghe',
        title: 'Tin công nghệ',
    },
    {
        to: '/dichvusuachua',
        title: 'Dịch vụ sửa chữa',
    },
    {
        to: '/baohanh',
        title: 'Bảo hành',
    },
];

function HeaderSearch() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('navLinks')}>
                {linksInfo.map((linkInfo, index) => (
                    <Button className={cx('linkHeader')} key={index} to={linkInfo.to}>
                        {linkInfo.title}
                    </Button>
                ))}
            </div>
            <div className={cx('search')}>
                <input spellCheck={false} placeholder="Search your items..." />

                <button className={cx('search-btn')}>
                    <SearchIcon className={cx('search-icon')} />
                </button>
            </div>
        </div>
    );
}

export default HeaderSearch;
