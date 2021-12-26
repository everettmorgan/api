import * as plans from './types';
import Resource from '../base';

import { APIEndpoint } from '../APIEndpoint';

class Plans extends Resource {
  get = APIEndpoint<plans.Plans, any>({
    method: 'get',
    path: '/api/sites/multiscreen/{site_name}',
    defaults: {
      host: 'api.duda.co',
    },
  });
}

export default Plans;
export { Plans };