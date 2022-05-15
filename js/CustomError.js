"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenRequiredError = exports.PropertyRequiredError = exports.ResponseError = exports.ValidationError = void 0;
class MyError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}
class ValidationError extends MyError {
    constructor(message) {
        super(message);
        this.message = message;
    }
}
exports.ValidationError = ValidationError;
class ResponseError extends MyError {
    constructor(message) {
        super(`Ошибка запроса ${message}`);
        this.message = message;
    }
}
exports.ResponseError = ResponseError;
class PropertyRequiredError extends ValidationError {
    constructor(property) {
        super(`Нет свойстава: ${property}`);
        this.property = property;
        this.property = property;
    }
}
exports.PropertyRequiredError = PropertyRequiredError;
class TokenRequiredError extends ValidationError {
    constructor(property) {
        super(property);
        this.property = property;
    }
}
exports.TokenRequiredError = TokenRequiredError;
