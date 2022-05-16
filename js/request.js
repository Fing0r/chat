"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestForAccountData = exports.importMessage = exports.requestForChangeName = exports.requestForCode = void 0;
const config_1 = require("./config");
const CustomError_1 = require("./CustomError");
const utils_1 = require("./utils");
function requestForCode(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const body = (0, utils_1.checkJSON)({ email }, false);
        const headers = {
            "Content-Type": config_1.HEADERS.JSON,
        };
        const method = config_1.METHODS.POST;
        const options = { method, body, headers };
        const response = yield fetch(config_1.URL.AUTHORIZATION, options);
        if (!response.ok)
            throw new CustomError_1.ResponseError("при запросе кода");
    });
}
exports.requestForCode = requestForCode;
function requestForChangeName(name, token) {
    return __awaiter(this, void 0, void 0, function* () {
        const body = (0, utils_1.checkJSON)({ name }, false);
        const headers = {
            "Content-Type": config_1.HEADERS.JSON,
            Authorization: config_1.HEADERS.TOKEN(token),
        };
        const method = config_1.METHODS.PATCH;
        const options = { method, body, headers };
        const response = yield fetch(config_1.URL.AUTHORIZATION, options);
        if (!response.ok)
            throw new CustomError_1.ResponseError("при смене имени");
    });
}
exports.requestForChangeName = requestForChangeName;
function importMessage() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(config_1.URL.MESSAGE);
        if (!response.ok)
            throw new CustomError_1.ResponseError("Неполадки на сервере");
        const { messages } = yield response.json();
        return messages;
    });
}
exports.importMessage = importMessage;
function requestForAccountData(token) {
    const headers = {
        Authorization: config_1.HEADERS.TOKEN(token),
    };
    const options = { headers };
    return fetch(config_1.URL.CHANGE_NAME, options);
}
exports.requestForAccountData = requestForAccountData;
