import { Exception } from 'orbit/lib/exceptions';

export class InvalidServerResponse extends Exception {
  constructor(message) {
    super(message);
    this.name = 'OrbitJSONAPI.InvalidServerResponse';
  }
}
