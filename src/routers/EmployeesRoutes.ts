import Employees from '../controllers/Employees';
import express from 'express';
const router = express.Router();
let employees = new Employees();

router.get('/', (req: any, res: any) => {
    res.status(200).send(employees.GetEmployees());
});

router.delete('/:username', (req: any, res: any) => {
    employees.DeleteEmployee(req.params.username);
    res.status(200).send(employees.GetEmployees());
});

export default router;