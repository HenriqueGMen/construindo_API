import { Router } from 'express';

import { createSpecificationController } from '../modules/cars/useCases/createSpecification';

const specificatonsRoutes = Router();

specificatonsRoutes.post("/", (req,res) => {
  return createSpecificationController.handle(req, res);
})

export { specificatonsRoutes };