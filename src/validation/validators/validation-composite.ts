import { Validation } from '@/presentation/protocols'

export class ValidationComposite implements Validation {
  constructor (
    private readonly validation: Validation[]
  ) { }

  validate (input: any): Error | undefined {
    for (const validation of this.validation) {
      const error = validation.validate(input)

      if (error) {
        return error
      }
    }
  }
}
