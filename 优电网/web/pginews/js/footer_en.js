var body = document.body;
var head = document.head;

head.title = "Upowergrid";
//footer
var footerAllDiv = document.createElement("div");
footerAllDiv.className = "footer-all";

var footer = document.createElement("div");
footer.className = "footer";

var footerContainer = document.createElement("div");
footerContainer.className = "foot container";

var logo = document.createElement("div");
logo.className = "logo";
logo.innerHTML = "<img src = '../img/FOOTER/logo1.png'>";

var separate = document.createElement("div");
separate.className = "separate";
separate.innerHTML = "<img src='../img/FOOTER/logo1.png' style='width: 4%;'>";

var contact = document.createElement("div");
contact.className = "contact";
var contactP = document.createElement("p");
contactP.innerText = "Contact Us";

var enPhone = document.createElement("div");
enPhone.className = "en";
enPhone.innerHTML = '<img src="../img/FOOTER/小图标%201.png" style="width: 5%; margin-bottom: 10px; margin-right: 15px;"><p>phone：0773-2290083</p>';

var enEmail = document.createElement("div");
enEmail.className = "en";
enEmail.innerHTML = '<img src="../img/FOOTER/小图标%202.png" style="width: 5%; margin-bottom: 10px; margin-right: 15px;"><p>E-mail：18788888888@163.com</p>';

var enAdress = document.createElement("div");
enAdress.className = "en";
enAdress.innerHTML = '<img src="../img/FOOTER/小图标%203.png" style="width: 4%; margin-bottom: 10px; margin-right: 18px;"><p>Address: Youchuang Space Power Grid Team, Guilin University of Electronic Technology</p>';

contact.appendChild(contactP);
contact.appendChild(enPhone);
contact.appendChild(enEmail);
contact.appendChild(enAdress);

var QR = document.createElement("div");
QR.className = "QR";
QR.innerHTML = '<img src="../img/FOOTER/二维码.png" style="width: 70%;">';

var QRText = document.createElement("div");
QRText.setAttribute("id","QR");
QRText.innerHTML = '<p>扫一扫<br>关注微信公众号</p>';

var divBackground = document.createElement("div");
divBackground.className = "footer-background";
divBackground.setAttribute("id","container");
divBackground.innerHTML = '<div id="output"></div>';

footerAllDiv.appendChild(footer);
footerAllDiv.appendChild(divBackground);
footer.appendChild(footerContainer);
footerContainer.appendChild(logo);
footerContainer.appendChild(separate);
footerContainer.appendChild(contact);
footerContainer.appendChild(QR);
footerContainer.appendChild(QRText);

body.appendChild(footerAllDiv);