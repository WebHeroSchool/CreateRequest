fetch("https://api.github.com/users/Nataly-li")
  .then((res) => res.json())
  .then((json) => {
    try {
      let userName = window.location.toString().split()[0].slice(49, 58);

      let nameLink = document.createElement("a");
      nameLink.id = "link";
      nameLink.href = json.html_url;
      nameLink.title = "Link";
      nameLink.innerHTML = userName;
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
