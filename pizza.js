var itemcount = 0;
var pepperoni = 0;
var mushrooms = 0;
var olives = 0;
var redonions = 0;
var groundbeef = 0;
var chicken = 0;
var feta = 0;
var mozzarella = 0;
var cheddar = 0;
var meatprice=2;
var veggieprice=1;
var cheeseprice=2;
var subtotal=0;
var tax=0.05;
var total=0;

setInterval(myFunction, 300);

function myFunction() {
    console.log(pepperoni);
    console.log(mushrooms);
    console.log(redonions);
    console.log(feta);
    console.log(mozzarella);
    console.log(cheddar);
    console.log(olives);
    console.log(chicken);
    console.log(groundbeef);
    console.log("itemcount: " + itemcount);
}
function doFunction() {
itemcount = 0;
pepperoni = 0;
mushrooms = 0;
olives = 0;
redonions = 0;
groundbeef = 0;
chicken = 0;
feta = 0;
mozzarella = 0;
cheddar = 0;
document.getElementById("pepperonicount").innerHTML=0;
    document.getElementById("fetacount").innerHTML=0;
    document.getElementById("olivescount").innerHTML=0;
    document.getElementById("groundbeefcount").innerHTML=0;
    document.getElementById("mozzarellacount").innerHTML=0;
    document.getElementById("redonionscount").innerHTML=0;
    document.getElementById("chickencount").innerHTML=0;
    document.getElementById("cheddarcount").innerHTML=0;
    document.getElementById("mushroomscount").innerHTML=0;

}
function pepperoniclick(){
    pepperoni++; 
    itemcount++;
    document.getElementById("pepperonicount").innerHTML=pepperoni;
}
function fetaclick(){
    feta++; 
    itemcount++;
    document.getElementById("fetacount").innerHTML=feta;
}
function olivesclick(){
    olives++; 
    itemcount++;
    document.getElementById("olivescount").innerHTML=olives;
}
function mushroomsclick(){
    mushrooms++; 
    itemcount++;
    document.getElementById("mushroomscount").innerHTML=mushrooms;
}
function groundbeefclick(){
    groundbeef++; 
    itemcount++;
    document.getElementById("groundbeefcount").innerHTML=groundbeef;
}
function chickenclick(){
    chicken++; 
    itemcount++;
    document.getElementById("chickencount").innerHTML=chicken;
}
function cheddarclick(){
    cheddar++; 
    itemcount++;
    document.getElementById("cheddarcount").innerHTML=cheddar;
}
function redonionsclick(){
    redonions++; 
    itemcount++;
    document.getElementById("redonionscount").innerHTML=redonions;
}
function mozzarellaclick(){
    mozzarella++; 
    itemcount++;
    document.getElementById("mozzarellacount").innerHTML=mozzarella;
}


 function receiptFunction(){
     document.getElementById("receipt").style.display="block";
     mathFunction();
     document.getElementById("Subtotal").innerHTML=subtotal;
     document.getElementById("Tax").innerHTML="6%";
     document.getElementById("Total").innerHTML=total;
     
 }

function mathFunction(){
    subtotal= 8+
        meatprice * (pepperoni+chicken+groundbeef)
        + veggieprice * (olives+redonions+mushrooms)
        + cheeseprice * (feta+cheddar+mozzarella);
    total=subtotal + tax * subtotal;
    
}

