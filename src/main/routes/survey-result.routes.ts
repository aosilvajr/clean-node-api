/* eslint-disable @typescript-eslint/no-misused-promises */
import { adaptRoute } from '@/main/adapter/express/express-routes-adapter'
import { makeLoadSurveyResultController } from '@/main/factories/controllers/survey/survey-result/load-survey-result/load-survey-result-controller-factory'
import { makeSaveSurveyResultController } from '@/main/factories/controllers/survey/survey-result/save-survey-result/save-survey-result-controller-factory'
import { auth } from '@/main/middlewares/auth'
import { Router } from 'express'

export default (router: Router): void => {
  router.put('/surveys/:surveyId/results', auth, adaptRoute(makeSaveSurveyResultController()))
  router.get('/surveys/:surveyId/results', auth, adaptRoute(makeLoadSurveyResultController()))
}
