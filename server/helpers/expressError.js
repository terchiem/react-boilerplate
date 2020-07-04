/** Custom error class for express route errors */
class ExpressError {
  constructor(status, message) {
    this.status = status;
    this.message = message;
  }
}

module.exports = ExpressError;
