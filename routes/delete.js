const { User } = require("../models/user");
const router = require("express").Router()

router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const data = await User.findByIdAndDelete(id)
        res.send(`Document with ${data.username} has been deleted..`)
    } catch (error) {
        res.status(500).json({ message: "Internal server error" })
    }
})

module.exports = router;