// Get username from input element ✅
// Get data from https://api.github.com/users/${username}
// Add data to the html page (profile.html)
// When user adds wrong username then show him an alert with "This username is not found"

const inputElement = document.querySelector("#input");
const buttonElement = document.querySelector("#button");
const profilePic = document.querySelector("#avatar_url");
const profileName = document.querySelector("#name");
const bio = document.querySelector("#bio");
const twitterUsernName = document.querySelector("#twitter_username");
const followers = document.querySelector("#followers");

buttonElement.addEventListener("click", async (event) => {
  event.preventDefault();
  const userName = inputElement.value;
  try {
    const data = await getData(userName);
    profileName.textContent = data.name;
    bio.textContent = data.bio;
    twitterUsernName.textContent = data.twitter_username;
    followers.textContent = data.followers;
    profilePic.src = data.avatar_url;
  } catch (err) {
    alert(err);
  }
});

async function getData(userName) {
  const userData = await fetch(`https://api.github.com/users/${userName}`);
  if (userData.ok) {
    return userData.json();
  }
  {
    return Promise.reject(new Error("This username is not found"));
  }
}
