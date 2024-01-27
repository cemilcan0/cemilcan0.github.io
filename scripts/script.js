const loginButton = document.getElementById('loginButton')
const closeButton = document.getElementById('close-btn')
const popup = document.getElementById('popup-1')

loginButton.addEventListener("click", () => {
    popup.style.display = "grid";
});

closeButton.addEventListener("click", () => {
    popup.style.display = "none";
})