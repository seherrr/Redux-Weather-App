import { createSlice } from '@reduxjs/toolkit'

export const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    city: 'izmir',
    latitude: '38.41273',
    longitude: '27.13838',
    date: '',
    currentMainDescription: '',
    currentDescription: '',
    currentIcon: '',
    currentTemperature: '',
    currentMinTemperature: '',
    currentMaxTemperature: '',
    currentWind: '',
    currentHumidity: '',
    currentPressure: '',
  },
  reducers: {
    changeCity: (state, action) => {
      state.city = action.payload;
    },
    changeLatitude: (state, action) => {
      state.latitude = action.payload;
    },
    changeLongitude: (state, action) => {
      state.longitude = action.payload;
    },
    changeDate: (state, action) => {
      state.date = action.payload;
    },
    changeCurrentMainDescription: (state, action) => {
      state.currentMainDescription = action.payload; 
    },
    changeCurrentDescription: (state, action) => {
      state.currentDescription = action.payload; 
    },
    changeCurrentIcon: (state, action) => {
      state.currentIcon = action.payload;
    },
    changeCurrentTemperature: (state, action) => {
      state.currentTemperature = action.payload;
    },
    changeCurrentMinTemperature: (state, action) => {
      state.currentMinTemperature = action.payload;
    },
    changeCurrentMaxTemperature: (state, action) => {
      state.currentMaxTemperature = action.payload;
    },
    changeCurrentWind: (state, action) => {
      state.currentWind = action.payload;
    },
    changeCurrentHumidity: (state, action) => {
      state.currentHumidity = action.payload;
    },
    changeCurrentPressure: (state, action) => {
      state.currentPressure = action.payload;
    },
  }
})

export const { 
  changeCity,
  changeLatitude,
  changeLongitude,
  changeDate,
  changeCurrentMainDescription,
  changeCurrentDescription,
  changeCurrentIcon,
  changeCurrentTemperature,
  changeCurrentMinTemperature,
  changeCurrentMaxTemperature,
  changeCurrentWind,
  changeCurrentHumidity,
  changeCurrentPressure,
} = weatherSlice.actions;

export const city = (state) => state.weather.city;
export const latitude = (state) => state.weather.latitude;
export const longitude = (state) => state.weather.longitude;
export const date = (state) => state.weather.date;

export const currentMainDescription = (state) => state.weather.currentMainDescription;
export const currentDescription = (state) => state.weather.currentDescription;
export const currentIcon = (state) => state.weather.currentIcon;
export const currentTemperature = (state) => state.weather.currentTemperature;
export const currentMinTemperature = (state) => state.weather.currentMinTemperature;
export const currentMaxTemperature = (state) => state.weather.currentMaxTemperature;
export const currentWind = (state) => state.weather.currentWind;
export const currentHumidity = (state) => state.weather.currentHumidity;
export const currentPressure = (state) => state.weather.currentPressure;

export default weatherSlice.reducer;