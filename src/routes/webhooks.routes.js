const { isProductInDB, updateProducto, createProducto, transformHtmlToPlainText} = require("../services/producto.service");
const router = require("express").Router();

router.post("/product-created", async (req, res) => {
  console.log("WEBHOOK CREATE PRODUCT: ", req.body);

  try {
    const newProduct = extractProductInfo(req.body);
    if (await isProductInDB(newProduct.idProduct)) {
      throw new Error("Product already exists");
    }
    await createProducto(newProduct);
    res.send({ ok: true, newProduct });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({ ok: false, statusCode: 500 });
  }
});

router.post("/product-updated", (req, res) => {
  try {
    const product = extractProductInfo(req.body);
    updateProducto(product, product.idProduct);
    res.send(product);
  } catch (error) {
    return res.status(500).send({ ok: false, statusCode: 500 });
  }
});

function extractProductInfo(jsonData) {
  const { title, image, id, variants, body_html, handle } = jsonData;
  const storeUrl = `https://versoninformatica.myshopify.com/products/${handle}`
  
  let imageUrl = null;
  if (image && image.src) {
    imageUrl = image.src;}
  let price = null;
  if (variants && variants.length > 0) {
    price = variants[0].price;}
  return { title, image: imageUrl, idProduct: id,
    price, description: transformHtmlToPlainText(body_html), link: storeUrl
  };
}

module.exports = router;