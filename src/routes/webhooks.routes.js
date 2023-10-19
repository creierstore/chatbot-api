const router = require("express").Router();

router.post("/product-created", (req, res) => {
    console.log("Create Response: ", req.body);

    //TODO handle product create logic

    res.send(req.body);
});

router.post("/product-updated", (req, res) => {

    console.log("Update Response: ", req.body);

    //TODO handle update product logic

    res.send(req.body);
});



module.exports = router;