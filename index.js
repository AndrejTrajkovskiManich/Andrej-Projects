// Fillters
const filterButtons = document.querySelectorAll("#checkbox > label" )
document.querySelector('#filter-coding').addEventListener("change", coding);
document.querySelector('#filter-marketing').addEventListener("change", marketing);
document.querySelector('#filter-design').addEventListener("change", design);

function activeButton(label){
  filterButtons.forEach(button =>{button.classList.remove("red")})
  label.classList.toggle("red")
}

function hideAllCards(){
    const hideAllCards = document.querySelectorAll(".card");
    hideAllCards.forEach(card=>{
        card.style.display = "none";
    });
}

function showAllCards(){
    const showAllCards = document.querySelectorAll(".card");
    showAllCards.forEach(card=>{
        card.style.display = "inline-block";
    });
}

function coding(e) {
    hideAllCards();
    if(document.querySelector("#filter-coding").checked){
        const codingCards = document.querySelectorAll(".coding");
        codingCards.forEach(codingCard => {
            codingCard.style.display = "inline-block";
        })
        document.querySelector('#filter-marketing').checked = false;
        document.querySelector('#filter-design').checked = false;       
    }else{
        showAllCards();

    }
    activeButton(e.target.parentElement)
}

function marketing(e) {
    hideAllCards();
    if(document.querySelector("#filter-marketing").checked){
        const marketingCards = document.querySelectorAll(".marketing");
        marketingCards.forEach(marketingCard => {
            marketingCard.style.display = "inline-block";
        })
        document.querySelector('#filter-coding').checked = false;
        document.querySelector('#filter-design').checked = false;       
    }else{
        showAllCards();
    }
    activeButton(e.target.parentElement)
}

function design(e) {
    hideAllCards();
    if(document.querySelector("#filter-design").checked){
        const designCards = document.querySelectorAll(".design");
        designCards.forEach(designCard => {
            designCard.style.display = "inline-block";
        })
        document.querySelector('#filter-coding').checked = false;
        document.querySelector('#filter-marketing').checked = false;       
    }else{
        showAllCards();
    }
    activeButton(e.target.parentElement)
}


  //Load more button
  const card = document.querySelectorAll(".card");
  const loadMore = document.querySelector("#button");

  let currentimg = 4
  loadMore.addEventListener("click",function(event){
    for(let i = currentimg; i<currentimg+2;i++){
      if(card[i]){
        card[i].style.display = 'block';
      }
    }
    currentimg += 2;
    if(currentimg >= card.length){
      event.target.style.display = 'none';
    }
  })
  
//Menu
function openNav() {
  document.getElementById("sidemenu").style.width = "100vw";
  document.getElementById("openButton").style.marginLeft = "0";
}

function closeNav() {
  document.getElementById("sidemenu").style.width = "0";
  document.getElementById("openButton").style.marginLeft= "0";
}

