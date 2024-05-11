import request from './index'
import { USER } from '@/config/apiConfig'

/** 登陆接口 */
export const login = (body) => {
  return request.post(`${USER}/login`, body)
}
