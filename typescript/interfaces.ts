export interface IUrl {
    AUTHORIZATION: string;
    CHANGE_NAME: string;
    MESSAGE: string;
    SOCKET: string;
}

export interface IAuthor {
    NAME: string;
    COMPANION: string;
    EMAIL: string;
}

export interface IHeaders {
    JSON: string;
    TOKEN: (token: string) => string
}

export interface IMethods {
    PATCH: string;
    POST: string;
}

export interface IMessages {
    COUNT_RENDER: number;
    STORAGE: IMessageInfo[];
    USER: HTMLCollectionOf<Element>;
}

export interface IMessageInfo {
    text: string;
    user: {
        email: string;
        name: string;
    };
    createdAt: string;
}

export interface IModal {
    modal: HTMLDivElement;
    closeBtn: HTMLButtonElement;
    form: HTMLFormElement;
}

export interface IModalActions {
    closeOutsideOfContent(e: MouseEvent): void;
    close(): void;
    open(): void;
    eventListener(): void;
}

export interface ISocket {
    socket: WebSocket | null;
    init(token: string): void;
    disconnect(): void;
    reconnect(token: string): void;
}

export interface IListenerSocket {
    init(token: string): void;
    error(): void;
    close(e: CloseEvent): void;
}

export interface IMessageSocket {
    init(token: string): void;
    sendMessage(text: string): void;
    renderMessage(e: MessageEvent): void;
}
