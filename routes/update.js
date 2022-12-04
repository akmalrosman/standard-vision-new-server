const { User } = require("../models/user");
const router = require("express").Router();

router.patch("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await User.findByIdAndUpdate(
            id, updatedData, options
        )
        res.send(result)
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" })
    }
})

module.exports = router;