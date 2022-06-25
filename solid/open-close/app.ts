// Add a logger:
// Inject an HttpClient
// Log Error to our server
export class ErrorHandler {
  private messageBox: any;

  constructor(messageBox) {
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
