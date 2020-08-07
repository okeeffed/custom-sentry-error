const { SentryError } = require('./SentryError');

const main = (data) => {
  try {
    if (!data.nonExistentValue) {
      throw new SentryError('nonExistentValue required', data);
    }
  } catch (err) {
    console.error(err.name);
    console.error(err.message);
    console.error(err.stack);
  }
};

// no data passed
main({
  existentValue: 123,
  name: 'Hello, world!',
  user: {
    email: 'hello@dennisokeeffe.com',
    managerEmail: 'hello@sensitiveinfo.com',
    id: 'abc123',
    meta: {
      address: '123 Fake St',
    },
  },
});
