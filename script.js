let username = window.location.toString().split("=")[1];

fetch(`https://api.github.com/users/${username}`)
  .then((res) => res.json())
  .then((json) => {
    try {
      let nameLink = document.createElement("a");
      nameLink.id = "link";
      nameLink.href = json.html_url;
      nameLink.title = "Link";
      nameLink.innerHTML = json.name;
      document.body.appendChild(nameLink);

      if (!userName || userName == "") {
        nameLink.innerHTML = "Natalie";
      }

      let divBio = document.createElement("div");
      divBio.id = "bio";
      if (json.bio === null) {
        divBio.innerHTML = "Every cloud has a silver lining.";
      }

      document.body.appendChild(divBio);
      let img = new Image(250, 250);
      img.src = json.avatar_url;
      document.body.appendChild(img);
    } catch (err) {
      document.body.innerHTML = "Информация о пользователе не найдена.";
    }
  });
