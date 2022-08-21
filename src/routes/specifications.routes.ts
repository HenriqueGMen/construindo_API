import { Router } from 'express';
import { ensureAuthenticated } from '../middleware/ensureAuthenticated';

import { CreateSpecificationController } from '../modules/cars/useCases/createSpecification/CreateSpecificationController';

const specificatonsRoutes = Router();

const createSpecificationController = new CreateSpecificationController;

specificatonsRoutes.use(ensureAuthenticated);
specificatonsRoutes.post("/", createSpecificationController.handle);

export { specificatonsRoutes };