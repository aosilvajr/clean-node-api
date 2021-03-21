import {
  SurveyResultModel,
  LoadSurveyResultRepository,
  LoadSurveyResult,
  LoadSurveyByIdRepository
} from './db-load-survey-result-protocols'

export class DbLoadSurveyResult implements LoadSurveyResult {
  constructor (
    private readonly loadSurveyResultRespository: LoadSurveyResultRepository,
    private readonly loadSurveyByIdRepository: LoadSurveyByIdRepository
  ) { }

  async load (surveyId: string): Promise<SurveyResultModel> {
    const surveyResult = await this.loadSurveyResultRespository
      .loadBySurveyId(surveyId)

    if (!surveyResult) {
      await this.loadSurveyByIdRepository.loadById(surveyId)
    }

    return surveyResult
  }
}
