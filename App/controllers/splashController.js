"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const path_1 = require("path");
const router = express_1.Router();
router.get('/', (req, res) => {
    res.sendFile(path_1.join(__dirname, "../Views/test.html"));
});
exports.SplashController = router;
//# sourceMappingURL=splashController.js.map