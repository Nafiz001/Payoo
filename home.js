const transactionData = [];

// function to get input values from the form
function getInputValues(id) {
    const inputFieldValue = parseInt(document.getElementById(id).value);
    return inputFieldValue;
}

// function to toggle
function toggleDisplay(idToShow) {
    const forms = document.getElementsByClassName("form");
    for (const form of forms) {
        form.style.display = "none";
    }
    const elementToShow = document.getElementById(idToShow);
    if (idToShow === "transactions-parent") {
        elementToShow.style.display = "flex";
    } else {
        elementToShow.style.display = "block";
    }
}

// Toggle button active state
function toggleActiveButton(activeButtonId) {
    const formBtns = document.getElementsByClassName("form-btn");
    for (const btn of formBtns) {
        btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]","border-gray-300","border-2","border-blue-500");
    }
    document.getElementById(activeButtonId).classList.add("border-[#0874f2]","bg-[#0874f20d]","border-2","border-blue-500");
}

// Add Money functionality
document.getElementById("add-money-btn").addEventListener("click", function(e) {
    e.preventDefault();
    const bank = document.getElementById("bank").value;
    const accountNumber = document.getElementById("account-number").value;
    const amount = getInputValues("add-amount");
    const pin = getInputValues("pin-number");
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
    const data = {name: "Add Money",
        date: new Date().toLocaleDateString()
    }
    transactionData.push(data);
    alert("Money added successfully!");
});

// Cash Out functionality
document.getElementById("cash-out-btn").addEventListener("click", function(e) {
    e.preventDefault();
    const bank = document.getElementById("cash-bank").value;
    const accountNumber = document.getElementById("cash-account-number").value;
    const amount = getInputValues("cash-amount");
    const pin = getInputValues("cash-pin-number");
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
    const data = {name: "Cash Out",
        date: new Date().toLocaleDateString()
    }
    transactionData.push(data);
    alert("Cash out successful!");
});

document.getElementById("transactions-button").addEventListener("click", function() {
    // Clear existing transactions first
    const transactionsContainer = document.getElementById("transactions-parent").querySelector('.flex.flex-col');
    const existingTransactions = transactionsContainer.querySelectorAll('.bg-white');
    existingTransactions.forEach(transaction => transaction.remove());
    
    for (const transaction of transactionData) {
        const div = document.createElement("div");
        div.innerHTML = `
                 <div class="bg-white p-3 rounded-xl flex justify-between items-center w-full mt-4">
                    <div class="flex items-center">
                        <div class="border-2 p-3 rounded-full bg-[#f4f5f7]">
                            <img src="assets/wallet1.png" alt="">
                        </div>
                        <div class="ml-3">
                            <h1>${transaction.name}</h1>
                            <p>${transaction.date}</p>
                        </div>
                    </div>
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                </div>`;
        document.getElementById("transactions-parent").querySelector('.flex.flex-col').appendChild(div);
    }
});


// Toggling features
document.getElementById("add-button").addEventListener("click", function() {
    toggleDisplay("add-money-parent");
    toggleActiveButton("add-button");
    
});

document.getElementById("cash-out-button").addEventListener("click", function() {
    toggleDisplay("cash-out-parent");
    toggleActiveButton("cash-out-button");
});


document.getElementById("transfer-button").addEventListener("click", function() {
    toggleDisplay("transfer-money-parent");
    toggleActiveButton("transfer-button");
});
document.getElementById("get-bonus-button").addEventListener("click", function() {
    toggleDisplay("get-bonus-parent");
    toggleActiveButton("get-bonus-button");
});
document.getElementById("pay-bill-button").addEventListener("click", function() {
    toggleDisplay("pay-bill-parent");
    toggleActiveButton("pay-bill-button");
});
document.getElementById("transactions-button").addEventListener("click", function() {
    toggleDisplay("transactions-parent");
    toggleActiveButton("transactions-button");
});