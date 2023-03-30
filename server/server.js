const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

/*Now, we will create an endpoint /message that will return a JSON object with the message 
Hello from server!. We are using app.get() to create a GET route. It takes two arguments:
    1 The path of the endpoint which in our case is just /message.
    2 The callback which can be a middleware function or a series/array of middleware functions.*/


app.get('/message', (req, res) => {
    res.json({ message: "Hello from server!" });
});
/*To start the server we will use app.listen() which takes two arguments:

    The port number on which the server will run. In our case, it is 8000.
     callback function will be called when the server starts which in our 
     case will just log the message that the server is running.*/

app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
  });