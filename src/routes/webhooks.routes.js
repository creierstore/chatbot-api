const { createProducto } = require("../controllers/productos.controller");
const { isProductInDB, updateProducto } = require("../services/producto.service");

const router = require("express").Router();


router.post("/product-created", async (req, res) => {
    try {
        const newProduct = extractProductInfo(req.body);

        console.log({ newProduct });

        if (await isProductInDB(newProduct.productId)) {
            throw new Error("Product already exists");
        }

        await createProducto(newProduct);

        res.send({ ok: true, newProduct });


    } catch (error) {
        console.log(error.message);
        return res.status(500).send({ ok: false, statusCode: 500 })
    }
});

router.post("/product-updated", (req, res) => {

    // console.log("Update Response: ", req.body);

    const product = extractProductInfo(req.body);
    updateProducto(product, product.productId);

    res.send(product);
});


function extractProductInfo(jsonData) {
    const { title, image, id, variants, body_html } = jsonData;

    // Extract the image URL if available
    let imageUrl = null;
    if (image && image.src) {
        imageUrl = image.src;
    }

    // Extract price from the first variant
    let price = null;
    if (variants && variants.length > 0) {
        price = variants[0].price;
    }

    return {
        title,
        image: imageUrl,
        productId: id,
        price,
        description: body_html,
    };
}


module.exports = router;