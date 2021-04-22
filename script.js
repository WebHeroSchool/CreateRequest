fetch("https://api.github.com/users/Nataly-li")
  .then((res) => res.json())
  .then((json) => {
    let nameLink = document.createElement("a");
    nameLink.id = "link";
    nameLink.href = json.html_url;
    nameLink.title = "Link";
    nameLink.innerHTML = "Nataly-li";
    document.body.appendChild(nameLink);

    let divBio = document.createElement("div");
    divBio.id = "bio";
    if (json.bio === null) {
      divBio.innerHTML = "Every cloud has a silver lining.";
    }

    document.body.appendChild(divBio);
    let img = new Image(250, 250);
    img.src = json.avatar_url;
    img.style.display = "block";
    document.body.appendChild(img);
  })
  .catch((err) => console.log("Информация о пользователе не надена."));
