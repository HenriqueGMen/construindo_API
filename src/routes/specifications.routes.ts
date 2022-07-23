import { Router } from 'express';

import { SpecificationsRepository } from '../modules/cars/repositories/SpecificationRepository';

import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService';

const specificatonsRoutes = Router();

const specificationRepository = new SpecificationsRepository;

specificatonsRoutes.post("/", (req,res) => {
  const { name, description } = req.body;

  const createSpecificationService = new CreateSpecificationService(specificationRepository);

  createSpecificationService.execute({ name, description });

  return res.status(201).send();
})

export { specificatonsRoutes };