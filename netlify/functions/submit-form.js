exports.handler = async (event) => {

    console.log('here')
    // Do something with the form data
    // ...
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Form submitted successfully!" }),
    };
  };
  