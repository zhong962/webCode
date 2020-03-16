
var body = document.body;

var nav = document.createElement("nav");
nav.className = "navbar navbar-inverse ";


var divContainer = document.createElement("div");
divContainer.className = "container";

//搜索框
var form = document.createElement("form");

form.className = "navbar-form navbar-left";

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
searchImg.src = "../img/组1/搜索框.png";
buttonSearch.appendChild(searchImg);

form.appendChild(divFromGroup);
form.appendChild(buttonSearch);
//中英文
var divTranlate = document.createElement("div");
divTranlate.className = "translate"
var tranlateP = document.createElement("p");
tranlateP.innerHTML = "<a href='../../sy_en/index.html'>English</a> &nbsp | &nbsp <a href='../../sy/index.html' >中文</a>";
divTranlate.appendChild(tranlateP);

divContainer.appendChild(form);
divContainer.appendChild(divTranlate);

//banner
var bannerNavContainer = document.createElement("div");
bannerNavContainer.className = "navbar-height container";


var navbarHeader = document.createElement("div");
navbarHeader.className = "navbar-header";
navbarHeader.innerHTML = "<a class='navbar-brand' href='#'><img src='../img/FOOTER/LOGO.png' ></a>";

var navList = document.createElement("div");
navList.className = "nav-list";
var navUL = document.createElement("ul");
navUL.className = "nav navbar-nav";
navUL.setAttribute("id","navbar");

bannerNavContainer.appendChild(navbarHeader);
bannerNavContainer.appendChild(navList);
navList.appendChild(navUL);

nav.appendChild(divContainer);
nav.appendChild(bannerNavContainer);
body.appendChild(nav);



