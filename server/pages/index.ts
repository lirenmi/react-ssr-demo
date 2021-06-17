import compose from 'koa-compose';

import educationRoutes from './education';

export default compose([educationRoutes]);
