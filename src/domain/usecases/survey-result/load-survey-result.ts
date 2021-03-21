import { SurveyResultModel } from '@/domain/models/survey-result'

export interface SaveSurveyResultParams {
  surveyId: string
  accountId: string
  answer: string
  date: Date
}

export interface LoadSurveyResult {
  load: (surveyId: string) => Promise<SurveyResultModel>
}
