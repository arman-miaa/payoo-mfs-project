document.getElementById("btn-cash-out")
    .addEventListener('click', function (event) {
        event.preventDefault();
        console.log('cash out button clicked');

        const cashOut = document.getElementById("input-cash-out").value;
        const pinNumber = document.getElementById("cash-out-pin-number").value;
        console.log(cashOut, pinNumber);

        // wrong way to verify pin number
        if (pinNumber === '1234') {
            console.log('money is reducing');
            const balance = document.getElementById('account-balance').innerText;
            // reduce the balance
            const newBalance = parseInt(balance) - parseInt(cashOut);
            
            //update the balance
            document.getElementById('account-balance').innerText = newBalance;
            
        }
        else {
            alert('Failed to cash out, Please try again later');
        }
     })