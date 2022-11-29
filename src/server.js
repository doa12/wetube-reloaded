import express from "express";

/** 3 lines
const app = express();
const handleListening = () => console.log("Server listening on port 4000🚀")
app.listen(4000, handleListening)
**/

/** better code, 2 lines
const app = express();
app.listen(4000, () => console.log("Server listening on port 4000🚀"));
 **/

/** sexier code **/
const PORT = 4000;
const app = express();
const handleListening = () =>
  console.log(`✅ Server listening on port http://localhost${PORT}🚀`);
app.listen(PORT, handleListening);
