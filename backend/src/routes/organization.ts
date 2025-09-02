import { Router } from 'express';
import { Organization } from '../models/Organization';

const router = Router();

router.get('/', async (req, res) => {
  const organizations = await Organization.findAll();
  res.json(organizations);
});

router.post('/', async (req, res) => {
  const organization = await Organization.create(req.body);
  res.status(201).json(organization);
});

export default router;
