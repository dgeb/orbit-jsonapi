import { Promise } from 'rsvp';

export function jsonapiResponse(_options, _body) {
  const body = _body ? JSON.stringify(_body) : null;
  let options;

  if (typeof _options === 'number') {
    options = { status: _options };
  } else {
    options = _options || {};
  }

  options.statusText = options.statusText || statusText(options.status);
  options.headers = options.headers || {};

  let response;

  if (body) {
    options.headers['Content-Type'] = 'application/vnd.api+json';
    response = new self.Response(body, options);
  } else {
    response = new self.Response(options);
  }

  // console.log('jsonapiResponse', body, options, response.headers.get('Content-Type'));

  return Promise.resolve(response);
}

function statusText(code) {
  switch (code) {
    case 200:
      return 'OK';
    case 201:
      return 'Created';
    case 204:
      return 'No Content';
    case 422:
      return 'Unprocessable Entity';
  }
}
