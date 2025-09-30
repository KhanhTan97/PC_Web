import classNames from 'classnames/bind';
import styles from './Slider.module.scss';
import img from '~/assets/Image/Image';

const cx = classNames.bind(styles);

function Slider() {
    return (
        <div className={cx('wrapperSlider')}>
            <img className={cx('slider')} src={img.slider} alt="slider" />
        </div>
    );
}

export default Slider;
