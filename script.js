let arrayOfHeart = document.getElementsByClassName("heart-icon");
for(let heart of arrayOfHeart){
  heart.addEventListener('click',function(event){
    let heartCount = parseInt(document.getElementById("heart-total-count").innerText) + 1;
    document.getElementById("heart-total-count").innerText = heartCount;
  })
}

