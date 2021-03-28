//Storing values to local storage
localStorage.setItem("ProductPrice",0);
localStorage.setItem("SizePrice",3500);
localStorage.setItem("ExtraPrice",0);
function changeproduct1(){
        localStorage.setItem("ProductPrice",1000);
}
function changeproduct2(){
        localStorage.setItem("ProductPrice",2000);
}
function changeproduct3(){
        localStorage.setItem("ProductPrice",2500);
}
function changeproduct4(){
        localStorage.setItem("ProductPrice",800);
}
function changesize1(){
        localStorage.setItem("SizePrice",0);
}
localStorage.setItem("SizePrice",2500);
function changesize2(){
        localStorage.setItem("SizePrice",2500);
}
function changesize3(){
        localStorage.setItem("SizePrice",5000);
}
function changeextra1(){
        localStorage.setItem("ExtraPrice",500);
}
function changeextra2(){
        localStorage.setItem("ExtraPrice",1000);
}
function changeextra3(){
        localStorage.setItem("ExtraPrice",1500);
}


//calculating the cost of the items
var PP=(parseInt(localStorage.ProductPrice));
var SP=(parseInt(localStorage.SizePrice));
var EP=(parseInt(localStorage.ExtraPrice));
var tot=PP+SP+EP;
var Total=0;

//add to order
var countclick =0;
var Total=0; 
function atobtn(){
        countclick=countclick+1;
        if(countclick<=4){
                if(countclick==1){
                        var PP=(parseInt(localStorage.ProductPrice));
                        var SP=(parseInt(localStorage.SizePrice));
                        var EP=(parseInt(localStorage.ExtraPrice));
                        var tot=PP+SP+EP;
                        var radiomanufacture = document.getElementsByName("manufacture")
                        .forEach(manufacture =>{
                                if(manufacture.checked){
                                        var radiomanufacture = document.getElementsByName("products")
                                        .forEach(products =>{
                                        if(products.checked){
                                                var radiomanufacture = document.getElementsByName("size")
                                                .forEach(size =>{
                                                if(size.checked){
                                                        var radiomanufacture = document.getElementsByName("Extras")
                                                        .forEach(Extras =>{
                                                        if(Extras.checked){
                                                                Total=Total+tot;
                                                                document.getElementById("showorders").innerHTML = manufacture.value+" "+size.value+" "+products.value+" with "+Extras.value+"  The Price is= "+tot;
                                        }
                                        
                                });
                                        }
                                        
                                });       
                                        }
                                });        
                                }
                        });
                }
                else if(countclick==2){
                        var PP=(parseInt(localStorage.ProductPrice));
                        var SP=(parseInt(localStorage.SizePrice));
                        var EP=(parseInt(localStorage.ExtraPrice));
                        var tot=PP+SP+EP;
                        var radiomanufacture = document.getElementsByName("manufacture")
                        .forEach(manufacture =>{
                                if(manufacture.checked){
                                        var radiomanufacture = document.getElementsByName("products")
                                        .forEach(products =>{
                                        if(products.checked){
                                                var radiomanufacture = document.getElementsByName("size")
                                                .forEach(size =>{
                                                if(size.checked){
                                                        var radiomanufacture = document.getElementsByName("Extras")
                                                        .forEach(Extras =>{
                                                        if(Extras.checked){
                                                                Total=Total+tot;
                                                                document.getElementById("showorders2").innerHTML = manufacture.value+" "+size.value+" "+products.value+" with "+Extras.value+"  The Price is= "+tot;
                                        }
                                });
                                        }
                                });       
                                        }
                                });        
                                }
                        });
                        
                }
                else if(countclick==3){
                        var PP=(parseInt(localStorage.ProductPrice));
                        var SP=(parseInt(localStorage.SizePrice));
                        var EP=(parseInt(localStorage.ExtraPrice));
                        var tot=PP+SP+EP;
                        var radiomanufacture = document.getElementsByName("manufacture")
                        .forEach(manufacture =>{
                                if(manufacture.checked){
                                        var radiomanufacture = document.getElementsByName("products")
                                        .forEach(products =>{
                                        if(products.checked){
                                                var radiomanufacture = document.getElementsByName("size")
                                                .forEach(size =>{
                                                if(size.checked){
                                                        var radiomanufacture = document.getElementsByName("Extras")
                                                        .forEach(Extras =>{
                                                        if(Extras.checked){
                                                                Total=Total+tot;
                                                                document.getElementById("showorders3").innerHTML = manufacture.value+" "+size.value+" "+products.value+" with "+Extras.value+" The Price is= "+tot;
                                        }
                                });
                                        }
                                });       
                                        }
                                });        
                                }
                        });
                }
                else if(countclick==4){
                        var PP=(parseInt(localStorage.ProductPrice));
                        var SP=(parseInt(localStorage.SizePrice));
                        var EP=(parseInt(localStorage.ExtraPrice));
                        var tot=PP+SP+EP;
                        var radiomanufacture = document.getElementsByName("manufacture")
                        .forEach(manufacture =>{
                                if(manufacture.checked){
                                        var radiomanufacture = document.getElementsByName("products")
                                        .forEach(products =>{
                                        if(products.checked){
                                                var radiomanufacture = document.getElementsByName("size")
                                                .forEach(size =>{
                                                if(size.checked){
                                                        var radiomanufacture = document.getElementsByName("Extras")
                                                        .forEach(Extras =>{
                                                        if(Extras.checked){
                                                                Total=Total+tot;
                                                                document.getElementById("showorders4").innerHTML = manufacture.value+" "+size.value+" "+products.value+" with "+Extras.value+" The Price is= "+tot;
                                        }
                                });
                                        }
                                });       
                                        }
                                });        
                                }
                        });
                }
                        
                document.getElementById('Totalprice').innerHTML="Total price = "+Total;
        }
        else if(countclick>3){
                if(confirm("Your order is full\nIf press ok your current order will be reset\nIf you want to continue press cancel")){
                        location.reload();
                }
                
        }
        
}


//add order to favourites
function Addtofav(){
        var firstoder=document.getElementById('showorders').innerHTML;
        var secondtoder=document.getElementById('showorders2').innerHTML;
        var thirdoder=document.getElementById('showorders3').innerHTML;
        var fourthoder=document.getElementById('showorders4').innerHTML;
        var totalprice=document.getElementById('Totalprice').innerHTML;

        localStorage.setItem("firstor",firstoder);
        localStorage.setItem("secondor",secondtoder);
        localStorage.setItem("thirdor",thirdoder);
        localStorage.setItem("fourthdor",fourthoder);
        localStorage.setItem("totalprice",totalprice);
        fclickcount=0;
        alert('Your order has been added to favourites');
        
}

var fclickcount=0;
var loyaltytot=0;
//Add favourites to order button
function displaymyfav(){
        document.getElementById("showorders").innerHTML='';
        document.getElementById("showorders2").innerHTML='';
        document.getElementById("showorders3").innerHTML='';
        document.getElementById("showorders4").innerHTML='';
        fclickcount=fclickcount+1;
        if(fclickcount==1){
                document.getElementById('favshow1').innerHTML=(localStorage.getItem("firstor"));
                document.getElementById('favshow2').innerHTML=(localStorage.getItem("secondor"));
                document.getElementById('favshow3').innerHTML=(localStorage.getItem("thirdor"));
                document.getElementById('favshow4').innerHTML=(localStorage.getItem("fourthdor"));
                document.getElementById('LFavorder').innerHTML=(localStorage.getItem("totalprice"));
        }
        else{
                alert("Your favourites has already been added to your order")
        }
        countclick=4;
}

/*
localStorage.setItem("Forder",manufacture.value+" "+size.value+" "+products.value+" with "+Extras.value);       
var fOtot=tot;
localStorage.setItem("Favprice",tot);
*/
//loyalty points
function loyaltyPoint(){
        document.getElementById('loyaltymenue').style.width="300px";
        document.getElementById('SCart').style.visibility="hidden";
}
function closeloyaltymenue(){
        document.getElementById('loyaltymenue').style.width="0";
        document.getElementById('SCart').style.visibility="visible";
}






//confirm order
document.getElementById("placeorder").disabled=true;
const Pocheck = document.getElementById("checkop");
Pocheck.addEventListener('change',confpo);
function confpo(){
        if(Pocheck.checked){
                document.getElementById("placeorder").disabled=false;
        }
        else{
                document.getElementById("placeorder").disabled=true ;
        }
}



//place order
const pobtn=document.getElementById('placeorder');
pobtn.addEventListener("click", poalert);
function poalert(){
        if(countclick>2){ 
                var loyaltytot=loyaltytot+(countclick*20);
        }
        countclick=0;
        var Total=0;  
        checktotclick=0;
        alert("Your order has been placed");        
        location.reload()  
        
}
var totloyalty=totloyalty+loyaltytot;
localStorage.setItem("LoyaltyPoints",totloyalty);
document.getElementById('lnumber').innerHTML=(localStorage.getItem("LoyaltyPoints"));


//Go to top button
const backtotop=document.getElementById('top');
window.onscroll = function() {
        scrollfunction()
};
function scrollfunction(){
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                backtotop.style.display = "block";
                
        } 
        else {
                backtotop.style.display = "none";
        }
}

backtotop.addEventListener('click',backtt)
function backtt(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
}





//test
function testeverything(){
        var getone=document.getElementById('Totalprice').innerHTML;
        document.getElementById('uberpick').innerHTML=getone;

}





