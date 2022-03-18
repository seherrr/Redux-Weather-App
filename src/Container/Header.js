import { useSelector } from 'react-redux';
import { city, date } from '../redux/weatherSlice';
import Moment from 'react-moment';
import 'moment-timezone';

function Header() {
    const cityName = useSelector(city);
    const time = useSelector(date);

    return (
        <div className="header">
            <h1 className="header__title">{cityName ? cityName : ''}</h1>
            <h2 className="header__date">{time ? <Moment format="YYYY/MM/DD">{time*1000}</Moment> : ''}</h2> 
        </div>
    )
}

export default Header
