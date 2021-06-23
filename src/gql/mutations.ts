import Employees from "../controllers/Employees";
let employee = Employees.GetInstance();

export default {
    deleteEmployee: (global: any, args: any) => {
        return employee.DeleteEmployee(global, args);
    }
};