function toggleSearch() {
    var searchInput = document.getElementById("searchInput")
    searchInput.classList.toggle("active")
}
function toggleNotification() {
    var notification = document.querySelector(".notification-show")
    notification.classList.toggle("active")
}
function darkMode() {
    var element = document.body;
    const headNav = document.querySelector(".head-nav");
    const leftMenu = document.querySelector(".left-menu");
    const post = document.querySelector(".post");
    const friendsMenu = document.querySelector(".friends-menu");

    friendsMenu.classList.toggle("dark-mode");
    post.classList.toggle("dark-mode");
    // leftMenu.classList.toggle("dark-mode");
    headNav.classList.toggle("dark-mode");
    element.classList.toggle("dark-mode");
}


