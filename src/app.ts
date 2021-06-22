import express from 'express';
import employeesRouters from './routers/EmployeesRoutes';
const app = express();

// Settings
app.set('port', 3000);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/employees', employeesRouters);

// Starting server
app.listen(app.get('port'), () => {
    console.log(`Server running on port ${app.get('port')}...`);
});