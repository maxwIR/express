"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* app/server.ts */
// Import everything from express and assign it to the express variable
const express_1 = __importDefault(require("express"));
// Import WelcomeController from controllers entry point
const controllers_1 = require("./controllers");
// Create a new express application instance
const app = express_1.default();
// The port the express app will listen on
const port = process.env.PORT || 8080;
// Mount the WelcomeController at the /welcome route etc
app.use('/', express_1.default.static('public'));
app.use('*', controllers_1.DefaultController);
// Serve the application at the given port
app.listen(port, () => {
    // Success callback
    console.log(`Listening at http://localhost:${port}/`);
});
//# sourceMappingURL=server.js.map