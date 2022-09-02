const head_content_button = document.querySelector('.head_content_button');
const nav_head_button = document.querySelector('.nav_head_button');
const button = document.querySelector('.button');
const footer_logo = document.querySelector('.footer_logo');

head_content_button.onclick = () => {
   footer_logo.scrollIntoView({ behavior: "smooth" });
}

nav_head_button.onclick = () => {
   footer_logo.scrollIntoView({ behavior: "smooth" });
}

button.onclick = () => {
   footer_logo.scrollIntoView({ behavior: "smooth" });
}