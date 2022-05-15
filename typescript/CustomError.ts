class MyError extends Error {
    constructor(message: string) {
        super(message);
        this.name = this.constructor.name;
    }
}

export class ValidationError extends MyError {
    constructor(message: string) {
        super(message);
        this.message = message;
    }
}

export class ResponseError extends MyError {
    constructor(message: string) {
        super(`Ошибка запроса ${message}`);
        this.message = message;
    }
}

export class PropertyRequiredError extends ValidationError {
    constructor(private readonly property: string ) {
        super(`Нет свойстава: ${property}`);
        this.property = property;
    }
}

export class TokenRequiredError extends ValidationError {
    constructor(private readonly property: string ) {
        super(property);
    }
}
