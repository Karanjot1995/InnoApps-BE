const functions = require("firebase-functions");



const express = require("express");
const port = 8001;
const app = express();

app.use("/images", express.static(`${__dirname}/images`));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Authorization, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  let imgPath =
    "https://us-central1-test-backend-baf28.cloudfunctions.net/app/images";
  let user = {
    name: "Mark Collins",
    phone: "35467456846",
    email: "jenny_example@email.com",
    location: "Dromoland, Newmarket on Fergus, Co. Clare, V95 ATD3, Ireland",
    avatar: "./images/profile.png",
  };
  let product = {
    product_name: "Ghost Bond XL 1.3oz",
    batch_number: "BCGB1.3",
    product_number: "BCGB1",
    scan_id: "DG34XDvfg4F",
    expiry: "01/12/2020",
    store_name: "The Hair Store",
    store_location: "Oldbridge, Clonmel, Co. Tipperary, Ireland",
    images: [
      `${imgPath}/product/1.jpg`,
      `${imgPath}/product/2.jpg`,
      `${imgPath}/product/3.jpg`,
      `${imgPath}/product/4.jpg`,
      `${imgPath}/product/5.jpg`,
      `${imgPath}/product/6.jpg`,
      `${imgPath}/product/1.jpg`,
      `${imgPath}/product/2.jpg`,
      `${imgPath}/product/3.jpg`,
      `${imgPath}/product/4.jpg`,
      `${imgPath}/product/5.jpg`,
      `${imgPath}/product/6.jpg`,
    ],
  };
  let request = {
    subject: product.product_name,
    type: "Duplicate Product",
    date: "01/01/2020",
    description:
      "Id erat tellus orci est rutrum fringilla velit vestibulum habitant vulputate taciti convallis euismod, rutrum consequat senectus ultrices class vehicula.",
  };
  let details = { user: user, product: product, request: request };
  res.send(details);
});

app.listen(port, () =>
  console.log(`App listening at http://localhost:${port}`)
);

exports.app = functions.https.onRequest(app);
