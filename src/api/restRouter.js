import express from 'express';

// routers
import { userRouter } from './resources/user';
import { restaurantRouter } from './resources/restaurant';
import { apiErrorHandler } from './modules/errorHandler';

export const restRouter = express.Router();

restRouter.use('/user', userRouter);
restRouter.use('/restaurant', restaurantRouter);
restRouter.use(apiErrorHandler);
