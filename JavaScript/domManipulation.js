 // ROOT NODE
 console.log(document.documentElement);
 console.log(document.head);
 console.log(document.body);




 // children
 console.log(document.body.childNodes);
 console.log(document.body.children);
 console.log(document.body.firstChild);
 console.log(document.body.lastChild);
 console.log(document.body.firstElementChild);
 console.log(document.body.lastElementChild);
 for (node of document.body.children) {
   console.log(node);
 }




 // SIBLINGS
 const ultag = document.body.children[0];
 console.log(ultag.nextSibling);
 console.log(ultag.nextElementSibling);
 const litag = ultag.children[0];
 console.log(litag.nextElementSibling);




 // TABLES
 const tabletag = document.body.children[3];
 console.log(tabletag);
 console.log(tabletag.tBodies[0].rows[0].cells); //tHead tfoot
 console.log(tabletag.tBodies[0].rows[0].cells[0].textContent);
 console.log(
   (tabletag.tBodies[0].rows[0].cells[0].style =
     "background-color : orange;")
 );




 // ID AND CLASS
 console.log(element);
 element.style.backgroundColor = "red";
 console.log(element);
 const utag = document.getElementById("element");
 utag.style.background = "grey";
 listItem = document.getElementsByClassName("list-item");
 console.log(listItem);
 console.log(document.getElementsByTagName("table"));





 // QUERY SELECTOR
 const items = document.querySelectorAll(".list-item");
 const ele = document.querySelector("#element");
 console.log(items);
 console.log(ele);
 const lschild = document.querySelectorAll("ul > li:nth-child(2)");
 console.log(lschild[0].textContent);





 // ATTRIBUTES
 console.log(element.id);
 console.log(element.getAttribute("data"));
 console.log(element.setAttribute("order-placed", "pending"));
 console.log(element.getAttribute("order-placed"));
 console.log(element.hasAttribute("order-placed"));
 console.log(element.removeAttribute("order-placed"));
 console.log(element.classList);
 console.log(element.attributes);





 // CREATING AND REMOVING
 const newDiv = document.createElement("div");
 const newText = document.createTextNode("hey Phoenix");
 newDiv.appendChild(newText);
 body.append(newDiv);
 body.prepend(newDiv);
 body.after(newDiv);
 body.before(newDiv);
 firstdiv.replaceWith(newDiv);
 newDiv.remove();

 newDiv.textContent = "hey sharky";
 newDiv.innerHTML = `
   <ul>
     <li><a href="http://google.com">google.com</a></li>
     <li><a href="index.html">index.html</a></li>
     <li><a href="local/path">local path</a></li>
     <li><a href="http://internal.com">internal.com</a></li>
   </ul>`;





   
 // EVENTS
 clickbtn.onclick = function () {
   //pass reference
   alert("thanks for clicking");
 };
 function callme(event) {
   alert("thanks for clicking");
   console.log(this);
   console.log(event);
   console.log(event.type);
   console.log(event.currentTarget);
   console.log(event.clientX);
   console.log(event.clientY);
 }
 clickbtn.onclick = callme;
 clickbtn.addEventListener("click", callme);
 clickbtn.removeEventListener("click", callme);