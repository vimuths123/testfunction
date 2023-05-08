const button = document.getElementById('testbtn');
button.addEventListener('click', function () {
    alert('dsds')
    // Make fetch request
    fetch('/.netlify/functions/submit-form', {
        method: 'POST',
        body: JSON.stringify({ /* data to send in request body */ }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(data => {
        // Handle response data
    }).catch(error => {
        console.error(error)
    });
});
