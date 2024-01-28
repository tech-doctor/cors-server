const corsProxy = require('cors-anywhere');

// // Listen on a specific host via the HOST environment variable.
// const host = process.env.HOST || '0.0.0.0';
// // Listen on a specific port via the PORT environment variable.
// const port = process.env.PORT || 8080;

// corsProxy.createServer({
//     originWhitelist: ['http://localhost:5503', 'https://m-uber-clone.netlify.app', 'https://sendairtime.netlify.app/'],
//     requireHeader: ['origin', 'x-requested-with'],
//     removeHeaders: ['cookie', 'cookie2']
// }).listen(port, host, () => {
//     console.log('Running CORS Anywhere on ' + host + ':' + port);
// }); 


function createCorsProxyServer() {
    // Listen on a specific host via the HOST environment variable.
    const host = process.env.HOST || '0.0.0.0';
    // Listen on a specific port via the PORT environment variable.
    const port = process.env.PORT || 8080;

    return corsProxy.createServer({
        originWhitelist: ['http://localhost:5503', 'https://m-uber-clone.netlify.app', 'https://sendairtime.netlify.app/'],
        requireHeader: ['origin', 'x-requested-with'],
        removeHeaders: ['cookie', 'cookie2']
    }).listen(port, host, () => {
        console.log('Running CORS Anywhere on ' + host + ':' + port);
    });
}


module.exports = createCorsProxyServer();
// ... (previous code) module.exports = app; // Export the Express app