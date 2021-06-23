import Employees from "../controllers/Employees";
let employee = Employees.GetInstance();

export default {
    getEmployees: () => {
        return employee.GetEmployees();
    }
};