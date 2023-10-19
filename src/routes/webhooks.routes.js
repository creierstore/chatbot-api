const { isProductInDB, updateProducto, createProducto, transformHtmlToPlainText } = require("../services/producto.service");

const router = require("express").Router();


router.post("/product-created", async (req, res) => {
    console.log("WEBHOOK CREATE PRODUCT: ", req.body);

    try {
        const newProduct = extractProductInfo(req.body);

        console.log({ newProduct });

        // console.log(req.body)

        if (await isProductInDB(newProduct.idProduct)) {
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

    console.log("WEBHOOK UPDATE PRODUCT: ", req.body);

    const product = extractProductInfo(req.body);
    updateProducto(product, product.idProduct);

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
        idProduct: id,
        price,
        description: transformHtmlToPlainText(body_html) ,
    };
}




module.exports = router;