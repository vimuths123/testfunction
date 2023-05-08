exports.handler = async (event, context) => {
    // Get the URL of the previous page
    const referer = event.headers.referer;

    console.log(referer)
  
    // Set the Location header to redirect the user back to the previous page
    const response = {
      statusCode: 302,
      headers: {
        Location: referer || '/'
      }
    };
  
    return response;
  };
  