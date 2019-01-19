"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.use('/', (req, res) => {
    res.redirect("/error");
});
exports.DefaultController = router;
//# sourceMappingURL=defaultController.js.map