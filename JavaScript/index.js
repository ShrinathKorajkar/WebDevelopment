let btn = document.querySelector('button');
btn.addEventListener('click', inputMsg);

function inputMsg(){
    let name = prompt('Enter name : ');
    btn.textContent = 'hi ' + name;
    alert('button name changed')
}

document.getElementById("body").addEventListener("mousemove", (e) => {
    body.style = `background-color : rgb(${e.offsetX},${e.offsetY},0);`;
    // add color picker
  });







// TIMER
let timer = document.getElementById("time");
let timeout = setInterval(() => {
    let now = new Date();           // we can use ternary operator to calculate 12 hour format
    timer.textContent = `${now.getDate()}/${now.getMonth()}/${now.getFullYear()}   ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
}, 1000
);

// setTimeout(() => {
//     clearInterval(timeout)
// },1000)







// NOTES ADDER
let noteId = localStorage.getItem("noteId");
let addNote = document.getElementById("addNote");
let notes = document.getElementById("notes");
// localStorage.clear();
onload = () => {
    if(noteId){
        for(let totalNotes = 1; totalNotes <= noteId; totalNotes++){
            let noteArr = JSON.parse(localStorage.getItem(totalNotes));
            if(noteArr != null){
                let heading = noteArr[0];
                let content = noteArr[1];
                const newNote = document.createElement("div");
                newNote.classList = "col my-3";
                newNote.innerHTML= `<div class="card text-white bg-secondary h-100">
                                        <div class="card-header h5">${heading}</div>
                                        <div class="card-body">
                                            <p class="card-text">
                                                ${content}
                                            </p>
                                        </div>
                                        <div class="card-footer text-center">
                                            <button class="btn btn-danger px-4" id="note${totalNotes}" onclick="deleteNote(this)" >Delete</button>
                                        </div>
                                    </div>`;
                notes.appendChild(newNote);
            }
        }
    }
    else{
        localStorage.setItem("noteId",0);
    }
}

addNote.addEventListener("click",(e) => {
    e.preventDefault();
    noteId++;
    let heading = document.getElementById("heading");
    let content = document.getElementById("content");
    let notesForm = document.getElementById("notesForm");
    if(heading.value == ""){
        heading.value = `Note${noteId}`;
    }
    // XSS ATTACK
    heading.value = heading.value.replace(/</g,"&lt;").replace(/>/g,"&gt");
    content.value = content.value.replace(/</g,"&lt").replace(/>/g,"&gt");

    let noteArr = [heading.value,content.value];
    localStorage.setItem(noteId,JSON.stringify(noteArr));
    localStorage.setItem("noteId",noteId);
    notesForm.submit();
});

function deleteNote(elem){
    let noteTodeleteNote = elem.parentElement.parentElement.parentElement;
    noteTodeleteNote.remove();
    localStorage.removeItem(elem.id.substring(4));
    while(true){
        let nullNote = JSON.parse(localStorage.getItem(noteId));
        if(nullNote != null || noteId == 0){
            break;
        }
        noteId--;
    }
    localStorage.setItem("noteId",noteId);
};







// SEARCH
let search = document.getElementById("searchText");
search.addEventListener("input", (e) => {
    let searchText = search.value.toLowerCase();
    // console.log(searchText);
    let ptags = Array.from(document.getElementsByTagName("p"));
    // let helms = Array.from(document.getElementsByClassName("card-header"));
    // let allelems = [...ptags, ...helms];
    ptags.forEach(element => {
        if(element.textContent.toLowerCase().includes(searchText)){
            element.parentElement.parentElement.parentElement.style.display = "block";
        }
        else{
            element.parentElement.parentElement.parentElement.style.display = "none";
        }
    })
});







// DRAGGABLE IMAGE 
const imgBox = document.querySelector('.imgBox');
const whiteBoxes = document.getElementsByClassName('whiteBox');
// Event listeners for draggable element imgBox
imgBox.addEventListener('dragstart', (e) => {
    e.target.className += ' hold';
    setTimeout(() => {
        e.target.className = 'hide';
    }, 0);      // to make sure this executes at last
});

imgBox.addEventListener('dragend', (e) => {
    e.target.className = 'imgBox';
});

for(let whiteBox of whiteBoxes) {
    whiteBox.addEventListener('dragover', (e) => {    // occurs when draged on elem
        e.preventDefault();
    });

    whiteBox.addEventListener('dragenter', (e) => {   // occurs when entered into elem
        e.target.className += ' dashed'; 
    });

    whiteBox.addEventListener('dragleave', (e) => {   // occurs when left elem
        e.target.className = 'whiteBox'
    });

    whiteBox.addEventListener('drop', (e) => {        // occurs when item droped on elem
        e.target.append(imgBox);
    });
}







// FORM VALIDATION USING REGEX
let submitForm = document.getElementById("formsubmit");
let email = document.getElementById("email");
let password = document.getElementById("password");
let phone = document.getElementById("phone");
let regex;
let emailValid = false, passwordValid = false, phoneValid = false;

email.addEventListener("blur",() => {
    regex = /^([\w\d.-_]+)@([a-z]{4,7})\.([a-z]{3})$/;
    let emailError = document.getElementById("emailError");
    if(regex.test(email.value)){
        emailError.setAttribute("hidden", "true");
        emailValid = true;
    }
    else{
        emailError.removeAttribute("hidden");
        emailValid = false;
    }
});
password.addEventListener("blur",() => {
    regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[?!@#$%^&*])[a-zA-z\d!@#$%^&*?]{6,}$/;
    let passError = document.getElementById("passError");
    if(regex.test(password.value)){
        passError.setAttribute("hidden", "true");
        passwordValid = true;
    }
    else{
        passError.removeAttribute("hidden");
        passwordValid = false;
    }
});
phone.addEventListener("blur",() => {
    regex = /^(\d){10}$/;
    let phoneError = document.getElementById("phoneError");
    if(regex.test(phone.value)){
        phoneError.setAttribute("hidden", "true");
        phoneValid = true;
    }
    else{
        phoneError.removeAttribute("hidden");
        phoneValid = false;
    }
});

submitForm.addEventListener("click", validateForm);
function validateForm(e){
    e.preventDefault();
    let submitError = document.getElementById("submitError");
    if(emailValid && phoneValid && passwordValid){
        submitError.setAttribute("hidden", "true");
        document.getElementById("vform").submit();
    }
    else{
        submitError.removeAttribute("hidden");
    }
}
