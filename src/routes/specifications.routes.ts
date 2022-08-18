import { Router } from 'express';

import { CreateSpecificationController } from '../modules/cars/useCases/createSpecification/CreateSpecificationController';

const specificatonsRoutes = Router();

const createSpecificationController = new CreateSpecificationController;

specificatonsRoutes.post("/", createSpecificationController.handle);

export { specificatonsRoutes };