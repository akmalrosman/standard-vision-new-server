const { User } = require("../models/user");
const router = require("express").Router();

router.get("/:id", async (req, res) => {
    try {
        const data = await User.findById(req.params.id);
        res.json(data)
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" })
    }
})

module.exports = router;