"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const os_1 = require("os");
const App = (0, express_1.default)();
//Set Server Configurations
App.set('view engine', 'ejs');
App.set('views', 'dist/views/pages');
//Set Server Use
App.use(express_1.default.static('dist'));
App.use('css', express_1.default.static(__dirname + 'public'));
App.use('js', express_1.default.static(__dirname + 'code'));
//Set Routes
App.get('/', (req, res) => {
    res.render('index');
});
// Config Networks 
const PORT = process.env.PORT || 8080;
const Net = (0, os_1.networkInterfaces)();
const IP = Net.wlp0s20f3[0].address;
// Set Listen
App.listen(PORT, () => {
    console.info(`
+/------------------------------------
Server-Status: 200
Server-Msg: Server Running Okay
Local-Host: http://localhost:${PORT}
Net-Host: http://${IP}:${PORT}
+/------------------------------------`);
});
