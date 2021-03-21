import { makeLogControllerDecorator } from '@/main/factories/decorators/log-controller-decorator-factory'
import { makeDbLoadSurveyById } from '@/main/factories/usecases/survey/load-survey-by-id/db-load-survey-by-id-factory'
import { makeDbLoadSurveyResult } from '@/main/factories/usecases/survey/load-surveys/db-load-survey-result'
import { LoadSurveyResultController } from '@/presentation/controllers/load-survey-result/load-survey-result-controller'
import { Controller } from '@/presentation/protocols'

export const makeLoadSurveyResultController = (): Controller => {
  const controller = new LoadSurveyResultController(
    makeDbLoadSurveyById(),
    makeDbLoadSurveyResult()
  )

  return makeLogControllerDecorator(controller)
}
