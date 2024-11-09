function fetchRandomUser() {
    fetch('https://randomuser.me/api')
      .then(response => {
        if (!response.ok) {
          throw new Error('Помилка мережі');
        }
        return response.json();
      })
      .then(data => {
        displayUserInfo(data.results[0]);
      })
      .catch(error => {
        console.error('Помилка:', error);
      });
  }
  
  function displayUserInfo(user) {
    const userInfoDiv = document.getElementById('user-info');
    
    const picture = user.picture.large; 
    const name = `${user.name.first} ${user.name.last}`; 
    const country = user.location.country; 
    const postcode = user.location.postcode; 
    const coordinates = `Широта: ${user.location.coordinates.latitude}, Довгота: ${user.location.coordinates.longitude}`; 
    
    userInfoDiv.innerHTML = `
      <img src="${picture}" alt="User Picture">
      <p><strong>Ім'я:</strong> ${name}</p>
      <p><strong>Країна:</strong> ${country}</p>
      <p><strong>Поштовий індекс:</strong> ${postcode}</p>
      <p><strong>Координати:</strong> ${coordinates}</p>
    `;
  }
  
  document.getElementById('load-user-btn').addEventListener('click', fetchRandomUser);
  