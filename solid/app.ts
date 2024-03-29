// open/close principle
// Add a logger:
// Inject an HttpClient
// Log Error to our server
export class ErrorHandler {
  private messageBox: any;

  constructor(messageBox, httpClient) {
    this.messageBox = messageBox;
  }

  wrapError(err, publicResponse, severity) {
    let error = {
      originalError: err,
      publicResponse,
      severity,
    };
    if (severity < 5) {
      this.handleWarning("Warning", publicResponse);
    } else {
      this.handleError("Critical Error", publicResponse);
    }
  }

  private handleWarning(header, content) {
    this.messageBox.show(header, content);
  }

  private handleError(header, content) {
    this.messageBox.show(header, content);
  }
}

export class ErrorLogger {
  private _endpoint: string = "api/log";

  constructor(private _httpClient) {}

  logError(errorObject) {
    return this._httpClient.post(this._endpoint, errorObject);
  }
}

export class ErrorHandlerWithLogging extends ErrorHandler {
  private _logger: ErrorLogger;

  constructor(messageBox, httpClient, logger) {
    super(messageBox, httpClient);
    this._logger = logger;
  }

  wrapError(err: any, publicResponse: any, severity: any): void {
    return this._logger.logError(err).then(() => {
      super.wrapError(err, publicResponse, severity);
    });
  }
}

// Liskov substituion principle
// objects of a superclass should be replaceable with objects of its subclasses without breaking the application.
let err, publicResponse, severity;

const error = new ErrorHandler("message", {});
error.wrapError(err, publicResponse, severity);

const errorWithLog = new ErrorHandlerWithLogging("message", {}, {});
errorWithLog.wrapError(err, publicResponse, severity);
