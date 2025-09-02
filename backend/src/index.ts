import express from 'express';
import organizationRoutes from './routes/organization';

const app = express();
app.use(express.json());
app.use('/api/organizations', organizationRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
