vegcount=0;
dosacount=0;
mealscount=0;
northmealscount=0;


vegrate=80;
dosarate=60;
mealsrate=120;
northmealsrate=100;

var total = 0;

function add(){
    const meals=document.querySelector('input[name="order"]:checked').value;
    if(meals=="item1"){
        // mealtype=meals.value;
        vegcount+=1;
        console.log("meals")
        document.getElementById("vegcount").textContent=vegcount;
    }
    else if (meals=="item2"){
        //  mealtype=meals.value;
        dosacount+=1;
        document.getElementById("dosacount").textContent=dosacount;
    }
    else if(meals=="item3"){
        //  mealtype=meals.value;
        mealscount+=1;
        document.getElementById("mealscount").textContent=mealscount;
    }
     else if(meals=="item4"){
        //  mealtype=meals.value;
        northmealscount+=1;
        document.getElementById("northmealscount").textContent=northmealscount;
     }

}

 function Total(){
    // total+=parseInt(document.getElementById("vegcount").textContent)*p
    total = vegcount*vegrate + dosacount*dosarate + mealscount*mealsrate + northmealscount*northmealsrate;
    document.getElementById("total").textContent=total;
 }
