import { LoadSurveyResultRepository } from '@/data/protocols/db/survey-result/load-survey-result-repository'
import { SurveyResultModel } from '@/domain/models/survey-result'
import { mockSurveyResultModel } from '@/domain/test'

import { DbLoadSurveyResult } from './db-load-survey-result'

describe('Db LoadSurveyResult UseCase', () => {
  test('Should call LoadSurveyResultRepository ', async () => {
    class LoadSurveyResultRespositoryStub implements LoadSurveyResultRepository {
      async loadBySurveyId (surveyId: string): Promise<SurveyResultModel> {
        return await Promise.resolve(mockSurveyResultModel())
      }
    }
    const loadSurveyResultRespositoryStub = new LoadSurveyResultRespositoryStub()
    const sut = new DbLoadSurveyResult(loadSurveyResultRespositoryStub)
    const loadBySurveyIdSpy = jest
      .spyOn(loadSurveyResultRespositoryStub, 'loadBySurveyId')

    await sut.load('any_survey_id')
    expect(loadBySurveyIdSpy).toHaveBeenCalledWith('any_survey_id')
  })
})
