import express from "express";
import route from "./routes/routes.cjs";
import getProducts from "./routes/getproducts.cjs";
import getProductsdetail from "./routes/productdetails.cjs";
import cors from "cors";

const app = express();
const port = 8000;

app.use(cors({
    origin:"*"
}));
app.use('/', getProducts);
//app.use(cors());
app.use('/', route);
app.use('/',getProductsdetail);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});