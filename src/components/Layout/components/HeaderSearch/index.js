import classNames from 'classnames/bind';
import styles from './HeaderSearch.module.scss';
import Button from '~/components/Button';

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
                {linksInfo.map((info, index) => (
                    <Button className={cx('linkHeader')} key={index} to={info.to}>
                        {info.title}
                    </Button>
                ))}
            </div>
            <div className={cx('search')}>{/* Search */}</div>
        </div>
    );
}

export default HeaderSearch;
