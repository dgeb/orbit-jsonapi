import './support/orbit-setup';
import { on } from 'rsvp';
import './support/qunit-matchers';

on('error', function(reason) {
  console.error('rsvp error', reason);
});

import {
  serializeOps,
  serializeOp,
  op,
  successfulOperation,
  failedOperation
} from './support/operations';

import {
  jsonapiResponse
} from './support/jsonapi';

import { planetsSchema } from './support/schemas';

import './support/rsvp';

export {
  jsonapiResponse,
  serializeOps,
  serializeOp,
  op,
  successfulOperation,
  failedOperation,
  planetsSchema
};
