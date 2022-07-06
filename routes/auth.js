const router = require("express").Router();

router.post("/register", (req, res) => res.senStatus(200));
router.post("/login", (req, res) => res.senStatus(200));

module.exports = router;
