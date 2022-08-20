import { Router } from 'express';

import { categoriesRoutes } from './categories.routes';
import { specificatonsRoutes } from './specifications.routes';
import { usersRoutes } from './users.routes';

const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/specifications", specificatonsRoutes);
router.use("/users", usersRoutes);

export { router };