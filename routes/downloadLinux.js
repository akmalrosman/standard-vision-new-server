const router = require("express").Router();

router.get("/", async ( req, res) => {
    try {
        res.download("./packages/standard-vision-linux-x64.zip")
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }
})

module.exports = router;