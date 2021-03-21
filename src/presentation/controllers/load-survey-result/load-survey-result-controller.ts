import { LoadSurveyById } from '@/domain/usecases/survey/load-surveys-by-id'

import { Controller, HttpRequest, HttpResponse } from './load-survey-result-controller-protocols'

export class LoadSurveyResultController implements Controller {
  constructor (
    private readonly loadSurveyById: LoadSurveyById
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    await this.loadSurveyById.loadById(httpRequest.params.surveyId)
    return await Promise.resolve(null!)
  }
}
