
import { mockLoadSurveyResultRepository } from '@/data/test'
import { throwError } from '@/domain/test'

import { DbLoadSurveyResult } from './db-load-survey-result'
import { LoadSurveyResultRepository } from './db-load-survey-result-protocols'

interface SutTypes {
  sut: DbLoadSurveyResult
  LoadSurveyResultRepositoryStub: LoadSurveyResultRepository
}

const makeSut = (): SutTypes => {
  const LoadSurveyResultRepositoryStub = mockLoadSurveyResultRepository()
  const sut = new DbLoadSurveyResult(LoadSurveyResultRepositoryStub)

  return {
    sut,
    LoadSurveyResultRepositoryStub
  }
}

describe('DbLoadSurveyResult UseCase', () => {
  test('Should call LoadSurveyResultRepository ', async () => {
    const { sut, LoadSurveyResultRepositoryStub } = makeSut()
    const loadBySurveyIdSpy = jest
      .spyOn(LoadSurveyResultRepositoryStub, 'loadBySurveyId')

    await sut.load('any_survey_id')
    expect(loadBySurveyIdSpy).toHaveBeenCalledWith('any_survey_id')
  })

  test('Should throw if LoadSurveyResultRepository throws', async () => {
    const { sut, LoadSurveyResultRepositoryStub } = makeSut()

    jest
      .spyOn(LoadSurveyResultRepositoryStub, 'loadBySurveyId')
      .mockImplementationOnce(throwError)
    const promise = sut.load('any_survey_id')

    await expect(promise).rejects.toThrow()
  })
})
