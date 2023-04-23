document.querySelector('#filter-coding').addEventListener("change", coding);
document.querySelector('#filter-marketing').addEventListener("change", marketing);
document.querySelector('#filter-design').addEventListener("change", design);

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

function coding() {
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
}

function marketing() {
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
}

function design() {
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
}


