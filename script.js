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



const btnDeposit = document.getElementById("depositBtn");

btnDeposit.addEventListener("click", function(){
    const depoInput = document.getElementById("depositInput").value;
    const depoNumber =parseFloat(depoInput);

    const currentDepo = document.getElementById("depositAmount").innerText;
    const currentAmountNumber = parseFloat(currentDepo);

    const totalDepo = depoNumber + currentAmountNumber;

    document.getElementById("depositAmount").innerText = totalDepo;

    const addBalance = document.getElementById("balanceAmount").innerText;
    const addBalanceNumber = parseFloat(addBalance);

    const subAddTotal = addBalanceNumber + depoNumber;

    document.getElementById("balanceAmount").innerText = subAddTotal;
});

// withdraw er jonno

const withdrawBtn = document.getElementById("wBtn");

withdrawBtn.addEventListener("click", function(){
    const wInput = document.getElementById("wInput").value;
    const wInputNumber = parseFloat(wInput);

    const wDisplay = document.getElementById("withdrawAmount").innerText;
    const wDisplayNumber = parseFloat(wDisplay);
    const totalW = wInputNumber  + wDisplayNumber;

    document.getElementById("withdrawAmount").innerText = totalW;


    const balanceDisplay = document.getElementById("balanceAmount").innerText;
    const balanceDisplayNumber = parseFloat(balanceDisplay);

    const semiTotal = balanceDisplayNumber - wInputNumber;
    if(semiTotal <0)
    {
        alert("Your Balance Is Unsufficient")
        
    }

    

    document.getElementById("balanceAmount").innerText = semiTotal;



});




