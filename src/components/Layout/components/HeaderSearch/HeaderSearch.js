import classNames from 'classnames/bind';
import styles from './HeaderSearch.module.scss';
import Button from '~/components/Button/Button';

import { linksInfo } from './LinksInfo';
import { SearchIcon } from '~/components/Icons';
import { useState } from 'react';

const cx = classNames.bind(styles);

function HeaderSearch() {
    const [searchValue, setSearchValue] = useState('');

    const handleChange = (e) => {
        const targetValue = e.target.value;
        if (!targetValue.startsWith(' ')) {
            setSearchValue(targetValue);
        }
    };

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
                <input
                    value={searchValue}
                    onChange={handleChange}
                    spellCheck={false}
                    placeholder="Search your items..."
                />

                <button className={cx('search-btn')}>
                    <SearchIcon className={cx('search-icon')} />
                </button>
            </div>
        </div>
    );
}

export default HeaderSearch;
