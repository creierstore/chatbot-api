const Producto = require("../models/producto.models");

const htmlToText = require('html-to-text');


const searchProducto = async (data) => {
    console.log("DATA SERVICE", { data });

  try {
    const producto = await Producto.findOne({
      where: {
        title: title,
      },
    });
    return producto;
  } catch (error) {
    throw new Error("Error al buscar el producto por nombre");
  }
};

const createPoducto = async (producto) => {
  const { title, price, description, image, productId } = producto;
  try {
    const newData = await Producto.create({
      title,
      price,
      description,
      image,
      productId
      // categoriaId,
    });

    return newData;

  } catch (error) {
    console.log("Unable to create product: ", error);
  }
}

const isProductInDB = async (idProduct) => {
  try {
    const data = await Producto.findOne({
      where: {
        idProduct,
      },
    });

    if (data?.dataValues?.id) {
      return true;
    }
    return false;

  } catch (error) {
    console.log("Error", error)
  }
}


const updateProducto = async (producto, idProduct) => {
  try {
    const data = await Producto.findOne({
      where: {
        idProduct,
      },
    });

    // Transform the HTML description to plain text before updating
    if (producto.description) {
      producto.description = transformHtmlToPlainText(producto.description);
    }

    data.set(producto);

    const updatedProduct = await data.save();

    if (updatedProduct) {
      console.log("Product updated!", updatedProduct);
    }

    return updatedProduct;

  } catch (error) {
    console.log("Error: ", error.message);
  }
};


function transformHtmlToPlainText(htmlDescription) {
  // Convert HTML to plain text and remove any HTML tags
  const plainText = htmlToText.htmlToText(htmlDescription, {
    wordwrap: 130, // Set the desired line width
    ignoreImage: true, // Exclude images from the text
  });

  return plainText;
}

module.exports = {
  searchProducto,
  createPoducto,
  isProductInDB,
  updateProducto,
  transformHtmlToPlainText
};
