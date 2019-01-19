"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* app/server.ts */
// Import everything from express and assign it to the express variable
const express_1 = __importStar(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
// Import WelcomeController from controllers entry point
const controllers_1 = require("./controllers");
const path_1 = require("path");
// Create a new express application instance
const app = express_1.default();
// The port the express app will listen on
const port = process.env.PORT || 8080;
console.log('setting up on port ' + port);
const urlEndodedParser = body_parser_1.default.urlencoded({ extended: false });
// Mount the WelcomeController at the /welcome route etc
app.use(express_1.default.static(path_1.join(__dirname, 'public')));
let router = express_1.Router();
router.use((req, res) => {
    res.send('hi back');
});
app.use('/hi', router);
app.use('*', controllers_1.DefaultController);
// Serve the application at the given port
app.listen(port, () => {
    // Success callback
    console.log(`Listening at http://localhost:${port}/`);
});
//# sourceMappingURL=server.js.map