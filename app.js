const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); //Se cambia 'name' a '.name' porque la primera no existe
const $b = document.querySelector('.blog'); //Se cambia '#blog' a '.blog'porque la primera no existe
const $l = document.querySelector('.location');

async function displayUser(username) { //Se agrega async por usar await
  $n.textContent = 'cargando...';
  const data = await response.json(); // data no esta definida, se debe ocupar un documento JSON con const data = await response.json();
  console.log(data);
  $n.textContent = '${data.name}'; 
  $b.textContent = '${data.blog}';
  $l.textContent = '${data.location}';
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);