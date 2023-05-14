let all_elem = document.querySelectorAll("div.header-banner");
for (let i = 0 ; i < all_elem.length; i++){
    if (i != 0){
        all_elem[i].style.display = "none";
    }
}
let counter = 1;
let drecounter = 0;
function changeBanner(){

    //display the present elem
    all_elem[counter].style.display = "block";


    //hide the past elem
    all_elem[drecounter].style.display = "none";
    // console.log(counter, drecounter);



    counter+=1;
    drecounter = counter -1;



    if (counter == all_elem.length){
        counter = 0;
    }
}

setInterval(changeBanner, 15000);