
var body = document.body;

var nav = document.createElement("nav");
nav.className = "navbar navbar-inverse navbar-fixed-top";

body.appendChild(nav);

var divContainer = document.createElement("div");
divContainer.className = "banner-container";


nav.appendChild(divContainer);

//中英文
var divTranlate = document.createElement("div");
divTranlate.className = "translate"

var span = document.createElement("span");
span.innerHTML = '<a>English </a> &nbsp; | &nbsp; <a href="http://api.ncfun.top:8081/web/sy/index.html">中文</a>';

//搜索框
var form = document.createElement("form");

form.className = "navbar-form navbar-top";

var divFromGroup = document.createElement("div");
divFromGroup.className = "form-group";
var input = document.createElement("input");
input.type = "text";
input.className = "form-input";
divFromGroup.appendChild(input);


var buttonSearch = document.createElement("button");
buttonSearch.type = "submit";
buttonSearch.className = "btn-search";

var searchImg = document.createElement("img");
searchImg.src = "../sy/img/组1/搜索框.png";
buttonSearch.appendChild(searchImg);

form.appendChild(divFromGroup);
form.appendChild(buttonSearch);
form.appendChild(span);
divTranlate.appendChild(form);


//banner
var navbarHeight = document.createElement("div");
navbarHeight.className = "navbar-height";


var navList = document.createElement("div");
navList.className = "nav-list";
navList.innerHTML = "<a class='navbar-brand' href='#'><img style='width:140px' src='../sy/img/FOOTER/LOGO.png' ></a>";

var navUL = document.createElement("ul");
navUL.className = "nav navbar-nav";
navUL.setAttribute("id","navbar");

navbarHeight.appendChild(navList);
navList.appendChild(navUL);

divContainer.appendChild(divTranlate);
divContainer.appendChild(navbarHeight);