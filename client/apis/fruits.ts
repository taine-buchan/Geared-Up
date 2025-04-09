import request from 'superagent'
import { GreatWalk } from '../../models/great_walk'

const rootUrl = '/api/v1'

export function getGreatWalks(): Promise<GreatWalk[]> {
  return request.get(rootUrl + '/great-walks').then((res) => {
    return res.body.GreatWalks
  })
}
