import {
  signUpPath,
  surveyPath,
  loginPath,
  surveyResultPath
} from './paths/'

export default {
  '/login': loginPath,
  '/signup': signUpPath,
  '/surveys': surveyPath,
  '/surveys/{surveyId}/results': surveyResultPath
}
