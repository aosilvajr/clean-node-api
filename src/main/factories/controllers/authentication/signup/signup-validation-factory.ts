import { EmailValidatorAdapter } from '@/infra/validators/email-validator-adapter'
import { Validation } from '@/presentation/protocols/validation'
import {
  RequiredFieldValidation,
  CompareFieldsValidation,
  ValidationComposite,
  EmailValidation
} from '@/validation/validators'

export const makeSignUpValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['name', 'email', 'password', 'password_confirmation']) {
    validations.push(new RequiredFieldValidation(field))
  }

  validations.push(new CompareFieldsValidation('password', 'password_confirmation'))
  validations.push(new EmailValidation('email', new EmailValidatorAdapter()))

  return new ValidationComposite(validations)
}
