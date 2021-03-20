import { SurveyAnswerModel } from '@/domain/models/survey'

export type AddSurveyParams = Omit<SurveyAnswerModel, 'id'>

export interface AddSurvey {
  add: (data: AddSurveyParams) => Promise<void>
}
