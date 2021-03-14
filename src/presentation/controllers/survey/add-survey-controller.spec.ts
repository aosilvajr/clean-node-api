import { AddSurveyController } from './add-survey-controller'
import { HttpRequest, Validation } from './add-survey-controller-protocols'

const makeFakeRequest = (): HttpRequest => ({
  body: {
    question: 'any_question',
    answers: [{
      image: 'any_image',
      answer: 'any_answer'
    }]
  }
})

describe('AddSurvey Controller', () => {
  test('Shoud call Validation with correct values', async () => {
    class ValidationStub implements Validation {
      validate (input: any): Error | undefined {
        return undefined
      }
    }
    const validateionStub = new ValidationStub()
    const validateSpy = jest.spyOn(validateionStub, 'validate')
    const sut = new AddSurveyController(validateionStub)
    const httpRequest = makeFakeRequest()

    await sut.handle(httpRequest)

    expect(validateSpy).toHaveBeenCalledWith(httpRequest.body)
  })
})
