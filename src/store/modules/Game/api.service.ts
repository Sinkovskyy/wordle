import { AxiosResponse } from 'axios'
import { HttpService } from '../../../services'
import { TResponse } from '../../types'
import { GAME_URL } from './config'
import { TVerifyWordRequestPayload } from './types'

export class ApiGameService extends HttpService {
  static verifyWord({
    word,
  }: TVerifyWordRequestPayload): Promise<AxiosResponse<TResponse>> {
    const response = this.request({
      url: GAME_URL.verifyWord(word),
      method: 'GET',
    })

    return response
  }
}
