import express from 'express';
import restaurantController from './restaurant.controller';

export const restaurantRouter = express.Router();

restaurantRouter.param('id', restaurantController.findByParam);

restaurantRouter
  .route('/')
  .get(restaurantController.getAll)
  .post(restaurantController.createOne);

restaurantRouter
  .route('/:id')
  .get(restaurantController.getOne)
  .put(restaurantController.updateOne)
  .delete(restaurantController.deleteOne);
