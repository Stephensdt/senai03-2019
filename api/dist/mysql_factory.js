"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql_1 = require("./mysql");
var MySQLFactory = /** @class */ (function () {
    function MySQLFactory() {
    }
    MySQLFactory.prototype.getConnection = function () {
        return new mysql_1.MySQL('localhost', 'root', 'root', 'db_ionic');
    };
    return MySQLFactory;
}());
exports.MySQLFactory = MySQLFactory;
