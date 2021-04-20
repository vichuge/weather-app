import './style.css';

const component = () => {
  getWeather();
  const btnModal = document.getElementById('findWeather');
  btnModal.addEventListener('click', () => { changeCity(); });
  const openModal = document.getElementById('openModal');
  openModal.addEventListener('click', emptyVals);
};

const closeModal = () => {
  document.getElementById('closeModal').click();
};

const emptyVals = () => {
  const errors = document.getElementById('error');
  errors.innerHTML = '';
  document.getElementById('city').value = '';
};

const changeCity = () => {
  const city = document.getElementById('city').value;
  if (city === '') {
    const errors = document.getElementById('error');
    errors.innerHTML = 'City can\'t be blank';
    return;
  }
  getWeather(city);
  closeModal();
};

async function getWeather(city = 'London') {
  try {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c6f720738d4ba0af3722fd5e0551d616&units=metric`);
    const wData = await response.json();

    const myCity = document.getElementById('myCity');
    myCity.innerHTML = wData.name;
    const w = document.getElementById('w');
    w.innerHTML = `${wData.main.temp} °C`;
  } catch (error) {
    const myCity = document.getElementById('myCity');
    myCity.innerHTML = 'Error!';
    const w = document.getElementById('w');
    w.innerHTML = 'Error!';
  }
}

component();
