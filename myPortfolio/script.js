

const text = document.querySelector('.myName');
const tag = document.querySelector('.myTag');
//console.log(text);
const strText = text.textContent;
const tagStr = tag.textContent;
//console.log(tagStr);
const splitText = strText.split("");
const splitTextp = tagStr.split("");
//console.log(splitTextp); 
text.textContent = "";
tag.textContent = "";


for (let i = 0; i< splitText.length; i++) {
  text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0 ;
let timer = setInterval(onTick, 50);

function onTick(){
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;
    if(char === splitText.length){
        complete();
        return;
    }
}

function complete(){
    clearInterval(timer);
    timer = null ;
}

for (let i = 0; i< splitTextp.length; i++) {
    tag.innerHTML += "<span>" + splitTextp[i] + "</span>";
  }

  let char2 = 0;
  let timer2 = setInterval(pTag,50);

  function pTag(){
    const span2 = tag.querySelectorAll('span')[char2];
    span2.classList.add('fade');
    char2++;
    if(char2 === splitTextp.length){
      close();
      return;
    }
  }

  function close(){
    clearInterval(timer2);
    timer = null ;
  }
  



const tabLinks    = document.querySelectorAll('.tab-links');
const tabContents = document.querySelectorAll('.tab-contents');


function opentab(tabname){
    for (element of tabLinks) {
        element.classList.remove("active-link");   
    }

    for (element of tabContents) {
        element.classList.remove("active-tab");   
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

const sidemenu = document.getElementById('sidemenu');

function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-200px";
}

// const activeData = document.querySelectorAll(".tab-links");

   
     



  const scriptURL = 'https://script.google.com/macros/s/AKfycbwNJSIijsmx0dzFDP8yLyl9zvfkUTuNb7WTTU9wj_p3dux9XWqWcJrWPc2bRF23jGlC/exec'
  const form = document.forms['submit-to-google-sheet'];
  const msg = document.getElementById('msg');

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message Sent Successfully.Thank you so much <br> I will response you soon 😊 ";
        setTimeout(function(){
            msg.innerHTML = "";
        },4000)
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })
