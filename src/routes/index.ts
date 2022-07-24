import { Router } from 'express';

import { categoriesRoutes } from './categories.routes';
import { specificatonsRoutes } from './specifications.routes';

const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/specifications", specificatonsRoutes);

export { router };