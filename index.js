import cors from "cors";
import "dotenv/config";
import express from "express";

import authRoute from "./routes/auth.route.js";
import checkoutRoute from "./routes/checkout.route.js";
import pizzaRoute from "./routes/pizza.route.js";

const app = express();

app.use(express.json());
app.use(cors());

// Landing (for informational purposes)
app.get('/', (req, res)=>{
  try {
    return res.status(200).json({message: "The server is running", about :"This is a REST API that serves and stores data from a temporary database for learning purposes."})
  } catch (error) {
    return res.status(500).json({message: "Server error"})
  }
})

app.use("/api/auth", authRoute);
app.use("/api/pizzas", pizzaRoute);
app.use("/api/checkouts", checkoutRoute);
app.use((_, res) => {
  res.status(404).json({ error: "Not Found" });
});



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
