import { Router } from 'express';

import { CreateSpecificationController } from '@modules/cars/useCases/createSpecification/CreateSpecificationController';
import { ensureAdmin } from '../middleware/ensureAdmin';
import { ensureAuthenticated } from '../middleware/ensureAuthenticated';

const specificatonsRoutes = Router();

const createSpecificationController = new CreateSpecificationController;

specificatonsRoutes.post("/", ensureAuthenticated, ensureAdmin, createSpecificationController.handle);

export { specificatonsRoutes };