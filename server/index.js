// import express from "express";
// import route from "./routes/routes.cjs";
// import getProducts from "./routes/getproducts.cjs";
// import getProductsdetail from "./routes/productdetails.cjs";
// import cors from "cors";

// const app = express();
// // //const port = 8000;
// // const port = process.env.PORT || 8000;
// // console.log(process.env.PORT);
// // app.use(cors({
// //     origin:[""],
// //     methods:["POST","GET","DELETE"],
// //     credentials:true

// // }));
// app.use(cors());

// app.get("/",(req,res)=>{
//     res.json("HELLO");
// })
// app.use('/', getProducts);
// //app.use(cors());
// app.use('/', route);
// app.use('/',getProductsdetail);


// // app.listen(port, () => {
// //     console.log(`Server is running on port ${port}`);
// // });










import express from "express";
import route from "./routes/routes.cjs";
import getProducts from "./routes/getproducts.cjs";
import getProductsdetail from "./routes/productdetails.cjs";
import cors from "cors";

const app = express();
const port = process.env.PORT || 8000;

// Configure CORS to allow the frontend origin
app.use(cors({
    origin: ["https://e-commerce-three-puce-14.vercel.app"], // Replace with your frontend URL
    methods: ["POST", "GET", "DELETE"],
    credentials: true
}));

app.get("/", (req, res) => {
    res.json("HELLO");
});

app.use('/', getProducts);
app.use('/', route);
app.use('/', getProductsdetail);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

