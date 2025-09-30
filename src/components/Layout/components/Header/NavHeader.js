import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faCartShopping, faRightToBracket, faSearchPlus } from '@fortawesome/free-solid-svg-icons';

export const navHeader = [
    {
        propType: 'primary',
        title: 'Thông báo',
        icon: <FontAwesomeIcon icon={faAngleDown} />,
    },
    {
        propType: 'standard',
        title: 'Tra cứu đơn hàng',
        icon: <FontAwesomeIcon icon={faSearchPlus} />,
    },
    {
        propType: 'standard',
        title: 'Giỏ hàng',
        icon: <FontAwesomeIcon icon={faCartShopping} />,
    },
    {
        propType: 'login',
        title: 'Đăng nhập',
        icon: <FontAwesomeIcon icon={faRightToBracket} />,
    },
];
