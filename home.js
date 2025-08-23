// Add Money functionality
document.getElementById("add-money-btn").addEventListener("click", function(e) {
    e.preventDefault();
    const bank = document.getElementById("bank").value;
    const accountNumber = document.getElementById("account-number").value;
    const amount = parseInt(document.getElementById("add-amount").value);
    const pin = parseInt(document.getElementById("pin-number").value);
    const availableBalance = parseInt(document.getElementById("available-balance").innerText);
    
    if(accountNumber.length < 11){
        alert("Account number must be 11 digit");
        return;
    }
    if(pin !== 1234){
        alert("Pin is incorrect");
        return;
    }
    if(isNaN(amount) || amount <= 0){
        alert("Please enter a valid amount");
        return;
    }

    const totalNewAvailableBalance = availableBalance + amount;
    document.getElementById("available-balance").innerText = totalNewAvailableBalance;
    alert("Money added successfully!");
});

// Cash Out functionality
document.getElementById("cash-out-btn").addEventListener("click", function(e) {
    e.preventDefault();
    const bank = document.getElementById("cash-bank").value;
    const accountNumber = document.getElementById("cash-account-number").value;
    const amount = parseInt(document.getElementById("cash-amount").value);
    const pin = parseInt(document.getElementById("cash-pin-number").value);
    const availableBalance = parseInt(document.getElementById("available-balance").innerText);
    
    if(accountNumber.length < 11){
        alert("Account number must be 11 digit");
        return;
    }
    if(pin !== 1234){
        alert("Pin is incorrect");
        return;
    }
    if(isNaN(amount) || amount <= 0){
        alert("Please enter a valid amount");
        return;
    }
    if(amount > availableBalance){
        alert("Insufficient balance");
        return;
    }

    const totalNewAvailableBalance = availableBalance - amount;
    document.getElementById("available-balance").innerText = totalNewAvailableBalance;
    alert("Cash out successful!");
});

// Toggling features
document.getElementById("add-button").addEventListener("click", function() {
    document.getElementById("cash-out-parent").style.display = "none";
    document.getElementById("add-money-parent").style.display = "block";
});

document.getElementById("cash-out-button").addEventListener("click", function() {
    document.getElementById("add-money-parent").style.display = "none";
    document.getElementById("cash-out-parent").style.display = "block";
});