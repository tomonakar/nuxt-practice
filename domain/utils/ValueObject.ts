import { AbstractValueObject } from '~/domain/utils/AbstractValueObject'

interface ValueObjectProps {
  [index: string]: any
}

export abstract class ValueObject<
  T extends ValueObjectProps
> extends AbstractValueObject<T> {}
