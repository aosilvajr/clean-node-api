import { mockLoadSurveyByIdRepository } from '@/data/test'
import { InvalidParamError } from '@/presentation/errors'
import { forbidden } from '@/presentation/helpers/http/http-helper'

import { LoadSurveyResultController } from './load-survey-result-controller'
import { HttpRequest, LoadSurveyById } from './load-survey-result-controller-protocols'

const mockHttpRequest = (): HttpRequest => ({
  params: {
    surveyId: 'any_id'
  }
})

interface SutTypes {
  sut: LoadSurveyResultController
  loadSurveyByIdStub: LoadSurveyById
}

const makeSut = (): SutTypes => {
  const loadSurveyByIdStub = mockLoadSurveyByIdRepository()
  const sut = new LoadSurveyResultController(loadSurveyByIdStub)

  return {
    sut,
    loadSurveyByIdStub
  }
}

describe('LoadSurveyResult Controller', () => {
  test('Should call LoadSurveyById with correct values', async () => {
    const { sut, loadSurveyByIdStub } = makeSut()
    const loadById = jest.spyOn(loadSurveyByIdStub, 'loadById')
    await sut.handle(mockHttpRequest())
    expect(loadById).toHaveBeenCalledWith('any_id')
  })

  test('Should return 403 if LoadSurveyById returns null', async () => {
    const { sut, loadSurveyByIdStub } = makeSut()
    jest.spyOn(loadSurveyByIdStub, 'loadById')
      .mockReturnValueOnce(Promise.resolve(null!))
    const httpResponse = await sut.handle(mockHttpRequest())
    expect(httpResponse).toEqual(forbidden(new InvalidParamError('surveyId')))
  })
})