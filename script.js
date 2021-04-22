fetch("https://api.github.com/users/Nataly-li")
  .then((res) => res.json())
  .then((json) => {
    const avatarUrl = json.avatar_url;
    const name = json.name;
    const url = json.url;
    const htmlUrl = json.html_url;
    console.log(json);
    let img = new Image();
    img.src = "https://avatars.githubusercontent.com/u/63913225?v=4";
  });
