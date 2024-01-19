const express = require("express");
const app = express();
const router = require("./router/auth-router");

// Mount the Router: To use the router in your main Express app, you can "mount" it at a specific URL prefix
app.use("/api/auth", router);   

const port= 7000;
app.listen(port, () => {
  console.log(`server is running at port: ${port}`);
});