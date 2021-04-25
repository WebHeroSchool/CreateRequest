let username = window.location.toString().split("=")[1];

if (username === undefined) {
  username = "Nataly-li";
};

fetch(`https://api.github.com/users/${username}`)
  .then((res) => res.json())
  .then((json) => {
    if (!json.name) {
      alert("Информация о пользователе недоступна.");
      document.body.innerHTML = "Пользователь не найден.";
    }

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
