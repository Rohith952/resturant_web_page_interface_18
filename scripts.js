let food=document.getElementById("food");
let food1=document.getElementById("food1");
let food2=document.getElementById("food2");
let food3=document.getElementById("food3");
let food4=document.getElementById("food4");
food1.addeventListener("click",()=>{
    food.style.backgroundImage="url('images/food1.jpg')";
});
food2.addeventListener("click",()=>{
    food.style.backgroundImage="url('images/food2.jpg')";
});
food3.addeventListener("click",()=>{
    food.style.backgroundImage="url('images/food3.jpg')";
});
food4.addeventListener("click",()=>{
    food.style.backgroundImage="url('images/food4.jpg')";
});