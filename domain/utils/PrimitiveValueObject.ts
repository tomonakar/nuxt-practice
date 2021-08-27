import { AbstractValueObject } from '~/domain/utils/AbstractValueObject'

export abstract class PrimitiveValueObject<T> extends AbstractValueObject<T> {
  get value(): T {
    return this._value
  }
}
