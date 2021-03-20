import { EmailValidator } from '@/validation/protocols/email-validator'

export const mockEmailValidator = (): EmailValidator => {
  class EmailValidatorStub implements EmailValidator {
    isValid (email: string): boolean {
      return false
    }
  }

  return new EmailValidatorStub()
}
