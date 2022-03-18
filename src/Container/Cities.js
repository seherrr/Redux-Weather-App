import { useDispatch, useSelector } from 'react-redux';
import { changeCity, city } from '../redux/weatherSlice';

function Cities() {
    const dispatch = useDispatch();
    const cityName = useSelector(city);
    
    return (
        
        <div className="cities">
            <input 
                value={cityName}
                onChange={(e) => dispatch(changeCity(e.target.value))}
                className="cities__input"
                placeholder="Please enter a city name.."
            />
        </div>
    )
}

export default Cities
