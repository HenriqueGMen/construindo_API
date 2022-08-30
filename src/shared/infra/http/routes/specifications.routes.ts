import { Router } from 'express';

import { CreateSpecificationController } from '@modules/cars/useCases/createSpecification/CreateSpecificationController';

import { ensureAuthenticated } from '../middleware/ensureAuthenticated';

const specificatonsRoutes = Router();

const createSpecificationController = new CreateSpecificationController;

specificatonsRoutes.use(ensureAuthenticated);
specificatonsRoutes.post("/", createSpecificationController.handle);

export { specificatonsRoutes };