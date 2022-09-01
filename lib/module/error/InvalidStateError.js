import { GenericError } from './GenericError';
/**
 * Error describing that the SDK has entered or is attempting to enter an
 * invalid state.
 *
 * @public
 */

export class InvalidStateError extends GenericError {
  constructor(message) {
    super(message);
    Object.setPrototypeOf(this, InvalidStateError.prototype);
    this.name = InvalidStateError.name;
  }

}
//# sourceMappingURL=InvalidStateError.js.map