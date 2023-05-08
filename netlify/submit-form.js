exports.handler = async (event) => {
    const formData = JSON.parse(event.body);
    // Do something with the form data

    console.log('here')
    // ...
    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Form submitted successfully!" }),
    };
};