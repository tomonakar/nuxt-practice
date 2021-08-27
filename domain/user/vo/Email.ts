import { PrimitiveValueObject } from '~/domain/utils/PrimitiveValueObject'

export class Email extends PrimitiveValueObject<string> {
  static create(value: string) {
    Email.validation((value))
    return new Email(value)
  }

  static validation(value: string): never|void {
    if (value === '') {
      throw new Error(`メールアドレスを入力してください`)
    }
    if (value.match(/.+@.+\..+/) === null) {
      throw new Error('Eメールアドレスのフォーマットに従って入力してください')
    }
  }
}
