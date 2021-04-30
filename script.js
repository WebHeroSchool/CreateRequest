let preloader = document.querySelector(".preloader");
let username = window.location.toString().split()[1];
let url = "https://api.github.com/users/";
let date = new Date();

const getName = new Promise((resolve, reject) => {
  setTimeout(
    () =>
      username === undefined
        ? resolve((username = "Nataly-li"))
        : reject("Пользователь не найден"),
    3000
  );
});

const getUrl = new Promise((resolve, reject) => {
  setTimeout(() => (url ? resolve(url) : reject("Ссылка не найдена.")), 3000);
});

const getDate = new Promise((resolve, reject) => {
  setTimeout(
    () => (date ? resolve(date) : reject("Ошибка вычисления времени.")),
    3000
  );
});

Promise.all([getName, getUrl, getDate])
  .then(([username, url, date]) => fetch(`${url}${username}`))
  .then((res) => res.json())
  .then((json) => {
    setTimeout(() => (preloader.style.display = "none"), 3000);

    if (!json.name) {
      alert("Информация о пользователе недоступна.");
      document.body.innerHTML = "Пользователь не найден.";
    }

    let nameLink = document.createElement("a");
    nameLink.id = "link";
    nameLink.style.textDecoration = "none";
    nameLink.style.color = "#8f11f0";
    nameLink.href = json.html_url;
    nameLink.title = "Link";
    nameLink.innerHTML = json.name;
    document.body.appendChild(nameLink);

    if (!json.name) {
      nameLink.innerHTML = "Natalie";
    }

    let divBio = document.createElement("div");
    divBio.id = "bio";
    divBio.style.color = "#09cbd9";
    if (json.bio) {
      divBio.innerHTML = json.bio;
    } else {
      divBio.innerHTML = "Student of WebHero School";
    }

    document.body.appendChild(divBio);
    let img = new Image(285, 285);
    img.src = json.avatar_url;
    document.body.appendChild(img);

    let dateBlock = document.createElement("div");
    dateBlock.id = "date";
    dateBlock.style.color = "#09cbd9";
    dateBlock.style.fontSize = "0.6em";
    dateBlock.innerHTML = date;
    document.body.appendChild(dateBlock);
  });
