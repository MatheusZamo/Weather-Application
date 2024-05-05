const cityForm = document.querySelector('[data-js="change-location"]')
const cityNameContainer = document.querySelector('[data-js="name"]')
const cityWeatherContainer = document.querySelector('[data-js="weather"]')
const cityTemperatureContainer = document.querySelector('[data-js="temperature"]')
const cityCard = document.querySelector('[data-js="card"]')
const cityImg = document.querySelector('[data-js="time"]')
const cityIcon = document.querySelector('[data-js="time-icon"]')


cityForm.addEventListener('submit', async event => {
    event.preventDefault()

    const inputValue = event.target.city.value
    const [{ Key, LocalizedName }] = await getCityData(inputValue)
    const [{ WeatherText, Temperature, IsDayTime, WeatherIcon}] = await getCityWeather(Key)
    const img = `<img src = ./src/icons/${WeatherIcon}.svg>`

    if(cityCard.classList.contains('d-none')){
        cityCard.classList.remove('d-none')
    }

    if(IsDayTime){
        cityImg.src = './src/day.svg'
    } else {
        cityImg.src = './src/night.svg'
    }

    cityIcon.innerHTML = img
    cityNameContainer.textContent = LocalizedName
    cityWeatherContainer.textContent = WeatherText
    cityTemperatureContainer.textContent = Temperature.Metric.Value

    cityForm.reset()
})