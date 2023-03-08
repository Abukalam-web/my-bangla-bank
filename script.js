// for first page
var fullArea = document.getElementById("login");

fullArea.addEventListener("click", function(){
    var clicking = document.getElementById("login-area");
    clicking.style.display= "none";

   var dashboardArea = document.getElementById("transection") ;
   dashboardArea.style.display= "block";
})

// const checking = document.getElementById("check");

// checking.addEventListener("click", function(){
//     const clicking = document.getElementById("check-btn");

//     checking.style.display= "none";
// });



// for second page

// const getDepositBtn = document.getElementById("depositBtn");

// getDepositBtn.addEventListener("click",function(){
//     var getDepositInput = document.getElementById("depositInput").value;
    
//     var getDepositInputNumber = parseFloat("getDepositInput");

//     var depositBalance = document.getElementById("depositAmount").innerText;
//     var depositBalanceNumber = parseFloat("depositBalance");
//     const total = depositBalanceNumber + getDepositInputNumber;

//     document.getElementById("depositBalance").innerText= total;


// });



