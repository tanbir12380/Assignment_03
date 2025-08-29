let arrayOfHeart = document.getElementsByClassName("heart-icon");
for(let heart of arrayOfHeart){
  heart.addEventListener('click',function(event){
    let heartCount = parseInt(document.getElementById("heart-total-count").innerText) + 1;
    document.getElementById("heart-total-count").innerText = heartCount;
  })
}


let callButtons = document.getElementsByClassName("call-btn");
for(let call of callButtons){
  call.addEventListener('click',function(event){
    let clicked = event.target;
    let parent = clicked.parentNode.parentNode;
    // console.log(clicked);
    // console.log(clicked.parentNode);
    // console.log(clicked.parentNode.parentNode);
    // console.log(parent.childNodes[1]);
    // console.log(parent.childNodes[5]);

let dateNow = new Date();
let timeNow = dateNow.toLocaleTimeString(); 

let coin = document.getElementById("coin-total-count");
let coinsCount = parseInt(coin.innerText);
if(coinsCount>=20){
  coinsCount -= 20;
  coin.innerText = coinsCount;
}
else{
  alert('Not enough coin to make a call, minimum 20 coins are required to make a call ');
  return;
}


let alertText = "📞"+" calling "+parent.childNodes[1].innerText+" "+parent.childNodes[5].innerText+"...";
alert(alertText);






let historyContain = document.createElement('div');
let serviceDetail =  document.createElement('div');
let serviceName = document.createElement('p');
serviceName.innerText = parent.childNodes[1].innerText;
let serviceNum = document.createElement('p');
serviceNum.innerText = parent.childNodes[5].innerText;
let date = document.createElement('p');


date.innerText = timeNow;



historyContain.appendChild(serviceDetail);
historyContain.appendChild(date);
serviceDetail.appendChild(serviceName);
serviceDetail.appendChild(serviceNum);



historyContain.classList.add("history-record");
serviceName.classList.add("his-service-name");
serviceNum.classList.add("his-service-num");
date.classList.add("record-time");

let historyContainer = document.getElementById("history");
historyContainer.appendChild(historyContain);

  });
}


let callButtons1 = document.getElementsByClassName("fa-phone");
for(let call of callButtons1){
  call.addEventListener('click',function(event){
    event.stopPropagation();
    let clicked = event.target;
    let parent = clicked.parentNode.parentNode.parentNode;
    // console.log(clicked);
    // console.log(clicked.parentNode);
    // console.log(clicked.parentNode.parentNode);
    // console.log(clicked.parentNode.parentNode.parentNode);
    // console.log(parent.childNodes[1]);
    // console.log(parent.childNodes[5]);

let dateNow = new Date();
let timeNow = dateNow.toLocaleTimeString(); 

let coin = document.getElementById("coin-total-count");
let coinsCount = parseInt(coin.innerText);
if(coinsCount>=20){
  coinsCount -= 20;
  coin.innerText = coinsCount;
}
else{
  alert('Not enough coin to make a call, minimum 20 coins are required to make a call ');
  return;
}


let alertText = "📞"+" calling "+parent.childNodes[1].innerText+" "+parent.childNodes[5].innerText+"...";
alert(alertText);

let historyContain = document.createElement('div');
let serviceDetail =  document.createElement('div');
let serviceName = document.createElement('p');
serviceName.innerText = parent.childNodes[1].innerText;
let serviceNum = document.createElement('p');
serviceNum.innerText = parent.childNodes[5].innerText;
let date = document.createElement('p');


date.innerText = timeNow;



historyContain.appendChild(serviceDetail);
historyContain.appendChild(date);
serviceDetail.appendChild(serviceName);
serviceDetail.appendChild(serviceNum);



historyContain.classList.add("history-record");
serviceName.classList.add("his-service-name");
serviceNum.classList.add("his-service-num");
date.classList.add("record-time");

let historyContainer = document.getElementById("history");
historyContainer.appendChild(historyContain);

  });
}







document.getElementById("history-btn").addEventListener('click', function(event){

  let history = document.getElementById("history");
  let historyHead = document.getElementById("history-head");

  // console.log(historyHead);

  history.innerText = "";
  history.appendChild(historyHead);


})






let copyButton = document.getElementsByClassName("copy-btn");
for(let button of copyButton){
  button.addEventListener('click', function(event){
         let totalCopy = document.getElementById("copy-total-count");
         console.log(totalCopy);
         let copyCount = parseInt(totalCopy.innerText) + 1;


let parent = event.target.parentNode.parentNode;
let number = parent.childNodes[5].innerText;

navigator.clipboard.writeText(number);

let messege = "The number has been copied : " + number;
alert(messege);

         totalCopy.innerText = copyCount;
  })
}





let copyButton1 = document.getElementsByClassName("fa-copy");
for(let button of copyButton1){
  button.addEventListener('click', function(event){
         let totalCopy = document.getElementById("copy-total-count");
         console.log(totalCopy);
         let copyCount = parseInt(totalCopy.innerText) + 1;


let parent = event.target.parentNode.parentNode.parentNode;
let number = parent.childNodes[5].innerText;

navigator.clipboard.writeText(number);

let messege = "The number has been copied : " + number;
alert(messege);

         totalCopy.innerText = copyCount;
  })
}



document.getElementById("mob-services").addEventListener('click',function(event){
  document.getElementById("service-contain").style.display = 'grid';
  document.getElementById("history").style.display = 'none';
})

document.getElementById("mob-history").addEventListener('click',function(event){
  document.getElementById("service-contain").style.display = 'none';
  document.getElementById("history").style.display = 'block';
})
