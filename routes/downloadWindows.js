const router = require("express").Router();

router.get("/", async ( req, res) => {
    try {
        res.download("../packages/standard-vision-win32-x64.zip")
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }
})

module.exports = router;