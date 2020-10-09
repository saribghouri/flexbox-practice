const humburger_icon = document.querySelector(
  "#nav-bar .nav-bar .nav-list .humburger"
);

const nav_list = document.querySelector("#nav-bar .nav-bar .nav-list ");

hamburger_icon.addeventlistener("click", () => {
  nav_list.classlist.toggle("open");
  hamburger_icon.classlist.toogle("active");
});

// const  nav_bar  = document.querySelector('#nav-bar .nav-bar .nav-list ');
