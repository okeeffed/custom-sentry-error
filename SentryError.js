require('dotenv').config();
const Sentry = require('@sentry/node');

Sentry.init({
  dsn: process.env.SENTRY_ENDPOINT,
});

const denyList = [/email/gi, /name/gi, /address/gi];

class SentryError extends Error {
  constructor(errMessage, data, type = 'error') {
    // Passes errMessage to the Error super class,
    // similar to call new Error(errMessage).
    super(errMessage);

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, SentryError);
    }

    this.name = 'SentryError';

    Sentry.addBreadcrumb({
      category: 'data',
      message: errMessage,
      data: this.redactSensitiveInformation(data),
      type: type,
      level: Sentry.Severity.Debug,
    });

    Sentry.captureException(errMessage);
  }

  redactSensitiveInformation(data) {
    const keys = Object.keys(data);
    const safeData = {};

    for (const key of keys) {
      if (!Array.isArray(data[key]) && typeof data[key] === 'object') {
        // recursively check deep nested children
        safeData[key] = this.redactSensitiveInformation(data[key]);
      } else if (denyList.some((regex) => regex.test(key))) {
        // redacted the data
        safeData[key] = '[REDACTED]';
      } else {
        // assign data to object to send to Sentry
        safeData[key] = data[key];
      }
    }
    return safeData;
  }
}

module.exports = { SentryError };
