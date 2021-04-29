const preLoader = document.querySelector(".preloader");
setTimeout(() => preLoader.style.display = "none", 3000);

let username = window.location.toString().split()[1];
let url = 'https://api.github.com/users/';
let date = new Date();

const getName = new Promise((resolve, reject) => {
  setTimeout(() => username === undefined ? resolve(username = "Nataly-li") : reject("Пользователь не найден"), 3000);
});

const getUrl = new Promise((resolve, reject) => {
  setTimeout(() => url ? resolve(url) : reject("Ссылка не найдена"), 3000);
});

const getDate = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(date)
  }, 3000);
});

Promise.all([getName, getUrl, getDate])
  .then(([username, url, date]) => fetch(`${url}${username}`))
  .then((res) => res.json())
  .then((json) => {
    if (!json.name) {
      alert("Информация о пользователе недоступна.");
      document.body.innerHTML = "Пользователь не найден.";
    }
    
    alert(date);

    let nameLink = document.createElement("a");
    nameLink.id = "link";
    nameLink.href = json.html_url;
    nameLink.title = "Link";
    nameLink.innerHTML = json.name;
    document.body.appendChild(nameLink);

    if (!json.name) {
      nameLink.innerHTML = "Natalie";
    }

    let divBio = document.createElement("div");
    divBio.id = "bio";
    if (json.bio) {
      divBio.innerHTML = json.bio;
    } else {
      divBio.innerHTML = "Student of WebHero School";
    }

    document.body.appendChild(divBio);
    let img = new Image(250, 250);
    img.src = json.avatar_url;
    document.body.appendChild(img);
  });
