import { PrimitiveValueObject } from '~/domain/utils/PrimitiveValueObject'

export class Name extends PrimitiveValueObject<string> {
  static create(value: string) {
    return new Name(value)
  }

  static validation(value: string) {
    if (value === '') {
      throw new Error('名前を入力してください')
    }
    if (typeof value !== 'string') {
      throw new TypeError('名前は文字列にしてください')
    }
    if (value.length > 8) {
      throw new Error('名前は8文字以内にしてください')
    }
  }
}
