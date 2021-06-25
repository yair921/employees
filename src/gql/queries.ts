import Employees from "../controllers/Employees";
let employee = Employees.GetInstance();

export default {
    getEmployees: (global: any, args: any) => {
        return employee.GetEmployees(args);
    }
};