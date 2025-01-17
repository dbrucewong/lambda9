"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const serveController_1 = __importDefault(require("./serveController"));
const path_1 = __importDefault(require("path"));
const querystring_1 = __importDefault(require("querystring"));
const body_parser_1 = __importDefault(require("body-parser"));
const createHandler = serveController_1.default(path_1.default, querystring_1.default);
const app = express_1.default();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
const DEFAULT_DIR = 'functions';
const PORT = 9000;
app.get('/favicon.ico', function (req, res) {
    return res.status(204).end();
});
app.all('*', createHandler(DEFAULT_DIR, false, 10), (req, res) => {
    return res.end();
});
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`);
});
