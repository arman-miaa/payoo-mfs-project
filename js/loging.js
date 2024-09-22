// document.getElementById("button-login").addEventListener('click', function () {})
// search: form submit reloading the page

//  step - 1 set event handler
document.getElementById("button-login")
    .addEventListener("click", function (event) {
        // step - 2 prevent default behavior (prevent reloding browser)
        event.preventDefault();
        
        // step -3 get the phone and pin number
        const phoneNumber = document.getElementById("phone-number").value;
        const pinNumber = document.getElementById("pin-number").value;
        console.log(phoneNumber, pinNumber);
        
        // step 4: bad way to validate 
        // this is temporay, You should do like this
        if (phoneNumber === '5' && pinNumber === '1234') {
            console.log('you are logged in');
            // step 5: allow user to use the website
            window.location.href='./home.html'
        }
        else {
            alert('Wrong phone number or  pin')
        }
});
