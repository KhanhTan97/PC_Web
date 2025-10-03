import { faBell, faCube, faFire, faFireBurner, faWrench } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const notifyMenu = [
    {
        icon: <FontAwesomeIcon icon={faCube} />,
        title: 'Đơn hàng #1234 đã xác nhận',
    },
    {
        icon: <FontAwesomeIcon icon={faCube} />,
        title: 'Đơn hàng #5678 đang giao',
    },
    {
        icon: <FontAwesomeIcon icon={faFire} />,
        title: 'Flash Sale 9.9 – Giảm đến 50%',
    },
    {
        icon: <FontAwesomeIcon icon={faFire} />,
        title: 'Mã freeship cho đơn từ 200K',
    },
    {
        icon: <FontAwesomeIcon icon={faBell} />,
        title: 'CPU Intel Gen 14 đã có mặt tại cửa hàng',
    },
    {
        icon: <FontAwesomeIcon icon={faWrench} />,
        title: 'Yêu cầu bảo hành #888 đã xử lý',
    },
];
